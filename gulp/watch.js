'use strict';

var gulp = require('gulp');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('watch', function () {
  gulp.watch(paths.css.files, ['sass-compile'])
    .on('change', function (evt) {
      console.log('[watcher] File ' + utils.trimCssPath(evt.path) + ' was ' + evt.type + ', compiling...');
    });

  gulp.watch(paths.js.files, ['js-minify'])
    .on('change', function (evt) {
      console.log('[watcher] File ' + utils.trimJsPath(evt.path) + ' was ' + evt.type + ', minifying + bundling...');
    });
});
