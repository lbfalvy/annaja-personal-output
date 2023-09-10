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
  { title: "lorem", source: "/images/1.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/2.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/3.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/4.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/5.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/6.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/7.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/8.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/9.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/10.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/11.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/12.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/13.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/14.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/15.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/16.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/17.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/18.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "lorem", source: "/images/19.jpg", size: [100, 100], about: "Lorum ipse" },
  { title: "Dancer", source: "/images/Dancer70x100.jpg", size: [70, 100], about: "Lorum ipse" },
  { title: "Pillars", source: "/images/Pillars80x100.jpg", size: [80, 100], about: "Lorum ipse" },
]

/**
 * Find the index of a given picture based on an image file
 * @param {string} src path to the file
 */
export function picIdBySource(src) {
  if (typeof src !== "string") throw new Error("type error")
  return pics.findIndex(pic => pic.source == src)
}
