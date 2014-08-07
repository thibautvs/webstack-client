'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('./config').paths;

gulp.task('sass-compile', function () {
  return gulp.src(paths.css.files)
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths : [paths.css.src]
    }))
    .pipe(gulp.dest(paths.css.dest));
});
