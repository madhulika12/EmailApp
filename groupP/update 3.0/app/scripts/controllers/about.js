'use strict';

/**
 * @ngdoc function
 * @name assignment3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the assignment3App
 */
angular.module('assignment3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
