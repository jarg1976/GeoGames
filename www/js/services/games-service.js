'use strict';
angular.module('starter')
	.factory('GamesService', function (moment) {
		function setLocalStorageGames(games) {
			localStorage['localStorageGames'] = JSON.stringify(games);

			return;
		}

		function getLocalStorageGames() {
			return JSON.parse(localStorage['localStorageGames']);
		}
		/**
		 * Get array of games with id == gameId
		 * @param {int} gameId
		 * @returns {array objects}
		 */
		function getLocalStorageGame(gameId) {
			var aLocalStorageGames = getLocalStorageGames();
			var aGames = [];

			if (aLocalStorageGames.length) {
				_.each(aLocalStorageGames, function (game, index) {
					if (game.id == gameId) {
						aGames[0] = index;
						aGames[1] = game;
					}
				});
			}

			return aGames;
		}
		/**
		 * Create games var
		 */
		function createGamesVar() {
			if (localStorage.getItem('localStorageGames') === null) {
				setLocalStorageGames([]);
			}

			return;
		}
		/**
		 * Clean games
		 */

		/**
		 * Save game
		 */
		function saveGame(gameData) {
			if (localStorage.getItem('localStorageGames') === null) {
				createGamesVar();
			}
			var localStorageGames = getLocalStorageGames();
			var gamesData;
			var indexToSave = 0;
			// [index of game, gameData]
			var aIndexAndGameData = getLocalStorageGame(gameData.gameId);
			if (aIndexAndGameData.length) {
				gamesData = aIndexAndGameData[1];

				gamesData.games.push(gameData);

				indexToSave = aIndexAndGameData[0]
			} else {
				gamesData = {
					id: gameData.gameId,
					games: [gameData]
				}
				
				indexToSave = localStorageGames.length ? localStorageGames.lengt + 1 : 0;
			}

			localStorageGames[indexToSave] = gamesData;
			
			setLocalStorageGames(localStorageGames);

			return true;
		}
		function getGame(id) {
			var aGames = getLocalStorageGames();
			
			var gameId = id.split("-")[0];
			// All game with game id
			var jsonGame = _.findWhere(aGames, {"id": parseInt(gameId)});
			
			var game = _.findWhere(jsonGame.games, {"id": id});
			
			return game;
		}
		/**
		 * Remove game
		 */

		return {
			getGame: getGame,
			getLocalStorageGames: getLocalStorageGames,
			saveGame: saveGame
		};
	});


