'use strict';

var gulp = require('gulp');
var utils = require('./gulp/utils');

require('./gulp/clean');
require('./gulp/html-minify');
require('./gulp/sass-compile');
require('./gulp/js-minify');
require('./gulp/js-hint');
require('./gulp/run-unit-tests');
require('./gulp/webserver');
require('./gulp/watch');

gulp.task('build', [
  'clean',
  'sass-compile',
  'js-minify',
  'js-hint',
  'run-unit-tests'
]);

gulp.task('default', ['build'], function () {
  if (!utils.isProduction) {
    gulp.start('webserver');
    gulp.start('watch');
  }
});
