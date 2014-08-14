'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-end', function () {
  if (utils.isDevelopment) return;

  return gulp.src(paths.build.css, {read: false})
    .pipe(rimraf())
});
