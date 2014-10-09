'use strict';

angular.module('myApp.controllers').
  controller('ProductsController', function ($scope, Product) {
    $scope.products = Product.query();
    $scope.singleProduct = Product.get({id: 2});
  });
