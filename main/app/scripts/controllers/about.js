'use strict';

/**
 * @ngdoc function
 * @name assignment1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the assignment1App
 */
angular.module('assignment1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
