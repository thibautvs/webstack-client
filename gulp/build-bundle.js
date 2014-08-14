'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var byteDiff = require('gulp-bytediff');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-bundle', function () {
  if (utils.isDevelopment) return;

  return gulp.src(paths.html.indexTemplate)
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
    //.pipe(rename('index.html'))
    .pipe(gulp.dest(paths.html.src));
});
