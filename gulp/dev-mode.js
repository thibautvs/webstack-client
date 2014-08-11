'use strict';

var gulp = require('gulp');
var config = require('./config');

gulp.task('dev-mode', function () {
  process.env.production = false;
});
