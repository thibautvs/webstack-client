'use strict';

angular.module('myApp.controllers').
  controller('HomeController', function ($scope) {
    $scope.sayHello = function () {
      return 'Hello from controller';
    };
  });
