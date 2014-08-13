'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var byteDiff = require('gulp-bytediff');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('js-minify', function () {
  return gulp.src(paths.js.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(concat('app.js'))
    .pipe(utils.ifProduction(ngAnnotate))
    .pipe(utils.ifProduction(byteDiff.start))
    .pipe(utils.ifProduction(uglify))
    .pipe(utils.ifProduction(byteDiff.stop))
    .pipe(gulp.dest(paths.build))
    .pipe(utils.ifDevelopment(connect.reload));
});
