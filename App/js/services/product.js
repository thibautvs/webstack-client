'use strict';

angular.module('myApp.services').
  service('Product', function ($resource, CONFIG) {
    return $resource(CONFIG.API_URL + '/products/:id', {id: '@id'}, {update: {method: 'PUT'}});
  });
