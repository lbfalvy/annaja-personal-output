import { mainTpl } from "../templates/main.mjs";
import { htmlTpl } from "../templates/html.mjs";
import { pics } from "../data.mjs";
import { picUrl } from "../generate.mjs";

/** A link that points to an image by ID if the ID is valid and not the current image
 * @param {string} text
 * @param {number} current 
 * @param {number} target target index
 * @returns {string}
 */
function navLink(text, current, target) {
  if (Number.isInteger(target) && 0 <= target && target != current && target < pics.length) {
    return /*html*/`<div><a class="nav_link" href="${picUrl(target)}">${text}</a></div>`
  } else {
    return /*html*/`<div><a class="nav_link disabled">${text}</a></div>`
  }
}

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
    <div id="nav_stack">
      ${navLink("first", id, 0)}
      ${navLink("prev", id, id - 1)}
      ${navLink("next", id, id + 1)}
      ${navLink("last", id, pics.length - 1)}
    </div>
    <figure id="imageHolder"><img id="slide" src="${pic.source}" alt=""></figure>
    <article>
      <div class="details_title">
        <p>Title: </p><span>${pic.title}</span>
      </div>
      <div class="details">
        <p>Size: </p><span>width: ${pic.size[0]}cm, height: ${pic.size[1]}cm</span>
      </div>
      <div class="details ${"price" in pic ? "" : "missing"}">
        <p>Price: </p><span>${pic.price}</span>
      </div>
      <div class="details ${"about" in pic ? "" : "missing"}">
        <p>About: </p><span>${pic.about}</span>
      </div>
    </article>
  `));
}