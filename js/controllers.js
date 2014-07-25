var productApp = angular.module('ProductApp', []);

productApp.controller('ProductController', function ($scope) {
  $scope.title = 'Product catalog';
  $scope.products = [
    {'name': 'PS4',
     'desc': 'New Sony console.'},
    {'name': 'Air drone',
     'desc': 'A remote-controlled helicopter.'},
    {'name': 'Digital frame',
     'desc': 'Your best memories, slide after slide.'}
  ];
});
