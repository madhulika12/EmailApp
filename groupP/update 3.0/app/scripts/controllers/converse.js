(function() {
	'use strict';

	var converseController = function (getData, $scope) {
		var url = '../../data/conversation.json';
		getData.fetchData(url)
			.then(function(data){
            		$scope.conversations = data.conversations;
		});
	};
 
	angular.module('assignment3App')
	  .controller ('converseController', ['getData', '$scope', converseController]);	  	
}());