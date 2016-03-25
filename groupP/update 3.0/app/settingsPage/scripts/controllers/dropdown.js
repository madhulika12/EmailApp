(function() {
	'use strict';

	var callServ = function (getData, $scope) {
		var url = '../../data/languages.json';
		getData.fetchData(url)
			.then(function(data){
            		$scope.languages = data.languages;
		});
	};
 
	angular.module('assignment3App')
	  .controller ('callServ', ['getData', '$scope', callServ]);	  	
}());