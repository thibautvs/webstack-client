'use strict';

var gulp = require('gulp');
var fsSync = require('fs-sync');
var usemin = require('gulp-usemin');
var byteDiff = require('gulp-bytediff');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-bundle', function () {
  fsSync.copy(paths.html.indexTemplate, paths.html.index, {force: true});

  if (utils.isDevelopment) {
    var warningMsg =
      '<!-- !!! WARNING !!! -->'
      + utils.endOfLine
      + '<!-- AUTO GENERATED FILE. DO NOT EDIT, CHANGES WILL BE LOST ! -->'
      + utils.endOfLine
      + utils.endOfLine;

    fsSync.write(
      paths.html.index,
      warningMsg + fsSync.read(paths.html.index) + warningMsg,
      {encoding: 'utf8'});
    return;
  }

  return gulp.src(paths.html.index)
    .pipe(usemin({
      css: [
        'concat',
        byteDiff.start(),
        minifyCss(),
        byteDiff.stop(),
        rev()
      ],
      js: [
        'concat',
        ngAnnotate(),
        byteDiff.start(),
        uglify(),
        byteDiff.stop(),
        rev()
      ]
    }))
    .pipe(gulp.dest(paths.html.src));
});
