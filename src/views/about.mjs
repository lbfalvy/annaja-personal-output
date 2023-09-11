import { htmlTpl } from "../templates/html.mjs";
import { mainTpl } from "../templates/main.mjs";

/** About page
 * @returns {string}
 */
export function genAboutPage() {
  return htmlTpl(/*html*/`
    <title>annaja</title>
    <link rel="stylesheet" href="/about.css">
  `, mainTpl(/*html*/`
    <p>
      I read somewhere that our personality comprises the coping strategies we have learned to
      overcome our fears. I take the human body apart and then put the pieces of the puzzle back
      together. In this way, the individual pieces of one's personality become a whole, which then
      becomes active or passive in everyday situations. From the outside, only the whole is visible,
      but what I want to show is that no one is the same, we all carry within us our wounds,
      our joys, our fears in every situation of life, which determine how we react.
    </p>
    <p>
      I paint in my free time, I am not part of any artist group, and my first gallery exhibition
      in Vienna will be in the CITYgalleryVIENNA in September 2023.
    </p>
  `))
}