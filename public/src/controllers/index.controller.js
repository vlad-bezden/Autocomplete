(function (app) {
	'use strict';

	app.controller('IndexCtrl', indexController);

	function indexController($log, resourceService) {
		var vm = this;

		vm.selectedSecurity;

		vm.findSecurities = function (securityName) {
			$log.debug('searching for "' + securityName + '" security');

			var security = {
				'input': securityName
			};

			return resourceService.query(security).$promise;
		};
	}
} (angular.module('app')));