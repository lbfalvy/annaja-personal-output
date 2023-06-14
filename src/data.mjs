/*
This file collects everything purely concerned with data. Anything written here should care more
about the data itself than about the web.
*/

/** Collection of pictures
 * 
 * @type {{
 *  title: string,
 *  source: string,
 *  content: string
 * }[]}
 */
export const pics = [
  {
    title: "Take-off!",
    source: "https://www.fox46.com/wp-content/uploads/sites/109/2018/04/92a7b31a-FD_409A20Space20Shuttle20Anniversary20RECT0_1523400530953.jpg_5314903_ver1.0.jpg?w=1280&h=720&crop=1",
    content: `
lorem ipsum dolor sit amet
    `
  },
]

/** Get the identifier string associated with a picture
 * 
 * This string is URL safe
 * @param {{ title: string }} pic  
 */
export function getPicID(pic) {
  return pic.title
    .toLowerCase() // convert all to lowercase
    .replace(/[^a-z0-9\-]/g, '_'); // any characters other than a-z or 0-9 become _
}