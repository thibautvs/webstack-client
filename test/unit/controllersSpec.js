'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should ....', inject(function($controller) {
    var controller = $controller('HomeController', { $scope: {} });
    expect(controller).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    var controller = $controller('AboutController', { $scope: {} });
    expect(controller).toBeDefined();
  }));
});
