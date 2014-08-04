'use strict';

var gulp = require('gulp');

require('./gulp/sass');
require('./gulp/js');
require('./gulp/lint');
require('./gulp/watch');

gulp.task('build', [
  'compile-sass',
  'minify-js',
  'lint'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
