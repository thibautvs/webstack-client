'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var fs = require('fs');
var config = require('./config');

gulp.task('lint', function() {
  fs.unlink(config.paths.logs.lint, function (err) {
    gulp.src(config.paths.js.files)
      .pipe(jshint())
      .pipe(fileReporter);
  });
});

var fileReporter = map(function (file, cb) {
  if (!file.jshint.success) {
    var wstream = fs.createWriteStream(config.paths.logs.lint, { encoding: 'utf8', flags : 'w' });

    wstream.once('open', function (fd) {
      wstream.write(file.path + '\r\n');
      file.jshint.results.forEach(function (msg) {
        if (msg) {
          wstream.write('  - ' + msg.error.reason + ' (line ' + msg.error.line + ')\r\n');
        }
      });
      wstream.write('\r\n');
      wstream.end();
    });
  }
  cb(null, file);
});
