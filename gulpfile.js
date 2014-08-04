'use strict';

var gulp = require('gulp');

require('./gulp/sass-compile');
require('./gulp/js-minify');
require('./gulp/js-hint');
require('./gulp/watch');

gulp.task('build', [
  'sass-compile',
  'js-minify',
  'js-hint'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
