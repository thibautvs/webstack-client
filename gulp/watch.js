'use strict';

var gulp = require('gulp');
var utils = require('./utils');
var paths = require('./config').paths;

// Watch the files in the paths object, and when there is a change, run the functions in the array
gulp.task('watch', function () {
  gulp.watch(paths.css.files, ['sass-compile'])
    // When there is a change, display what file was changed, showing the path after the 'css' folder
    .on('change', function (evt) {
      console.log('[watcher] File ' + utils.trimCssPath(evt.path) + ' was ' + evt.type + ', compiling...');
    });

  gulp.watch(paths.js.files, ['js-minify'])
    .on('change', function (evt) {
      console.log('[watcher] File ' + utils.trimJsPath(evt.path) + ' was ' + evt.type + ', minifying + bundling...');
    });
});
