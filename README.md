# Structure

- `/static` gets copied over to the output directory, client-side data such as HTML, CSS and browser JS should be written here.
- `/src` contains all generator code
- `/src/views` contains functions that build pages
- `/src/templates` contains functions that build layouts to be filled by their arguments which are also HTML
- `/src/components` contains reusable fragments of HTML to be shared between pages

# Build

Build the website by running
```sh
npm install
npm run build
```

# Develop

Start a webserver and a file watcher to automatically regenerate the output directory on file save
with the following command

```sh
npm run dev
```