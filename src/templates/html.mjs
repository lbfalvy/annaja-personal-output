/** A HTML document
 * @param {string} head Contents of the <head> element
 * @param {string} body Contents of the <body> element
 * @param {Record<string, string>} meta Meta tags
 * @returns {string}
 */
export function htmlTpl(head, body, meta = {}) {
  return /*html*/`<!DOCTYPE html>
  <html>
    <head>
      <meta encoding="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/main.css">
      ${Object.entries(mergeMeta(meta)).map(([name, content]) => /*html*/`
        <meta name="${name}" content="${content}">
      `)}
      ${head}
    </head>
    <body>${body}</body>
  </html>`
}

const defaultMeta = {
  description: "portfolio website of painter AnnaJa",
  keywords: "contemporary art painter painting contemporary-art modern-painting artist contemporary-artist"
}

/** Merge meta-tags with the default
 * @param {Record<string, string>} meta
 * @returns {Record<string, string>}
 */
function mergeMeta(meta) {
  // keywords are added to the list
  const keywords = "keywords" in meta
    ? [ ...defaultMeta.keywords.split(" "), ...meta.keywords.split(" ") ]
    : defaultMeta.keywords;
  // for everything else, explicit overrides default
  return {
    ...defaultMeta,
    ...meta,
    keywords
  }
}