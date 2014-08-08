'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var paths = require('./config').paths;

gulp.task('run-unit-tests', function () {
  // Pass a fake path to src(), otherwise gulp-karma ignores
  // the files array defined in the karma config file.
  return gulp.src('fakePath')
    .pipe(karma({
      configFile: paths.tests.unit.config,
      action: 'run'
    }))
    .on('error', function (err) {
      // End the stream instead of putting it in error otherwise gulp process
      // will exit, preventing it to watch for further file changes.
      this.emit('end');
    });
});
