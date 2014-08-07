'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var paths = require('./config').paths;

gulp.task('js-minify', function () {
  return gulp.src(paths.js.files)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
});
