'use strict';

var gulp = require('gulp');

require('./gulp/sass-compile');
require('./gulp/js-minify');
require('./gulp/js-hint');
require('./gulp/run-tests');
require('./gulp/watch');

gulp.task('build', [
  'sass-compile',
  'js-minify',
  'js-hint',
  'run-tests'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
