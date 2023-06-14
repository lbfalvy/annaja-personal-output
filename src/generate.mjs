import { reset } from "./write.mjs"
import { pics } from "./data.mjs"
import { genIndexPage } from "./views/index.mjs"
import { genPicPage } from "./views/pic.mjs"

await reset()
await genIndexPage()
for (const pic of pics) await genPicPage(pic)