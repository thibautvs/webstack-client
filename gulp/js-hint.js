'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var fs = require('fs');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('js-hint', function () {
  fs.mkdir(paths.logs.src, function (err) {
    fs.unlink(paths.logs.jsHint, function (err) {
      gulp.src(paths.js.files)
        .pipe(jshint())
        .pipe(fileReporter);
    });
  });
});

var fileReporter = map(function (file, cb) {
  if (!file.jshint.success) {
    var wstream = fs.createWriteStream(paths.logs.jsHint, {encoding: 'utf8', flags: 'a'});

    wstream.once('open', function (fd) {
      wstream.write(utils.trimJsPath(file.path) + utils.endOfLine);
      file.jshint.results.forEach(function (msg) {
        if (msg) {
          wstream.write('  - ' + msg.error.reason + ' (line ' + msg.error.line + ')' + utils.endOfLine);
        }
      });
      wstream.write(utils.endOfLine);
      wstream.end();
    });
  }
  cb(null, file);
});
