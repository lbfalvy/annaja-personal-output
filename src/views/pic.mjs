import { mainTpl } from "../templates/main.mjs";
import { htmlTpl } from "../templates/html.mjs";

/** Page for a given picture
 * @param {{
 *  title: string,
 *  source: string,
 *  size: [number, number],
 *  about: string
 * }} pic 
 * @returns {string}
 */
export function genPicPage(pic) {
  return htmlTpl(/*html*/`
    <title>annaja - ${pic.title}</title>
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