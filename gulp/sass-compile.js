'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var byteDiff = require('gulp-bytediff');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('sass-compile', function () {
  return gulp.src(paths.sass.main)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(sass({
      sourcemap: utils.isDevelopment,
      sourcemapPath: paths.sass.sourcemapPath
    }))
    .pipe(utils.ifProduction(byteDiff.start))
    .pipe(utils.ifProduction(minifyCSS))
    .pipe(utils.ifProduction(byteDiff.stop))
    .pipe(gulp.dest(paths.bundles))
    .pipe(utils.ifDevelopment(connect.reload));
});
