angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$modal','localStorageService',  function ($scope, Global, $modal, localStorageService) {
	$scope.global = Global;

	//player1 = x , player2 = o
	$scope.currentTurn = 1;

	var mat = [];
	for (i = 0;i<3;i++) {
		mat[i] = [null,null,null];
	}

	$scope.openSignUpModal = function(player) {
		var modalInstance = $modal.open({
			templateUrl: '/views/signup.html',
			controller: 'SignupController',
			resolve: {
				player: function () {
					return player;
				}
			}
		});

		modalInstance.result.then(function (playerObj) {
			if (player == 1)
				$scope.global.player1 = playerObj;
			else
				$scope.global.player2 = playerObj;
		}, function () {
		});
	};

	$scope.dropped = function(dragEl, dropEl, x, y) {

		//this is application logic, for the demo we just want to color the grid squares
		//the directive provides a native dom object, wrap with jqlite
		var drop = angular.element(dropEl);
		var drag = angular.element(dragEl);

		//clear the previously applied color, if it exists
		var typeClass = drop.attr('data-type');
		if (typeClass) {
			return;
			drop.removeClass(typeClass);
		}
		typeClass = drag.attr("data-type");

		if ((typeClass === 'x' && $scope.currentTurn === 2) || (typeClass === 'o' && $scope.currentTurn === 1))
			return;
			//add the dragged
			mat[x][y]= typeClass; 

			changeTurn();
			drop.addClass(typeClass);
			drop.attr('data-type', typeClass);
			checkVictory(mat);
		};

		function checkVictory(mat) {
		//check lines
		for (var i = 0; i < 3; i++) {
			if (mat[i][0] !== null && mat[i][0] === mat[i][1] && mat[i][1] === mat[i][2])
				return winner(mat[i][0]);
		}
		//check אלכסונים
		var i=0;
		if (mat[i][i] !== null && mat[i][i] ===  mat[i+1][i+1] && mat[i][i] === mat[i+2][i+2])
			return winner(mat[i][i]);
		if (mat[i][i+2] !== null && mat[i][i+2] ===  mat[i+1][i+1] && mat[i][i+2] === mat[i+2][i])
			return winner(mat[i][i+2]);
		
		//check cols
		for (var i = 0; i<3; i++) {
			for (var j=0;j<3;j++) {
				if (mat[j][i] !== null && mat[j][i] === mat[j+1][i] && mat[j][i] === mat[j+2][i])
					return winner(mat[j][i]);
				
			}
		}
	}

	function winner(type) {
		console.log(mat);
		console.log(type);
		$scope.winner = true;
		$scope.$apply();
	}

	function changeTurn() {
		if ($scope.currentTurn === 1)
			$scope.currentTurn = 2;
		else if ($scope.currentTurn === 2)
			$scope.currentTurn = 1;
		$scope.$apply();
	}

	$scope.newGame = function() {
		//clean board
		$scope.winner = null;
	};

	var canvas = document.getElementById('note-canvas');
	var context = canvas.getContext('2d');

	var imageObj = new Image();
	imageObj.onload = function() {
		var pattern = context.createPattern(imageObj, 'repeat');

		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = pattern;
		context.fill();
	};
	imageObj.src = 'img/background.png';

}]);