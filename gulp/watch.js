'use strict';

var gulp = require('gulp');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('watch', function () {
  gulp.watch(paths.html.files, ['livereload'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimHtmlPath(file.path), file.type, 'minifying');
    });

  gulp.watch(paths.sass.files, ['build-sass'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimCssPath(file.path), file.type, 'compiling');
    });

  gulp.watch(paths.js.files, ['js-minify'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimJsPath(file.path), file.type, 'minifying + bundling');
    });

  gulp.watch(paths.tests.unit.filesToWatch, ['js-minify', 'run-unit-tests'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimTestPath(file.path), file.type, 'running tests')
    });
});
