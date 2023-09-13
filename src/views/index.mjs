import { imgLink } from "../components/imgLink.mjs";
import { htmlTpl } from "../templates/html.mjs";
import { mainTpl } from "../templates/main.mjs";

/** The front page of the website
 * @returns {string}
 */
export function genIndexPage() {
  return htmlTpl(/*html*/`
    <title>ANNAJA-PERSONAL OUTPUT</title>
    <link rel="stylesheet" href="gridstyle.css">
  `, mainTpl(/*html*/`
    <!-- this list should not be autogenerated from the picture list because elements are arranged manually -->
    <div id="myGallery" class="galleryOne galleryTwo galleryThree galleryFour galleryFive">
      ${imgLink("/images/0-labyrinth.jpg")}
      <div class="quotes item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/1-crying_red_hermes.jpg")}
      ${imgLink("/images/2-brown_angel.jpg")}
      <div class="quotes__1 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/3-teardrops.jpg")}
      ${imgLink("/images/4-crying_black_hermes.jpg")}
      <div class="quotes__3 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/5-italy.jpg")}
      ${imgLink("/images/6-orange_angel.jpg")}
      <div class="quotes__2 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/7-confused.jpg")}
      ${imgLink("/images/8-lying_venus.jpg")}
      ${imgLink("/images/9-personal_output.jpg")}
      <div class="quotes__1 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/10-two_women.jpg")}
      <div class="quotes item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/11-shame.jpg")}
      <div class="quotes__1 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/12-perspectives.jpg")}
      ${imgLink("/images/13-creep.jpg")}
      ${imgLink("/images/14-creepy_clown.jpg")}
      <div class="quotes__3 item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/15-big_nose.jpg")}
      ${imgLink("/images/16-disintegrated_time.jpg")}
      ${imgLink("/images/17-andrgyn.jpg")}
      <div class="quotes item"><!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit?</p> --></div>
      ${imgLink("/images/18-metallic_heart.jpg")}
      ${imgLink("/images/19-they_dance.jpg")}
      ${imgLink("/images/20-pillars.jpg")}
    </div>
  `));
}