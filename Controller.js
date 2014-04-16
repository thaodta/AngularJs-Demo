var app = angular.module("TutorialApp", []);

app.controller("MainController", function ($scope) {
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;

	$scope.people = [
		{
			id: 0,
			name: 'Andy',
			music: [
				'Rock',
				'HipHop'
			],
			live: true
		},
		{
			id: 1,
			name: 'Betty',
			music: [
				'Pop',
				'HipHop'
			],
			live: true
		},
		{
			id: 2,
			name: 'Jason',
			music: [
				'Jazz',
				'Pop',
				'Country'
			],
			live: true
		},
		{
			id: 3,
			name: 'Danny',
			music: [
				'Jazz',
				'Contry',
				'Pop'
			],
			live: true
		},
		{
			id: 4,
			name: 'Jeff',
			music: [
				'Hard Rock',
				'Dance',
				'Pop'
			],
			live: true
		},
		{
			id: 5,
			name: 'Josh',
			music: [
				'Rock',
				'Hiphop',
				'Country'
			],
			live: true
		},
		{
			id: 6,
			name: 'Suji',
			music: [
				'K-Pop',
				'Dance',
				'V-Pop'
			],
			live: true
		},
	];

	$scope.newPerson = "";

	$scope.AddNew = function() {
		var name = $scope.newPerson;

		if (name != '' && name != null) {
			$scope.people.push({
				id: $scope.people.length,
				name: name,
				music: [],
				live: true
			});
			$scope.newPerson = "";
		}
	};
});