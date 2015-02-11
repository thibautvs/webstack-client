'use strict';

var gulp = require('gulp');
var fse = require('fs-extra');
var paths = require('../config').paths;

gulp.task('build-begin', function () {
  return fse.removeSync(paths.bundles.src);
});
