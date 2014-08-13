'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var paths = require('./config').paths;

gulp.task('build-clean', function () {
  return gulp.src(paths.build, {read: false})
    .pipe(rimraf())
});
