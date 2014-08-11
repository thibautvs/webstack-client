'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var byteDiff = require('gulp-bytediff');
var utils = require('./utils');
var paths = require('./config').paths;
var isProduction = utils.isProduction;

gulp.task('sass-compile', function () {
  return gulp.src(paths.css.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(sass())
    .pipe(isProduction ? byteDiff.start() : gutil.noop())
    .pipe(isProduction ? minifyCSS() : gutil.noop())
    .pipe(isProduction ? byteDiff.stop() : gutil.noop())
    .pipe(gulp.dest(paths.bundles));
});
