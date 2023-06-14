# Structure

- `/static` gets copied over to the output directory, client-side data such as HTML, CSS and browser JS should be written here.
- `/src` contains all generator code
- `/src/views` contains functions that build HTML. These should only be concerned with bridging between data and presentation

# Build

Build the website by running
```sh
node ./generate.mjs
```