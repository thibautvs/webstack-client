'use strict';

var gulp = require('gulp');

require('./gulp/sass');
require('./gulp/js');
require('./gulp/watch');

gulp.task('build', [
  'compile-sass',
  'concat-minify-js'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
