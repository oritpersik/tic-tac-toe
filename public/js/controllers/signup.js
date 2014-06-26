angular.module('mean.system').controller('SignupController', ['$scope', 'Global','$modalInstance','player','localStorageService',  function ($scope, Global, $modalInstance, player,localStorageService) {
	$scope.global = Global;

	$scope.currentPlayer = (player == 1) ? $scope.global.player1 : $scope.global.player2;

	$scope.loadUser = function() {
		$scope.currentPlayer = localStorageService.get('player' + player);
	};

	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.save = function(currentPlayer) {
		if (player == 1)  {
			$scope.global.player1 = $scope.currentPlayer;
		}
		else {
			$scope.global.player2 = $scope.currentPlayer;
		}

		localStorageService.set('player'+player, JSON.stringify(currentPlayer));
		$modalInstance.close(currentPlayer);
	};
	$scope.clear = function() {
		$scope.global['player' + player] = null;
		localStorageService.remove('player'+player);
		$modalInstance.close();
	}

}]);