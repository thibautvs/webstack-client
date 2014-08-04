'use strict';

var gulp = require('gulp');

require('./gulp/sass-compile');
require('./gulp/js-minify');
require('./gulp/js-lint');
require('./gulp/watch');

gulp.task('build', [
  'sass-compile',
  'js-minify',
  'js-lint'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
