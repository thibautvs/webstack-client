'use strict';

// Example using the 'should' assertion style
var should = chai.should;

describe('Controllers', function () {
  beforeEach(module('myApp.controllers'));

  describe('HomeController', function () {
    it('should be defined', inject(function ($rootScope, $controller) {
      var scope = $rootScope.$new();
      var controller = $controller('HomeController', { $scope: scope });

      // Sinon stub example
      var sandbox = sinon.sandbox.create();
      sandbox.stub(scope, 'sayHello', function () { return 'Hello from sinon stub'; });
      scope.sayHello().should.equal('Hello from sinon stub');

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
