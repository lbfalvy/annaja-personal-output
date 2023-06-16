/*
This file collects everything purely concerned with data. Anything written here should care more
about the data itself than about the web.
*/

/** Collection of pictures
 * 
 * @type {{
 *  title: string,
 *  source: string,
 *  size: [number, number],
 *  about: string
 * }[]}
 */
export const pics = [
  {
    title: "This is the Title",
    source: "/images/15.jpg",
    size: [100, 100],
    about: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reprehenderit.
    `
  },
]

/** Get a picture by its source
 * @param {string} source 
 */
export function picBySource(source) {
  if (typeof source !== "string") throw new Error("type error")
  return pics.find(pic => pic.source == source)
}

/** Get the identifier string associated with a picture
 * 
 * This string is URL safe
 * @param {{ title: string }} pic  
 */
export function getPicID(pic) {
  if (typeof pic.title !== "string") throw new Error("type error")
  return pic.title
    .toLowerCase() // convert all to lowercase
    .replace(/[^a-z0-9\-]/g, '_'); // any characters other than a-z or 0-9 become _
}