'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('html-minify', function () {
  return gulp.src(paths.html.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(utils.ifDevelopment(connect.reload));
    //TODO minify HTML
});
