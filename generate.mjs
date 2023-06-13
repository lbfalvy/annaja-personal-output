import fs from "fs/promises"

// ======== Config ========

const root = 'docs'

// ======== data and dataviews ========

const pics = [
  {
    title: "Rocket",
    source: "https://www.fox46.com/wp-content/uploads/sites/109/2018/04/92a7b31a-FD_409A20Space20Shuttle20Anniversary20RECT0_1523400530953.jpg_5314903_ver1.0.jpg?w=1280&h=720&crop=1",
    content: `
lorem ipsum dolor sit amet
    `
  }
]

/** Get the path associated with a picture */
function getPicPath(pic) {
  return `/${pic.title.toLowerCase()}`
}

// ======== Init ========

// Clean up after previous build
await fs.rm(`./${root}`, { recursive: true, force: true });
await fs.mkdir(`./${root}`)
// Recreate CNAME
await fs.writeFile(`./${root}/CNAME`, "personaloutput.com")

/** Generate a webpage
 * Populate and write an HTML page skeleton to a file that will be visible under the specified path
 * 
 * Paths are associated with directories and an index.html file is created in them because this way
 * the .html extension can be removed
 */
async function writePage(path, head, body) {
  if (path != "" && path[0] != "/") throw new Error("Page path must start with /")
  // Ensure directory exists
  await fs.mkdir(`${root}${path}`, { recursive: true });
  // Create HTML file
  await fs.writeFile(
    `${root}${path}/index.html`,
    /*html*/`<!DOCTYPE html>
<html>
  <head>
    <meta encoding="utf-8">
    ${head}
  </head>
  <body>${body}</body>
</html>`,
  );
}

// ======== Page generation ========

// generate a page for each picture
for (const pic of pics) {
  await writePage(getPicPath(pic), /*html*/`
    <title>${pic.title}</title>
  `, /*html*/`
    <h1>${pic.title}</h1>
    <img src="${pic.source}">
    <p>${pic.content}</p>
  `);
}

// generate an index page
await writePage("", /*html*/`
  <title>Gallery</title>
`, /*html*/`
  <h1>Gallery</h1>
  <ul>
    ${pics.map(pic => /*html*/`
      <li>
        <a href="${getPicPath(pic)}">${pic.title}</a>
      </li>
    `)}
  </ul>
`);
