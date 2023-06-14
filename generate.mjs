import { reset } from "./src/write.mjs"
import { pics } from "./src/data.mjs"
import { genIndexPage } from "./src/views/index.mjs"
import { genPicPage } from "./src/views/pic.mjs"

await reset()
await genIndexPage()
for (const pic of pics) await genPicPage(pic)