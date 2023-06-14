import fs from "fs/promises"
import { htmlTpl } from "./templates/html.mjs";

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

const defaultMeta = {
  description: "portfolio website of painter AnnaJa",
  keywords: "contemporary art painter painting contemporary-art modern-painting artist contemporary-artist"
}

/** Merge meta-tags with the default
 * @param {Record<string, string>} meta
 * @returns {Record<string, string>}
 */
function mergeMeta(meta) {
  // keywords are added to the list
  const keywords = "keywords" in meta
    ? [ ...defaultMeta.keywords.split(" "), ...meta.keywords.split(" ") ]
    : defaultMeta.keywords;
  // for everything else, explicit overrides default
  return {
    ...defaultMeta,
    ...meta,
    keywords
  }
}

/** Generate a webpage
 * Populate and write an HTML page skeleton to a file
 * 
 * Paths are associated with directories and an index.html file is created in them because this way
 * the .html extension can be removed
 * @param {string} path HTTP path where the resource will be visible
 * @param {string} head Contents of `<head>`
 * @param {string} body Contents of `<body>`
 * @param {Record<string, string>} meta meta tags for SEO and social cards
 */
export async function writePage(path, head, body, meta = {}) {
  const normalPath = trimSlashes(path);
  const allMeta = mergeMeta(meta)
  // Ensure directory exists
  await fs.mkdir(`./docs/${normalPath}`, { recursive: true });
  const htmlPath = `./docs/${normalPath}/index.html`;
  // Create HTML file
  await fs.writeFile(
    htmlPath,
    htmlTpl(head, body, allMeta),
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