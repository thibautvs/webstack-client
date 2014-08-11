'use strict';

module.exports = {
  paths: {
    bundles: './app/bundles/',
    css: {
      files: './app/css/**/*.scss'
    },
    js: {
      files: './app/js/**/*.js'
    },
    logs: {
      src: 'logs',
      jsHint: 'logs/js-hint.txt'
    },
    tests: {
      unit: {
        config: './test/karma.conf.js',
        filesToWatch: [
          './app/js/**/*.js',
          './test/unit/**/*.js'
        ]
      },
      e2e: {
        config: './test/protractor-conf.js'
      }
    }
  }
};
