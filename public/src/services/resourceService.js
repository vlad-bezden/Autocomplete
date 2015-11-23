(function (app) {
	'use strict';

	app.factory('resourceService', resourceService);

	function resourceService($resource) {
		return $resource('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json',
			{ 'input': 'MS' },
			{ query: { method: 'get', isArray: true } });
	}

} (angular.module('app')));