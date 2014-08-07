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
      karmaConfig: './test/karma.conf.js',
      protractorConfig: './test/protractor-conf.js'
    }
  }
};
