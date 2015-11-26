(function (app) {
	'use strict';

	app.controller('IndexCtrl', indexController);

	function indexController($log, resourceService) {
		var vm = this;

		vm.selectedSecurities = [];
		vm.selectedSecurity;

		vm.findSecurities = function (securityName) {
			$log.debug('searching for "' + securityName + '" security');

			var security = {
				'input': securityName
			};

			return resourceService.query(security).$promise;
		};
		
		vm.securitySelected = function (item, model, label) {
			$log.debug(item);
			// check if that security is already in the list
			if (!vm.selectedSecurities.some(checkBySymbol, item)) {
				$log.debug('"' + item.Symbol + '" does not exist in the selected list and will be added to the list');
				vm.selectedSecurities.push(item);	
			}
			
			vm.selectedSecurity = undefined;
		};		
		
		vm.deleteSecurity = function (index) {
			vm.selectedSecurities.splice(index, 1);
		};
		
		function checkBySymbol(security) {
			return this.Symbol === security.Symbol;
		}
	}
} (angular.module('app')));