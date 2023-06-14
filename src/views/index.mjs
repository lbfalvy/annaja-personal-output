import { writePage } from "../write.mjs";
import { pics, getPicID } from "../data.mjs";

/** The front page of the website */
export async function genIndexPage() {
  await writePage("", /*html*/`
    <title>Gallery</title>
  `, /*html*/`
    <h1>Gallery</h1>
    <ul>
      ${pics.map(pic => /*html*/`
        <li>
          <a href="${getPicID(pic)}">${pic.title}</a>
        </li>
      `)}
    </ul>
  `);
}