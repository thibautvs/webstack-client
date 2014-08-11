'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var paths = require('./config').paths;

gulp.task('clean', function () {
  return gulp.src(paths.bundles, {read: false})
    .pipe(rimraf())
});
