import { pics } from "../data.mjs";
import { picUrl } from "../generate.mjs";

/** A page of the website
 * @param {string} content
 * @returns {string}
 */
export function mainTpl(content) {
  return /*html*/`
    <script src="https://kit.fontawesome.com/383945ce77.js" crossorigin="anonymous"></script>
    <nav>
      <div class="nav">
        <h1 class="title"><a href="/">annaja</a></h1>
        <div id="dropdown" class="dropdown-content">
          <a id="menu-about" href="/about">about</a>
          <a id="menu-works" href="${picUrl(pics.length - 1)}">works</a>
          <a id="menu-contact" href="/contact">contact</a>
        </div>
      </div>
      <div class="menuToggle" onclick="toggleMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </nav>
    <main>${content}</main>
    <footer>
      <section class="sociallinks">
        <a href="https://www.instagram.com/annaja_personal_output/" target="_blank" title="AnnaJa on Instagram"><i class="fa-brands fa-square-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100070068163815" target="_blank" title="AnnaJa on Facebook"><i class="fa-brands fa-square-facebook"></i></a>
      </section>
    </footer>
    <!--  mobile menu toggle: -->
    <script>
      function toggleMenu(x) {
        x.classList.toggle("change");

        let dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("show");
      } 
    </script>
  `;
}