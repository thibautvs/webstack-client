'use strict';

var gulp = require('gulp');

require('./gulp/sass');
require('./gulp/watch');

gulp.task('build', [
  'sass'
]);

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
