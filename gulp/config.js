'use strict';

module.exports = {
  paths: {
    app: './app',
    bundles: './app/bundles/',
    html: {
      files: [
        './app/index.html',
        './app/partials/**/*.html'
      ]
    },
    sass: {
      main: './app/sass/app.scss',
      files: './app/sass/**/*.scss',
      sourcemapPath: '../sass'
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
