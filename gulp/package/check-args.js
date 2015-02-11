'use strict';

var gulp = require('gulp');
var utils = require('../utils');

gulp.task('package-check-args', function () {
  var env = utils.getEnv();
  if (env !== 'test' && env !== 'prod') {
    utils.logError('Missing or wrong parameter (expected --test or --prod)');
    process.exit(1);
  }
  return;
});
