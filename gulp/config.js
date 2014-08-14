'use strict';

module.exports = {
  paths: {
    app: './app',
    build: {
      src: './app/build/',
      css: './app/build/app.css'
    },
    html: {
      src: './app',
      index: './app/index.html',
      indexTemplate: './app/index.tmpl',
      files: './app/partials/**/*.html'
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
