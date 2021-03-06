var gulp = require('gulp');
var gutil = require('gulp-util');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var del = require('del');
var child_process = require('child_process');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var runSequence = require('run-sequence');
var prompt = require('gulp-prompt');

var paths = {
  "source":{
    "ts" : "src/ts/*",
    "scss": "src/styles/*.scss",
    "css": "src/styles/*.css",
    "html": "*.html"

  },
  "compiled": {
      "js": "app/*",
      "styles": "styles/*"
  },
"images": "images/*"
}

gulp.task('build', function () {
runSequence('clean', ['npm-tsc', 'sass']);
});

gulp.task('clean', function() {
   del.sync(['./styles','./app']);
});

gulp.task('npm-tsc', function() {
 child_process.execSync("npm run tsc", function(err,stdout, stderr) {
  if (err) {
    console.log("child processes failed with error code: " +
      err.code);
    }
    console.log(stdout);
  });
});

// gulp ts task is broken

// gulp.task('gulp-ts', function() {
//   return gulp.src(paths.ts)
//   .pipe(ts());
// });

gulp.task('sass', function() {
     return gulp.src([
       'node_modules/bootstrap-sass/assets/stylesheets/*.scss',
       'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/*.scss',
       paths.source.scss,
      paths.source.css
      ])
    .pipe(sass().on('error', function(err){console.log(err.stack)}))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.source.ts, ['npm-tsc']);
  gulp.watch([paths.source.scss, paths.source.css], ['sass']);
});


gulp.task('package', function () {
    runSequence(['clean', 'clean:dist'], ['npm-tsc', 'sass'], ['copy-node-modules','copy-compiled-source-and-assets']);
})

gulp.task('clean:dist', function() {
  return del.sync(['./dist']);
});

gulp.task('copy-node-modules', function() {
  gulp.src(
      [
        'node_modules/es6-shim/*',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/*',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/normalize.css/normalize.css'
      ], {
        base: '.'
      })
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-compiled-source-and-assets', function() {
  gulp.src(paths.compiled.js)
    .pipe(gulp.dest('./dist/app'));
  gulp.src(paths.compiled.styles)
    .pipe(gulp.dest('./dist/styles/'));
  gulp.src(paths.source.html)
      .pipe(gulp.dest('./dist/'));
  gulp.src(paths.images)
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('deploy', function() {

departmentCode = "ANTH";
courseName = "ANTH400C";
interactiveName = "river-yuman-map";
server = 'web01.online.unlv.edu';
basePath = "/srv/www/courses.online.unlv.edu/courses";
fullPath = basePath + '/' + departmentCode + '/' + courseName +'/'+ interactiveName;
process.stdout.write('Deploying to ' + server + ':' + fullPath + '\n');
gulp.src('.').pipe(prompt.prompt({
  type: 'input',
  name: 'username',
  message: 'Which user to deploy with?'
}, function(result) {
connectionString = result.username + '@' + server;

process.stdout.write('Creating directory if necessary...\n');
child_process.execSync('ssh ' + connectionString + ' mkdir -p ' + fullPath, function(err,stdout, stderr) {
 if (err) {
   console.log("create directory failed with error code: " +
     err.code);
   }
   console.log(stdout);
 });


process.stdout.write('Rsyncing to server...\n');
child_process.execSync('rsync -aP --delete dist/ ' + connectionString + ':' + fullPath, function(err,stdout, stderr) {
 if (err) {
   console.log("rsync failed with error code: " +
     err.code);
   }
   console.log(stdout);
 });

}));

});
