import process from "process";
import { publish } from "git-host-publish";
import path from "path";
import fs from "fs";
import { generate } from "../src/generate.mjs";
import http from "isomorphic-git/http/node/index.js";

/*
Publish the website to Github Pages. By default, updates are pushed to public.
If this is not desirable, specify a new branch with --target-branch=some-branch
*/

/** Load the .env file from the given directory
 * 
 * The .env file contains key-value pairs separated by `=`
 * one per line. Lines starting with # are ignored as comments
 * @param {string} dir the working directory, usually cwd
 * @returns {Promise<Record<string, string>>} Values defined in the file if any
 */
async function loadDotEnv(dir) {
  const envfile = path.join(dir, ".env")
  try {
    const txt = await fs.promises.readFile(envfile, { encoding: "utf-8" });
    const lines = txt.split("\n");
    // the parts after the first # in each line are comments
    const data = lines.filter(l => !l.trimStart().startsWith("#"))
    // indentation, spaces around the = and spaces after the data are ignored
    const entries = data.map(l => l.split("=", 2).map(s => s.trim()))
    // all rows must encode an assignment to a non-zero-length name
    const badLine = entries.findIndex(ent => ent.length < 2 || ent[0].length == 0)
    if (badLine != -1) throw new Error(`malformed env file at ${envfile}; line ${badLine+1}`);
    return Object.fromEntries(entries)
  } catch {
    return {}
  }
}

const docs = `
Prepare a release bundle in a single commit with no history that overwrites the previous release
bundle when pushed.

Usage:
$ node publish.mjs
$ node publish.mjs --target-branch=production
then
$ git push origin production --force

Since the new branch has no history, --force is needed.
`

if (process.argv.includes("--help")) console.log(docs);
else {
  const branchArgPrefix = "--target-branch=";
  const targetBranch = process.argv
    .filter(arg => arg.startsWith(branchArgPrefix)) // arguments of the right shape
    .at(-1) // take the last occurrence
    ?.slice(branchArgPrefix.length)?.trim() // just the value if exists
    ?? "production"; // or "production" by default
  await publish({
    fs, http, path,
    dir: process.cwd(),
    targetBranch,
    pubpath: "docs/",
    generate
  })
  console.log(`The release has been generated and written to ${targetBranch}. Please publish with`)
  console.log(`git push origin ${targetBranch} --force`)
}