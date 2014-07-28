var productApp = angular.module('ProductsApp.controllers', []);

productApp.controller('ProductController', function ($scope) {
  $scope.title = 'Product catalog';
  $scope.nameFilter = null;
  $scope.products = [
    {'name': 'PS4', 'desc': 'New Sony console.'},
    {'name': 'Air drone', 'desc': 'A remote-controlled helicopter.'},
    {'name': 'Digital frame', 'desc': 'Your best memories, slide after slide.'}
  ];
  $scope.searchFilter = function (product) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(product.name);
  };
});
