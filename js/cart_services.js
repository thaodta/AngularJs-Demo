var myAppModule = angular.module('ItemsProvider', []);

myAppModule.factory('Items', function() {

	var items = {};
	items.query = function() {
		return [
			{title: 'Mac Book Air 2015', quantity: 20, price: 3.54},
			{title: 'Optic Mouse (Black)', quantity: 18, price: 3.0},
			{title: 'Samsung S3', quantity: 1, price: 100.2},
			{title: 'Samsung S3', quantity: 1, price: 100.2}
		];
	};
	return items;
});
