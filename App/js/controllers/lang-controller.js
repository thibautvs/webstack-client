'use strict';

angular.module('myApp.controllers').
  controller('LangController', function ($scope, $translate) {
    $scope.lang = $translate.proposedLanguage();
    $scope.changeLang = function () {
      $translate.use($scope.lang);
    };
  });
