import process from "process"
import { publish } from "../src/publish.mjs"

let docs = `
Publish the website to Github Pages. By default, updates are pushed to public.
If this is not desirable, specify a new branch with --target-branch=some-branch
`;

if (process.argv.includes("--help")) console.log(docs);
else {
  const branchArgPrefix = "--target-branch=";
  const branch = process.argv
    .filter(arg => arg.startsWith(branchArgPrefix)) // arguments of the right shape
    .map(arg => arg.slice(branchArgPrefix.length)) // take just the value
    .at(-1) ?? "publish-test"; // take the last or "public" by default

  await publish(branch)
}