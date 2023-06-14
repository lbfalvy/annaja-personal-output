import fs from "fs/promises"

/*
Utilities for writing files. As a rule of thumb, things outside this file should not know that the
output directory is ./data
*/

/** Trim a single `/` from the start and end of a path
 * @param {string} path 
 */
function trimSlashes(path) {
  const startSkip = path.startsWith('/') ? 1 : 0;
  const endSkip = path.endsWith('/') ? 1 : 0;
  return path.substring(startSkip, path.length - endSkip);
}

/** Generate a webpage
 * Populate and write an HTML page skeleton to a file
 * 
 * Paths are associated with directories and an index.html file is created in them because this way
 * the .html extension can be removed
 * @param {string} path HTTP path where the resource will be visible
 * @param {string} head Contents of `<head>`
 * @param {string} body Contents of `<body>`
 */
export async function writePage(path, head, body) {
  const normalPath = trimSlashes(path);
  // Ensure directory exists
  await fs.mkdir(`./docs/${normalPath}`, { recursive: true });
  const htmlPath = `./docs/${normalPath}/index.html`;
  // Create HTML file
  await fs.writeFile(
    htmlPath,
    /*html*/`<!DOCTYPE html>
<html>
  <head>
    <meta encoding="utf-8">
    ${head}
  </head>
  <body>${body}</body>
</html>`,
    { flag: "wx" } // See https://nodejs.org/api/fs.html#file-system-flags
    // By default write silently replaces existing files, but in our case a duplicate html file
    // indicates programmer error so it should fail
  );
}

/** Clean up after previous build and prepare static files */
export async function reset() {
  await fs.rm(`./docs`, { recursive: true, force: true });
  await fs.cp(`./static`, `./docs`, { recursive: true })
}