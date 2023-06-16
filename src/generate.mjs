import { reset, writePage } from "./write.mjs"
import { getPicID, pics } from "./data.mjs"
import { genIndexPage } from "./views/index.mjs"
import { genPicPage } from "./views/pic.mjs"

/*
By web framework logic this file corresponds roughly to a router
*/

/** Body of the bin/generate.mjs script */
export async function generate() {
  await reset()
  await writePage("", genIndexPage())
  for (const pic of pics) {
    await writePage(`/works/${getPicID(pic)}`, genPicPage(pic))
  }
}