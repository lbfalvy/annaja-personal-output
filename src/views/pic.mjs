import { writePage } from "../write.mjs"
import { getPicID } from "../data.mjs"
import { mainTpl } from "../templates/main.mjs";

/** Page for a given picture
 * @param {{
 *  title: string,
 *  source: string,
 *  size: [number, number],
 *  about: string
 * }} pic 
 */
export async function genPicPage(pic) {
  await writePage(`/works/${getPicID(pic)}`, /*html*/`
    <title>${pic.title}</title>
    <link rel="stylesheet" href="/works.css">
  `, mainTpl(/*html*/`
    <figure><img src="${pic.source}" alt=""></figure>
    <!-- <figure><img src="images/1.jpg" alt=""></figure> -->
    <article>
      <div class="details_title">
        <p>Title: </p><span>${pic.title}</span>
      </div>
      <div class="details">
        <p>Size: </p><span>width: ${pic.size[0]}cm, height: ${pic.size[1]}cm</span>
      </div>
      <div class="details">
        <p>About: </p><span>${pic.about}</span>
      </div>
    </article>
  `));
}