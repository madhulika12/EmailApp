(function() {
	'use strict';

	var undoSendGetJson = function (getData, $scope) {
		var url = '../../data/undoSend.json';
		getData.fetchData(url)
			.then(function(data){
            		$scope.seconds = data.undoSend;
		});
	};
 
	angular.module('assignment3App')
	  .controller ('undoSendGetJson', ['getData', '$scope', undoSendGetJson]);	  	
}());