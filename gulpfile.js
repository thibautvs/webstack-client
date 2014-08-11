'use strict';

var gulp = require('gulp');

require('./gulp/dev-mode');
require('./gulp/clean');
require('./gulp/sass-compile');
require('./gulp/js-minify');
require('./gulp/js-hint');
require('./gulp/run-unit-tests');
require('./gulp/watch');

process.env.production = true;

gulp.task('build', [
  'clean',
  'sass-compile',
  'js-minify',
  'js-hint',
  'run-unit-tests'
]);

gulp.task('dev', ['dev-mode', 'default']);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
