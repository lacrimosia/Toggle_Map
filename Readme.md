# Image Toggle Installation
Fork the repository in Bitbucket. This allows you to get new improvements from upstream and also version control your own app with your data and styling.

## Install dependencies
You will need the npm (node package manager) installed, as well as gulp for running the build scripts.

From the root of the project enter:
```
npm install
```

## gulpfile.js
Modify the gulpfile.js to reflect your project deployment settings.

## layer-data.ts
Contains the data for the different layers, including what text to display and which images to load for each layer.

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
## Deploy to a server
```
gulp package
gulp deploy
```
These commands will create a distributable version in the 'dist' directory, and then create a directory on the server.
### Development
```
departmentCode = "DEMO";
courseName = "DEMO101";
interactiveName = "image-toggle";
server = 'dev.online.unlv.edu';
basePath = "/srv/www/dev.courses.online.unlv.edu/courses";
```
URL for this deployed app will be: https://dev.courses.online.unlv/courses/DEMO/DEMO101/image-toggle/
### Production
```
departmentCode = "DEMO";
courseName = "DEMO101";
interactiveName = "image-toggle";
server = 'web01.online.unlv.edu';
basePath = "/srv/www/courses.online.unlv.edu/courses";
```
URL for this deployed app will be: https://courses.online.unlv/courses/DEMO/DEMO101/image-toggle/
