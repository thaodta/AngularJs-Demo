var myAppModule = angular.module('myApp', ['ItemsProvider']);


myAppModule.controller('CartController', function ($scope, Items) {

	$scope.bill = {};
	$scope.items = Items.query();

	$scope.calculateCart = function() {
		console.log("ok");
		var total = 0;
		for(var i = 0, len = $scope.items.length; i < len; i ++) {
			total += $scope.items[i].price*$scope.items[i].quantity;
		}
		$scope.bill.totalCart = total;
		$scope.bill.discount = total > 250 ? 10:0;
		$scope.bill.subTotal = total - $scope.bill.discount;
	}

	$scope.$watch('items', $scope.calculateCart, true);


});
