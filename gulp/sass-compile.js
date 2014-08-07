'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('sass-compile', function () {
  return gulp.src(paths.css.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(gulp.dest(paths.css.dest));
});
