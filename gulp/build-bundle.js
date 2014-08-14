'use strict';

var gulp = require('gulp');
var fs = require('fs');
var usemin = require('gulp-usemin');
var byteDiff = require('gulp-bytediff');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-bundle', function () {
  if (utils.isDevelopment) return;

  fs.createReadStream(paths.html.indexTemplate).pipe(
    fs.createWriteStream(paths.html.index));

  return gulp.src(paths.html.index)
    .pipe(usemin({
      css: [
        'concat',
        byteDiff.start(),
        minifyCss(),
        byteDiff.stop()
      ],
      js: [
        'concat',
        ngAnnotate(),
        byteDiff.start(),
        uglify(),
        byteDiff.stop()
        /*rev(),*/
      ]
    }))
    .pipe(gulp.dest(paths.html.src));
});
