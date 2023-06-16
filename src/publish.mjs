import process from "process"
import fs from "fs/promises"
import http from "isomorphic-git/http/node/index.js"
import isogit from "isomorphic-git"

const deps = { fs, http };

/** Ensure that the repository is clean and switching branches is safe
 * 
 * @param {{
 *  fs: import("isomorphic-git").CallbackFsClient
 *    | import("isomorphic-git").PromiseFsClient,
 *  dir: string
 * }} cfg isogit parameters; for this operation only a file system and a path within are needed
 *  (typing this param would have been easier with Typescript)
 * @returns {Promise<boolean>} true if there are no uncommitted changes
 */
async function isClean(cfg) {
  const status = await isogit.statusMatrix(cfg);
  // see the statusMatrix docs for the meaning of these values
  const changed = status.filter(([_name, ...stat]) => (
    stat.some(st => st !== 0)
    && stat.some(st => st !== 1)
  ));
  return changed.length === 0;
}

/** Publish a folder to another branch
 * @param {{
 *  targetBranch: string,
 *  token: string,
 *  oauth2format: string,
 *  generate: () => Promise<void>,
 *  pubpath: string | string[],
 *  onAuth?: import("isomorphic-git").AuthCallback
 *  commitMessage?: string
 *  remote?: string
 *  dir?: string
 * }} opts
 */
export async function publish(opts) {
  // mandatory parameters
  const { targetBranch, onAuth, pubpath, generate } = opts;
  // default parameters
  const dir = opts.dir ?? process.cwd();
  const remote = opts.remote ?? "origin";
  const commitMessage = opts.commitMessage ?? `Published`;
  // shared parameters across all isogit commands
  const cfg = { ...deps, dir, remote };
  // remember the branch we are publishing from
  const sourceBranch = await isogit.currentBranch(cfg);

  // ensure that the repository is in a sensible state
  if (sourceBranch === undefined) throw new Error("Cannot publish with detached HEAD!");
  if (sourceBranch === targetBranch) throw new Error("Cannot publish to current branch");
  if (!await isClean(cfg)) throw new Error(
    "Repository not clean! For this operation to succeed all changes have to be committed"
  );
  const exists = (await isogit.listBranches(cfg)).includes(targetBranch);

  try {
    // create and switch to target branch without touching the working directory
    if (!exists) await isogit.branch({ ...cfg, ref: targetBranch, force: true, checkout: false });
    await isogit.checkout({ ...cfg, ref: targetBranch, noCheckout: true });
    // the working directory still reflects the state this function was called in

    // generate published files
    await generate();
    // Commit only and exactly the published files. Due to some strange behaviour on
    // orphan commits, files we don't care about need to be explicitly removed.
    for (const item of await isogit.listFiles(cfg)) {
      await isogit.remove({ ...cfg, filepath: item });
    }
    await isogit.add({ ...cfg, filepath: pubpath, force: true });
    await isogit.commit({
      ...cfg,
      ref: targetBranch,
      message: commitMessage,
      parent: [] // orphan commit
    });
    if (onAuth !== undefined) await isogit.push({
      ...cfg,
      ref: targetBranch,
      remoteRef: `refs/heads/${targetBranch}`,
      force: true,
      onAuth
    });
  } finally {
    // move back to source branch even in case of an error
    await isogit.checkout({ ...cfg, ref: sourceBranch, force: true })
  }
}