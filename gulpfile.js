'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var utils = require('./gulp/utils');

require('./gulp/build-clean');
require('./gulp/build-sass');
require('./gulp/js-minify');
require('./gulp/js-hint');
require('./gulp/run-unit-tests');
require('./gulp/webserver');
require('./gulp/watch');
require('./gulp/livereload');

gulp.task('build', function (cb) {
  runSequence(
    'build-clean',
    'build-sass',
    //'build-bundle',
    'js-minify',
    ['js-hint', 'run-unit-tests'],
    cb);
});

gulp.task('default', ['build'], function () {
  if (utils.isDevelopment) {
    gulp.start('webserver');
    gulp.start('watch');
  }
});
