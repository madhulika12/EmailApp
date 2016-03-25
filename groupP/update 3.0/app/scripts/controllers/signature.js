(function() {
	'use strict';

	var signatureController = function () {
		this.typeSignature = true;

		this.disableTextarea = function() {
			if (this.typeSignature === true) {
				this.typeSignature = true;
			} else {
				this.typeSignature = !this.typeSignature;
			}
		};

		this.enableTextarea = function() {
			this.typeSignature = !this.typeSignature;
		};
	};
 
	angular.module('assignment3App')
	  .controller ('signatureController', signatureController);	  	
}());