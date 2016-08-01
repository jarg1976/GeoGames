'use strict';
angular.module('starter')
	.factory('DistrictsGameOneService', function (moment, _, localStorageGames, GamesService) {
		var localStorageName = 'districtGameOne';
		var pointsValue = 1.111111111111111;
		var districts = [
			{
				'id': '0',
				'name': 'aveiro',
				'path': 'M29.372,112.632c0.448-2.074-0.185-3.696,0.417-5.552c0.523-1.614,9.007,1.63,10.56,2.049 c7.394,1.992,14.819,3.833,22.253,5.675c0.358,0.089-4.784,20.848-5.296,23.008c-0.658,2.777-1.348,5.545-2.026,8.316     c-0.288,1.178,2.975,4.554,3.622,5.471c7.907,11.218,17.359,24.53,28.387,40.352c2.367,3.395,4.734,6.791,7.101,10.188     c0.693,0.994-0.102,2.939,0.452,4.352c0.903,2.304,6.204,5.454,3.245,6.901c-2.521,1.234-2.582,2.198-3.254,4.711     c-0.712,2.656-4.289,3.06-3.475,6.303c0.277,1.104,1.471,0.553,0.685,2.783c-0.492,1.396-1.518,0.685-2.401,0.804     c-4.382,0.594-10.366-1.552-14.701-2.247c-2.591-0.415-9.717,0.07-9.884-3.427c0.124,0.27,0.247,0.539,0.37,0.809     c-0.136-0.172-0.107-0.751-0.52-1.246c-0.069,0.187-0.138,0.373-0.206,0.56c0.7-6.632-2.082-8.465-5.18-13.755     c-1.033-1.764-2.033-0.709-3.063-1.952c-0.276-0.333,0.099-2.205-0.459-2.907c-0.613-0.771-2.818-0.635-3.774-1.269     c-2.306-1.525-2.4-3.582-4.458-5.239c-1.363-1.097-3.95-1.646-5.613-2.509c-6.033-3.126-1.324-2.901-2.265-8.183     c-0.142-0.793-1.173-0.901-1.592-1.438c-0.732-0.938,0.481-1.145,0.332-1.945c-0.337-1.812-2.825-3.184-3.008-5.111     c-0.184-1.936-1.536-4.819-2.76-6.361c-2.196-2.764,1.312-4.041,1.584-5.199c0.779-3.308-2.83-2.898-3.682-5.836     c-0.237-0.815-0.439-4.003-0.283-4.572c1.494-5.428,1.273,0.417,3.861,1.909c-0.503-0.947-2.137-5.705-1.311-6.532     c1.059-1.058,7.357,1.466,7.675,2.321c-0.436-1.301-1.328-1.701-2.592-1.268c0.445-0.283,0.552-0.641,0.878-0.92     c-0.873,0.603-3.113,0.271-3.933-0.021c-2.271-0.807-0.86-1.799-2.976-0.801c-1.311,0.618,1.217,2.723-1.343,1.639     c-1.624-0.688-0.819-2.721-2.831-2.265c0.176-0.618,0.548-1.663,0.869-2.178c0.158,0.469,0.315,0.939,0.473,1.408     c-0.061-1.126-0.616-2.429-1.013-2.615c0.206-2.128-4.584-7.29-3.319-8.66c0.827-0.896,0.721-4.223,0.896-5.443     c0.166-1.164,0.705-2.193,0.529-3.532c-0.553-4.208-3.62-5.088-1.135-9.334c0.624-1.065,1.352-1.39,1.917-2.325    C28.076,115.98,28.391,114.359,29.372,112.632',
				'attr': {
					'stroke-width': '0',
					'fill': '#003366',
				}
			},
			{
				'id': '1',
				'name': 'beja',
				'path': 'M28.995,102.739c-2.734-3.918,1.469-10.414,3.06-13.841c0.097,0.212,0.194,0.425,0.292,0.637     c1.11-0.716,0.321-0.843,1.238-0.574c-0.184-0.212,0.267-0.619-0.51-0.574c0.402-1.371,1.802-2.568,2.55-2.871     c-0.267,0.085-0.534,0.17-0.801,0.255c1.362-2.931,5.951-17.022,8.378-17.286c-0.3-2.269,0.966-4.529,1.821-7.208     c0.321,0.298,0.754,0.563,1.019,0.829c-0.016,0.089-0.442-0.671-0.217-0.574c2.192,0.439,7.645,1.413,7.215,4.738     c-0.769,5.963,4.881,4.154,8.957,4.352c1.828,0.088,3.574,1.246,5.027,1.754c1.072,0.375,5.171,0.638,6.483,0.351     c5.439-1.19,11.228-0.188,16.619,0.923c1.506,0.311,15.923,2.225,12.812,6.763c-1.017,1.483-10.016,10.636-8.888,12.119     c1.331,1.751,2.431,0.923,1.056,3.731c-1.328,2.713-1.965,5.499-2.703,8.602c-0.432,1.815-1.116,10.086-2.651,11.14     c-1.361,0.935-8.882-1.631-10.711-2.008C62.279,110.545,45.708,106.373,28.995,102.739',
				'attr': {
					'stroke-width': '0',
					'fill': '#003366',
				}
			},
//			{
//				'id': '2',
//				'name': 'braga',
//			},
//			{
//				'id': '3',
//				'name': 'bragença',
//			},
//			{
//				'id': '4',
//				'name': 'castelo branco',
//			},
//			{
//				'id': '5',
//				'name': 'coimbra',
//			},
//			{
//				'id': '6',
//				'name': 'évora',
//			},
//			{
//				'id': '7',
//				'name': 'faro',
//			},
//			{
//				'id': '8',
//				'name': 'guarda',
//			},
//			{
//				'id': '9',
//				'name': 'leiria',
//			},
//			{
//				'id': '10',
//				'name': 'lisboa',
//			},
//			{
//				'id': '11',
//				'name': 'portalegre',
//			},
//			{
//				'id': '12',
//				'name': 'porto',
//			},
//			{
//				'id': '13',
//				'name': 'santarém',
//			},
//			{
//				'id': '14',
//				'name': 'setúbal',
//			},
//			{
//				'id': '15',
//				'name': 'viana do castelo',
//			},
//			{
//				'id': '16',
//				'name': 'vila real',
//			},
//			{
//				'id': '17',
//				'name': 'viseu',
//			},
		];
		/**
		 * SVG
		 */
		function createSvg() {
			return Raphael('rsr', '700.00001', '1000');
		}
		function createPaths(rsr, isResult, game) {
			var rsrGroups = [];
			
			_.each(districts, function(district, index) {
				var D0 = rsr.set();
				
				D0.push(rsr.path(district.path)).attr(district.attr).data({'id': district.id})
				
				rsrGroups.push(D0);
			})
			
			return rsrGroups;
			//return [D0, D1];
			//return [D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14, D15, D16, D17];
		}
		
		function saveGame(game) {
			if (localStorage.getItem(localStorageName) === null) {
				localStorage[localStorageName];
			}

			localStorage[localStorageName] = JSON.stringify(game);

			return;
		}
		/**
		 * Create game
		 * 
		 */
		function startGame(player) {
			var game = {
				'gameId': 0,
				'gameName': 'Distritos',
				'starterDateAndTime': moment(),
				'endDateAndTime': '',
				'player': player,
				'answers': [],
				'points': 0,
				'state': 0
			};
			
			saveGame(game);

			return;
		}
		function finishGame() {
			var currentGame = JSON.parse(localStorage[localStorageName]);

			currentGame.endDateAndTime = moment();
			
			var points = 0;
			// Points calculation
			_.each(currentGame.answers, function(answer) {
				points = points + (answer.isCorrect ? pointsValue : 0)
			});
			
			var id = currentGame.gameId + "-" + moment().unix() + "." + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
			
			currentGame.id = id;
			currentGame.points = points;
			
			if (localStorage.getItem(localStorageGames) === null) {
				localStorage[localStorageGames];
			}

			GamesService.saveGame(currentGame);

			localStorage.removeItem(localStorageName);

			return id;
		}
		/**
		 * Save an answer
		 * TODO: if district code doesn' exists in district array we must trown an error
		 * @param {int} districtCode 
		 * @param {string} districtName
		 * @returns {Boolean}
		 */
		function saveAnswer(districtCode, districtName) {
			// Check if districtCode exists in districts array
			if (districtCode < districts.length) {
				// Validate answer
				var aValidationResult = validateAnswer(districtCode, districtName);
				// Set answer values to save
				var answer = {
					'districtCode': districtCode,
					'answer': districtName,
					'isCorrect': aValidationResult[0],
					'dateAndTime': moment(),
				};

				var currentGame = JSON.parse(localStorage[localStorageName]);
				
				if (districtCodeExist(districtCode)) {
					var answers = _.reject(currentGame.answers, function(answer) {
						return answer.districtCode = districtCode;
					});
					
					currentGame.answers = answers;
				}
				
				currentGame.answers.push(answer);
				
				saveGame(currentGame);
			}

			return true;
		}
		function getAnswersNum() {
			var currentGame = JSON.parse(localStorage[localStorageName]);
			
			var answersNum = currentGame.answers.length;
			
			return {
				'answersNum': answersNum,
				'districtsNum': districts.length
			}
		}
		function districtCodeExist(districtCode) {
			var currentGame = JSON.parse(localStorage[localStorageName]);
			var answers = currentGame.answers;
			
			if (answers.length > 0) {
				// Undefined or 
				var exist =_.find(answers, function (answer) {
					return answer.districtCode == districtCode;
				})
				
				if ( exist != undefined) {
					return true;
				}
			}
			
			return false;
		}
		function validateAnswer(districtCode, districtName) {
			var districtInfo = districts[districtCode];
			// [true-false, points]
			var result = [0, 0];
			// If answer is correct we set array with new values
			if (districtName.toLowerCase() == districtInfo.name) {
				result = [1, 1.111111111111111];
			}

			return result
		}
		function gameStats(game) {
			var stats = {
				'questionNum': districts.length,
				'answerNum': game.answers.length,
				'answerCorrect': _.filter(game.answers, function (answer) {return answer.isCorrect == 1}).length,
				'timeSpent': '',
			}
			
			return stats;
		}
		function getGame() {
			return JSON.parse(localStorage[localStorageName]);
		}
		return {
			createSvg: createSvg,
			createPaths: createPaths,
			districtCodeExist: districtCodeExist,
			getAnswersNum: getAnswersNum,
			startGame: startGame,
			finishGame: finishGame,
			saveAnswer: saveAnswer,
			gameStats: gameStats,
			getGame: getGame
		}
	});