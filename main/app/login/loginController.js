(function() {
	"use strict";

	var loginCtrl = function (validate) {
	  	this.collect = function(username, password) {

	  		var userDetails = {
	  			username : username,
	  			password : password
	  		};

	  		validate.verify(userDetails.username, userDetails.password);
		};
	};
 
	angular.module('assignment1App')
	  .controller ('loginCtrl', ['validate', loginCtrl]);	  	
}());
