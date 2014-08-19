'use strict';

angular.module('myApp.factories').
  factory('HttpResponseInterceptor', function ($q, $location) {
    return function (promise) {
      return promise.then(function success(response) {
        return response;
      },
      function error(response) {
        if (response.status === 404) {
          $location.path('/404');
        }
        else if (response.status === 500) {
          $location.path('/500');
        }
        return $q.reject(response);
      });
    };
  });
