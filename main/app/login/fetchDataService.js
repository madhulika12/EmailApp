(function() {
  "use strict";

  var fetchDataService = function($http) {
      this.getCustomers = function() {
        return $http({
            method : 'get',
            url : '../viewersData/userPwdPair.json'
          });
      };
  };
  
  angular.module('assignment1App')
    .service ('fetchDataService', fetchDataService);
}());