/** A HTML document
 * 
 * @param {string} head Contents of the <head> element
 * @param {string} body Contents of the <body> element
 * @param {Record<string, string>} meta Meta tags
 * @returns {string}
 */
export function htmlTpl(head, body, meta) {
  return /*html*/`<!DOCTYPE html>
  <html>
    <head>
      <meta encoding="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${Object.entries(meta).map(([name, content]) => /*html*/`
        <meta name="${name}" content="${content}">
      `)}
      ${head}
    </head>
    <body>${body}</body>
  </html>`
}