(function() {
	'use strict';

	var undoSendController = function () {
		this.cancelPeriod = false;

		this.displayCancelPeriod = function() {
			this.cancelPeriod = !this.cancelPeriod;
		};
	};
 
	angular.module('assignment3App')
	  .controller ('undoSendController', undoSendController);	  	
}());