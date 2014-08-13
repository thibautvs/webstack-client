'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('livereload', function () {
  return gulp.src('')
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(utils.ifDevelopment(connect.reload));
});
