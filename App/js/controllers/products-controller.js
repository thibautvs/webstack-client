'use strict';

angular.module('myApp.controllers').
  controller('ProductsController', function ($scope, Product) {
    $scope.products = Product.query();
    $scope.singleProduct = Product.get({id: 2});

    $scope.addProduct = function () {
      $scope.productName = '';
      $scope.productPrice = '';
      $scope.showAddPane = true;
      $scope.showEditPane = false;
    };

    $scope.editProduct = function (product) {
      $scope.productName = product.name;
      $scope.productPrice = product.price;
      $scope.updatedProduct = product;
      $scope.showEditPane = true;
      $scope.showAddPane = false;
    };

    $scope.saveNewProduct = function () {
      var product = new Product();
      product.name = $scope.productName;
      product.price = $scope.productPrice;
      product.$save(function () {
        $scope.products = Product.query();
        $scope.showAddPane = false;
      });
    };

    $scope.saveUpdatedProduct = function () {
      $scope.updatedProduct.name = $scope.productName;
      $scope.updatedProduct.price = $scope.productPrice;
      $scope.updatedProduct.$update(function () {
        $scope.products = Product.query();
        $scope.showEditPane = false;
      });
    };

    $scope.deleteProduct = function (product) {
      product.$delete(function () {
        $scope.products = Product.query();
      });
    };
  });
