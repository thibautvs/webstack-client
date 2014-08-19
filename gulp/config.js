'use strict';

module.exports = {
  paths: {
    app: {
      src: 'app',
      relative: './app'
    },
    build: {
      src: './app/build/',
      css: './app/build/app.css',
      cssMap: './app/build/app.css.map'
    },
    html: {
      src: './app',
      index: './app/index.html',
      indexTemplate: './app/index.tmpl',
      files: './app/views/**/*.html'
    },
    sass: {
      src: 'sass',
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
