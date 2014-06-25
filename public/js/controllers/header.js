angular.module('mean.system').controller('HeaderController', ['$scope', 'Global','$modal', function ($scope, Global, $modal) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    }];
    
    $scope.isCollapsed = false;

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
			// localStorageService.set('test', 'test');
			if (player == 1)
				$scope.global.player1 = playerObj;
			else
				$scope.global.player2 = playerObj;
		}, function () {
		//$log.info('Modal dismissed at: ' + new Date());
	});
	};
}]);