'use strict';

module.exports = {
  paths: {
    css: {
      files: './app/css/**/*.scss',
      dest: './app/bundles/'
    },
    js: {
      files: './app/js/**/*.js',
      dest: './app/bundles/'
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
