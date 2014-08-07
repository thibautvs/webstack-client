'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('js-minify', function () {
  return gulp.src(paths.js.files)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
});
