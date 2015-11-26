(function (app) {
	'use strict';

	app.controller('IndexCtrl', indexController);

	function indexController($log, resourceService) {
		var vm = this;

		vm.selectedSecurities = [];

		vm.findSecurities = function (securityName) {
			$log.debug('searching for "' + securityName + '" security');

			var security = {
				'input': securityName
			};

			return resourceService.query(security).$promise;
		};
		
		vm.securitySelected = function (item, model, label) {
			$log.debug(item);
			vm.selectedSecurities.push(item);
		};
	}
} (angular.module('app')));