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
 *  about?: string
 *  price?: string
 * }[]}
 */
export const pics = [
  {
    title: "Labyrinth",
    size: [100, 80],
    source: "/images/0-labyrinth.jpg",
  },
  {
    title: "Crying Red Hermes",
    size: [100, 50],
    source: "/images/1-crying_red_hermes.jpg",
  },
  {
    title: "Brown Angel",
    size: [100, 80],
    source: "/images/2-brown_angel.jpg",
  },
  {
    title: "Teardrops",
    size: [110, 110],
    source: "/images/3-teardrops.jpg",
  },
  {
    title: "Crying Black Hermes",
    size: [100, 100],
    source: "/images/4-crying_black_hermes.jpg",
  },
  {
    title: "Italy",
    size: [60, 60],
    source: "/images/5-italy.jpg",
  },
  {
    title: "Orange Angel",
    size: [100, 80],
    source: "/images/6-orange_angel.jpg",
  },
  {
    title: "Confused",
    size: [70, 100],
    source: "/images/7-confused.jpg",
  },
  {
    title: "Lying Venus",
    size: [100, 80],
    source: "/images/8-lying_venus.jpg",
  },
  {
    title: "Personal Output",
    size: [30, 30],
    source: "/images/9-personal_output.jpg",
  },
  {
    title: "TWo Women",
    size: [60, 80],
    source: "/images/10-two_women.jpg",
  },
  {
    title: "Shame",
    size: [60, 80],
    source: "/images/11-shame.jpg",
  },
  {
    title: "Perspectives",
    size: [80, 60],
    source: "/images/12-perspectives.jpg",
  },
  {
    title: "Creep",
    size: [100, 50],
    source: "/images/13-creep.jpg",
  },
  {
    title: "Creepy Clown",
    size: [100, 50],
    source: "/images/14-creepy_clown.jpg",
  },
  {
    title: "Big Nose",
    size: [100, 50],
    source: "/images/15-big_nose.jpg",
  },
  {
    title: "Disintegrated Time",
    size: [100, 80],
    source: "/images/16-disintegrated_time.jpg",
  },
  {
    title: "Andrgyn",
    size: [70, 100],
    source: "/images/17-andrgyn.jpg",
  },
  {
    title: "Metallic Heart",
    size: [80, 100],
    source: "/images/18-metallic_heart.jpg",
  },
  {
    title: "They Dance",
    size: [70, 100],
    source: "/images/19-they_dance.jpg",
    price: "700&euro;",
  },
  {
    title: "Pillars",
    size: [100, 80],
    source: "/images/20-pillars.jpg",
    price: "800&euro;",
  },
]

/**
 * Find the index of a given picture based on an image file
 * @param {string} src path to the file
 * @returns {number} index of the given picture if it exists or -1 otherwise
 */
export function picIdBySource(src) {
  if (typeof src !== "string") throw new Error("type error")
  return pics.findIndex(pic => pic.source == src)
}
