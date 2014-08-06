'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var paths = require('./config').paths;

gulp.task('run-unit-tests', function () {
  // Pass a fake path to src(), otherwise gulp-karma ignores
  // the files array defined in the karma config file.
  return gulp.src('fakePath')
    .pipe(karma({
      configFile: paths.tests.karmaConfig,
      action: 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});