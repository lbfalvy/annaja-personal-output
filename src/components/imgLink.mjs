import { picIdBySource, pics } from "../data.mjs";
import { picUrl } from "../generate.mjs";

/** Generate a linked img tag for the given path if an image exists
 * @param {string} src 
 * @returns {string}
 */
export function imgLink(src) {
  const picId = picIdBySource(src);
  // fall back to plain unlinked img if the picture is not in the database
  if (picId === -1) return /*html*/`
    <img class="item" src="${src}" alt="">
  `;
  return /*html*/`
    <a href="${picUrl(picId)}">
      <img class="item" src="${src}" alt="${pics[picId].title}">
    </a>
  `;
}