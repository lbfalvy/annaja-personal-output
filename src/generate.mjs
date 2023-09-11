import { reset, writePage } from "./write.mjs"
import { pics } from "./data.mjs"
import { genIndexPage } from "./views/index.mjs"
import { genPicPage } from "./views/pic.mjs"
import { genContactPage } from "./views/contact.mjs"
import { genAboutPage } from "./views/about.mjs"

/*
By web framework logic this file corresponds roughly to a router
*/

/** Body of the bin/generate.mjs script */
export async function generate() {
  await reset()
  await writePage("", genIndexPage())
  await writePage("/about", genAboutPage())
  await writePage("/contact", genContactPage())
  for (const id of pics.keys()) {
    await writePage(picUrl(id), genPicPage(id))
  }
}

/** Get the URL of the picture in the given position
 * @param {number} id Zero-based index of the image
 * @returns {string}
 */
export function picUrl(id) {
  return `/works/${id}`
}