(function() {
	'use strict';

	var contactController = function (getData, $scope) {
		var url = '../../data/contacts.json';
		getData.fetchData(url)
			.then(function(data){
            		$scope.contacts = data.contacts;
		});
	};
 
	angular.module('assignment3App')
	  .controller ('contactController', ['getData', '$scope', contactController]);	  	
}());