import { mainTpl } from "../templates/main.mjs";
import { htmlTpl } from "../templates/html.mjs";
import { pics } from "../data.mjs";
import { picUrl } from "../generate.mjs";

/** Page for a given picture
 * @param {number} id 
 * @returns {string}
 */
export function genPicPage(id) {
  const pic = pics[id];
  return htmlTpl(/*html*/`
    <title>annaja - ${pic.title}</title>
    <link rel="stylesheet" href="/works.css">
  `, mainTpl(/*html*/`
    ${0 < id ? /*html*/`
      <a id="prevImage" href="${picUrl(id - 1)}">prev</a>
    ` :""}
    ${id < pics.length - 1 ? /*html*/`
      <a id="nextImage" href="${picUrl(id + 1)}">next</a>
    ` :""}
    <figure id="imageHolder"><img id="slide" src="${pic.source}" alt=""></figure>
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