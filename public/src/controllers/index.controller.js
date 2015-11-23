(function (app) {
	'use strict';

	// testing git
	app.controller('IndexCtrl', indexController);

	function indexController() {
		var vm = this;

		vm.message = 'Hello World!!!';
	}
} (angular.module('app')));