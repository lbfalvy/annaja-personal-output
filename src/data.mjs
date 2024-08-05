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
  // Freesh batch
  {
    title: "Minime",
    size: [30, 30],
    source: "/images/21-minime.jpg",
  },
  {
    title: "Gun",
    size: [70, 100],
    source: "/images/22-gun.jpg"
  },
  {
    title: "Still A Clown",
    size: [100, 50],
    source: "/images/23-still_a_clown.jpg"
  },
  {
    title: "The one with scars",
    size: [58, 74],
    source: "/images/24-the_one_with_scars.jpg"
  },
  {
    title: "Androgyn",
    size: [50, 77],
    source: "/images/25-androgyn.jpg"
  },
  {
    title: "The Dance",
    size: [1, 1],
    source: "/images/26-the_dance_2.jpg"
  },
  {
    title: "The Shit on Dancer",
    size: [50, 77],
    source: "/images/27-the_shit_on_dancer.jpg"
  },
  {
    title: "Dancer from the Sahara",
    size: [60, 50],
    source: "/images/28-dancer_from_the_sahara.jpg"
  },
  {
    title: "Dew, Stone, Dance",
    size: [50, 50],
    source: "/images/29-dew__stone__dance.jpg"
  },
  {
    title: "Armour",
    size: [70, 70],
    source: "/images/30-armour.jpg"
  },
  {
    title: "Sahara Dance",
    size: [27, 48],
    source: "/images/31-sahara_dance.jpg"
  },
  {
    title: "Lonely Dance",
    size: [30, 80],
    source: "/images/32-lonely_dance.jpg"
  },
  {
    title: "Woman's Shadow with Snail",
    size: [60, 60],
    source: "/images/33-woman_s_shadow_with_snail.jpg"
  },
  {
    title: "For my Friends",
    size: [50, 50],
    source: "/images/34-for_my_friends.jpg"
  },
  {
    title: "African Mask",
    size: [70, 70],
    source: "/images/35-african_mask_70x70.jpg"
  },
  {
    title: "African Mask",
    size: [40, 80],
    source: "/images/36-african_mask_40x80.jpg"
  },
  {
    title: "Arrows",
    size: [50, 50],
    source: "/images/37-arrows.jpg"
  }
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
