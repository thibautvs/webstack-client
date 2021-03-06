'use strict';

var gulp = require('gulp');
var fse = require('fs-extra');
var utils = require('../utils');
var paths = require('../config').paths;

gulp.task('build-end', ['sourcemap-fix'], function () {
  if (utils.isDevelopment()) return;
  fse.removeSync(paths.bundles.css.app);
  fse.removeSync(paths.bundles.css.map);
  return;
});

gulp.task('sourcemap-fix', function () {
  // The sourcemap file produced by sass doesn't contain the correct
  // paths to the original sass files. This function fixes that.
  // More info about issue at https://github.com/sindresorhus/gulp-ruby-sass/issues/49
  if (!utils.isDevelopment()) return;

  var path = utils.normalizePath(__dirname);
  var pathInfo = path.split('/');
  pathInfo.shift();
  pathInfo.pop();
  var pathToRemove = '/' + paths.sass.src + '/' + pathInfo.join('/') + '/' + paths.app.src;

  return fse.readFile(paths.bundles.css.map, 'utf8', function (err, data) {
    if (err) return utils.logError(err);
    var res = data.replace(new RegExp(pathToRemove, 'g'), '');

    fse.writeFile(paths.bundles.css.map, res, 'utf8', function (err) {
      if (err) return utils.logError(err);
    });
  });
});
