'use strict';

// Example using the 'expect' assertion style
var expect = chai.expect;

describe('Directives', function () {
  beforeEach(module('myApp.directives'));

  describe('app-version', function () {
    it('should print current version', function () {
      module(function ($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function ($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).to.equal('TEST_VER');
      });
    });
  });
});
