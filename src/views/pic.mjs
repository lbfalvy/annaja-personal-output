import { writePage } from "../write.mjs"
import { getPicID } from "../data.mjs"

/** Page for a given picture
 * @param {{
 *  title: string,
 *  source: string,
 *  content: string
 * }} pic 
 */
export async function genPicPage(pic) {
  await writePage(getPicID(pic), /*html*/`
    <title>${pic.title}</title>
  `, /*html*/`
    <h1>${pic.title}</h1>
    <img src="${pic.source}">
    <p>${pic.content}</p>
  `);
}