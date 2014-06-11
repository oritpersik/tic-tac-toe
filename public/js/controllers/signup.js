angular.module('mean.system').controller('SignupController', ['$scope', 'Global','$modalInstance','player',  function ($scope, Global, $modalInstance, player) {
	$scope.global = Global;

	$scope.currentPlayer = (player == 1) ? $scope.global.player1 : $scope.global.player2;

	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.save = function(currentPlayer) {
		if (player == 1) 
			$scope.global.player1 = $scope.currentPlayer;
		else
			$scope.global.player2 = $scope.currentPlayer;

		$modalInstance.close(currentPlayer);
	};

}]);