angular.module('starter.controllers', [])

	.controller('AppCtrl', function ($scope, $ionicModal, $timeout, _, moment) {

		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		// Form data for the login modal
		$scope.loginData = {};

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function () {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function () {
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function () {
			console.log('Doing login', $scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(function () {
				$scope.closeLogin();
			}, 1000);
		};
	})

	.controller('PlaylistsCtrl', function ($scope, moment) {
		console.log('ttttttttttttt');
		console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // July 18th 2016, 3:35:14 pm);
		
		
	})
	/**
	 * Distrits game-one-intro
	 * @param {type} $scope
	 * @param {type} $stateParams
	 * @returns {undefined}
	 */
	.controller('PlaylistCtrl', function ($scope, $stateParams, $location, DistrictsGameOneService) {
		$scope.player = {}
		
		$scope.doPlay = function () {
			DistrictsGameOneService.startGame($scope.player);
			$location.path("/app/districts-game-one-play");
		}
	})

	.controller('DistritosGameOnePlayCtrl', function ($scope, $ionicModal, $timeout, _, moment) {
	})

	.controller('DistritosGameOneFinishCtrl', function ($scope, $stateParams, $ionicModal, GamesService, DistrictsGameOneService) {
		$scope.gameId = $stateParams.id;
		$scope.game = GamesService.getGame($scope.gameId);
		$scope.stats = DistrictsGameOneService.gameStats($scope.game);
		
		console.log($scope.game);
		console.log($scope.stats);
		return $scope;
	});
