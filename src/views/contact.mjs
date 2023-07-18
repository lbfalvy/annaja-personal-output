import { mainTpl } from "../templates/main.mjs";
import { htmlTpl } from "../templates/html.mjs";

/** Page for a given picture
 * @returns {string}
 */
export function genContactPage() {
  return htmlTpl(/*html*/`
    <title>annaja - contact</title>
    <link rel="stylesheet" href="/contact.css">
  `, mainTpl(/*html*/`
    <p>
      E-mail: <a href="">ajavor75@gmail.com</a>
    </p>
  `));
}