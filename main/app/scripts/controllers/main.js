'use strict';

/**
 * @ngdoc function
 * @name assignment1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignment1App
 */
angular.module('assignment1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
