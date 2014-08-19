'use strict';

// Declare individual modules
angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);
angular.module('myApp.services', []);

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(function ($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'HomeController'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'AboutController'});
  $routeProvider.otherwise({redirectTo: '/home'});
});
