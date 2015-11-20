(function () {
	'use strict';

	app.controller('IndexController', indexController);

	function indexController() {
		var vm = this;
		
		vm.message = 'Hello World!';
	}
} ());