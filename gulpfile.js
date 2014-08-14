'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var utils = require('./gulp/utils');

require('./gulp/build-begin');
require('./gulp/build-index');
require('./gulp/build-sass');
require('./gulp/build-bundle');
require('./gulp/build-end');
require('./gulp/js-hint');
require('./gulp/run-unit-tests');
require('./gulp/webserver');
require('./gulp/watch');
require('./gulp/livereload');

gulp.task('build', function (cb) {
  runSequence(
    'build-begin',
    'build-index',
    'build-sass',
    'build-bundle',
    'build-end',
    ['js-hint', 'run-unit-tests'],
    cb);
});

gulp.task('default', ['build'], function () {
  if (utils.isDevelopment) {
    gulp.start('webserver');
    gulp.start('watch');
  }
});
