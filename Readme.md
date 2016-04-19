# Image Toggle Installation
Fork the repository in Bitbucket. This allows you to get new improvements from upstream and also version control your own app with your data and styling.

## Install dependencies
You will need the npm (node package manager) installed, as well as gulp for running the build scripts.

From the root of the project enter:
```
npm install
```

## gulpfile.js
An example gulpfile.js included in the project. Copy this file to gulpfile.js
```
cp gulpfile.example.js gulpfile.js
```
Make changes to the gulpfile.js rather than the example.gulpfile.js

## layer-data.ts
Copy the example hotspot data file to the standard location for hotspot-data
```
cp src/ts/layer-data.example.ts src/ts/hotspot-data.ts
```
## Build the project
To view the interactive you will have to build it. This compiles SASS and TS in to CSS and JS.
```
gulp build
```
## Viewing the project
I recommend using the SimpleHTTPServer for local development. Run the following command from the root directory of the project:
```
python -m SimpleHTTPServer 3000
```
*Note the 3000 is the port number.*
Navigate your browser to http://localhost:3000 and the image toggle interactive should run with the example data files.

## Watching
The watch task in the example gulpfile will watch for changes to any of the source files and recompile them as necessary. It will not reload the browser window for you however. Use 'watch' to do live development on the project.
```
gulp watch
```
