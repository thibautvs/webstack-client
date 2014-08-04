'use strict';

module.exports = {
  paths: {
    css: {
      src: './app/css',
      files: './app/css/**/*.scss',
      dest: './app/bundles/'
    },
    js: {
      files: './app/js/**/*.js',
      dest: './app/bundles/'
    }
  }
};
