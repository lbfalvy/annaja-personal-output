import fs from "fs/promises"
import http from "isomorphic-git/http/node/index.js"
import isogit from "isomorphic-git"
import { generate } from "./generate.mjs"

const deps = { fs, http };

/** Ensure that the repository is clean and switching branches is safe
 * 
 * @param {{
 *  fs: import("isomorphic-git").CallbackFsClient
 *    | import("isomorphic-git").PromiseFsClient,
 *  dir: string
 * }} cfg isogit parameters; for this operation only a file system and a path within are needed
 *  (typing this param would have been easier with Typescript)
 * @returns {boolean}
 */
async function isClean(cfg) {
  const status = await isogit.statusMatrix({ ...cfg });
  // see the statusMatrix docs for the meaning of these values
  const changed = status.filter(row => row[1] !== row[2] || row[1] !== row[3]);
  return changed.length === 0;
}

export async function publish(targetBranch) {
  const dir = ".";
  const cfg = { ...deps, dir };
  // get the branch we are publishing from
  const sourceBranch = await isogit.currentBranch(cfg);
  // ensure that the repository is in a sensible state
  if (sourceBranch === undefined) throw new Error("Cannot publish with detached HEAD!");
  if (sourceBranch === targetBranch) throw new Error("Cannot publish to current branch");
  if (!isClean(cfg)) {
    throw new Error(
      "Repository not clean! For this operation to succeed all changes have to be committed"
    );
  }

  // move to latest remote version of target branch
  await isogit.fetch({ ...cfg, remote: "origin" });
  if (!(await isogit.listBranches(cfg)).includes(targetBranch)) {
    throw new Error(
      "Target branch missing. Ensure that the branch exists and has a tracking remote"
    );
  }
  try {
    await isogit.checkout({ ...cfg, ref: targetBranch, noCheckout: true });
    // if (!(await isogit.listRemotes(cfg)))
    await isogit.pull({ ...cfg, fastForwardOnly: true, ref: targetBranch });

    // generate published files and save them so the merge doesn't override anything
    await generate();
    await isogit.add({ ...cfg, filepath: "docs", force: true });
    await isogit.commit({
      ...cfg,
      ref: targetBranch,
      message: `Published ${sourceBranch} to ${targetBranch}`,
      parent: [targetBranch, sourceBranch]
    })
    await isogit.push({ ...cfg, remote: "origin" , ref: targetBranch });
  } finally {
    // move back to source branch
    await isogit.checkout({ ...cfg, ref: sourceBranch })
  }
}