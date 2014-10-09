'use strict';

angular.module('myApp.services').
  service('Product', function ($resource) {
    return $resource('http://localhost:3000/products/:id');
  });
