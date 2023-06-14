import { getPicID, picBySource } from "../data.mjs";

/** Generate a linked img tag for the given path if an image exists */
export function imgLink(src) {
  const pic = picBySource(src);
  // fall back to plain unlinked img if the picture is not in the database
  if (pic === undefined) return /*html*/`
    <img class="item" src="${src}" alt="">
  `;
  return /*html*/`
    <a href="/works/${getPicID(picBySource(src))}">
      <img class="item" src="${src}" alt="${pic.title}">
    </a>
  `;
}