'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('./config');

gulp.task('minify-js', function () {
    gulp.src(config.paths.js.files)
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.js.dest));
});
