(function() {
  'use strict';

  var fetchDataService = function($http) {
      this.getContent = function(path) {
        return $http({
            method : 'get',
            url : path
          });
      };
  };
  
  angular.module('assignment3App')
    .service ('fetchDataService', fetchDataService);
}());