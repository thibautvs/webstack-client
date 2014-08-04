'use strict';

var gulp = require('gulp');
var config = require('./config');

// Watch the files in the paths object, and when there is a change, run the functions in the array
gulp.task('watch', function () {
  gulp.watch(config.paths.css.files, ['compile-sass'])
    // When there is a change, display what file was changed, showing the path after the 'css' folder
    .on('change', function (evt) {
      console.log(
        '[watcher] File ' + evt.path.replace(/^.*[\/\\]/, '') + ' was ' + evt.type + ', compiling...'
        );
      });

  gulp.watch(config.paths.js.files, ['minify-js'])
    .on('change', function (evt) {
      console.log(
        '[watcher] File ' + evt.path.replace(/^.*[\/\\]/, '') + ' was ' + evt.type + ', compiling...'
        );
      });
});
