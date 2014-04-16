var myAppModule = angular.module('myApp', []);
var menuItems = ["Homepage", "Category", "Most views", "Recoment"];

myAppModule.controller('MenuController', function ($scope) {

	$scope.menuState = {};
	$scope.menuState.show = false;
	$scope.menuItems = menuItems;
	$scope.selectedIndex = 0;

	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
	};
	$scope.selectItem = function(rowIndex) {
		$scope.selectedIndex = rowIndex;
	};
})

myAppModule.controller('LoginController', function ($scope) {

	$scope.login = function() {
		console.log($scope.menuItems[$scope.selectedIndex]);
	};

	$scope.selectedItem = function() {
		return $scope.menuItems[$scope.selectedIndex];
	}

})