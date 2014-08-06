'use strict';

// Example using the 'should' assertion style
var should = chai.should;

describe('Controllers', function () {
  beforeEach(module('myApp.controllers'));

  describe('HomeController', function () {
    it('should be defined', inject(function ($controller) {
      var controller = $controller('HomeController', { $scope: {} });
      controller.should.be.defined;
    }));
  });

  describe('AboutController', function () {
    it('should be defined', inject(function ($controller) {
      var controller = $controller('AboutController', { $scope: {} });
      controller.should.be.defined;
    }));
  });
});
