'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./config');

gulp.task('sass', function () {
  gulp.src(config.paths.css.files)
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths : [config.paths.css.src]
    }))
    .pipe(gulp.dest(config.paths.css.dest));
});
