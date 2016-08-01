angular.module('starter.directives', [])
	.directive('districtsGameOne', function ($window, $timeout, $ionicModal, $location, DistrictsGameOneService) {
		return {
			templateUrl: 'templates/districts-game-one.html',
			restrict: 'E',
			scope: {},
			link: function ($scope) {
				// Form data for the login modal
				$scope.answer = {};
				// Var to render in template [anwsersNUm | num of districts]
				$scope.answersNumLabel = DistrictsGameOneService.getAnswersNum();
				// Create the login modal that we will use later
				$ionicModal.fromTemplateUrl('templates/districts-game-one/modal.html', {
					scope: $scope
				}).then(function (modal) {
					$scope.modal = modal;
				});

				// Triggered in the login modal to close it
				$scope.closeModal = function () {
					$scope.answer = {};
					$scope.modal.hide();
				};

				// Open the login modal
				$scope.openModal = function () {
					$scope.modal.show();
				};

				// Perform the login action when the user submits the login form
				$scope.doAnswer = function () {
					// Check id district code already exist in answers array
					var districtAlreadyExist = DistrictsGameOneService.districtCodeExist($scope.answer.districtCode);
					// Save answer in localStorage
					DistrictsGameOneService.saveAnswer(angular.copy($scope.answer.districtCode), angular.copy($scope.answer.value));
					// Update $scope.answersNumLabel
					if (!districtAlreadyExist) {
						$scope.answersNumLabel = DistrictsGameOneService.getAnswersNum();
					}
					// Simulate a login delay. Remove this and replace with your login
					// code if using a login system
					$timeout(function () {
						$scope.closeModal();
					}, 1000);
				};

				$scope.doFinish = function () {
					//window.plugins.emailComposer.showEmailComposerWithCallback(
					//	function (result) {
					//		console.log("Response -> " + result);
					//	},
					//	"Feedback for your App", // Subject
					//	"", // Body
					//	["jarg1976@gmail.com"], // To
					//	null, // CC
					//	null, // BCC
					//	false, // isHTML
					//	null, // Attachments
					//	null // Attachment Data
					//);
				
					
					var currentGameId = DistrictsGameOneService.finishGame();
					// goto
					$location.path("/app/districts-game-one-finish/" + currentGameId);
				}

				var rsr = DistrictsGameOneService.createSvg(); //Raphael('rsr', '700.00001', '1000');

				var rsrGroups = DistrictsGameOneService.createPaths(rsr, false, DistrictsGameOneService.getGame());

				for (var i = 0, len = rsrGroups.length; i <= len; i++) {

					var el = rsrGroups[i];

					el.mouseover(function () {
						this.toFront();
						this.attr({
							cursor: 'pointer',
							fill: '#990000',
							stroke: '#fff',
							'stroke-width': '2'
						});
						this.animate({
							scale: '1.2'
						}, 200);
					});
					el.mouseout(function () {
						this.animate({
							scale: '1.05'
						}, 200);
						this.attr({
							fill: '#003366'
						});
					});
					el.click(function () {
						this.animate({
							fill: 'green'
						}, 200);

						console.log(this.data().id);
						$scope.answer.districtCode = this.data().id
						$scope.openModal();
						//DistrictsGameOneService.saveAnswer(0, 'Aveiro');
						//DistrictsGameOneService.finishGame();
						//DistrictsGameOneService.saveAnswer(1, 'Porto');
//						$timeout(function () {
//							DistrictsGameOneService.finishGame();
//						}, 1000);
					});

				}
			}
		};
	});