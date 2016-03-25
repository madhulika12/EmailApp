'use strict';

/**
 * @ngdoc function
 * @name assignment3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignment3App
 */
angular.module('assignment3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
