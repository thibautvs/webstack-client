'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var byteDiff = require('gulp-bytediff');
var utils = require('./utils');
var paths = require('./config').paths;
var isProduction = utils.isProduction;

gulp.task('js-minify', function () {
  return gulp.src(paths.js.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(concat('app.js'))
    .pipe(isProduction ? byteDiff.start() : gutil.noop())
    .pipe(isProduction ? uglify() : gutil.noop())
    .pipe(isProduction ? byteDiff.stop() : gutil.noop())
    .pipe(gulp.dest(paths.bundles));
});
