'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var byteDiff = require('gulp-bytediff');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('sass-compile', function () {
  return gulp.src(paths.css.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(sass())
    .pipe(byteDiff.start())
    .pipe(minifyCSS())
    .pipe(byteDiff.stop())
    .pipe(gulp.dest(paths.bundles));
});
