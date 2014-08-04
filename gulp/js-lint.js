'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var fs = require('fs');
var config = require('./config');
var utils = require('./utils');

gulp.task('js-lint', function() {
  fs.mkdir(config.paths.logs.src, function (err) {
    fs.unlink(config.paths.logs.lint, function (err) {
      gulp.src(config.paths.js.files)
        .pipe(jshint())
        .pipe(fileReporter);
    });
  });
});

var fileReporter = map(function (file, cb) {
  if (!file.jshint.success) {
    var wstream = fs.createWriteStream(config.paths.logs.lint, { encoding: 'utf8', flags : 'a' });

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
