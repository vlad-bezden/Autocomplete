(function (app) {
	'use strict';

	app.controller('IndexCtrl', indexController);

	function indexController($log, resourceService) {
		var vm = this;

		vm.message = 'Hello World!!!';
		
		var securities = resourceService.query();
		
		$log.debug(securities);
	}
} (angular.module('app')));