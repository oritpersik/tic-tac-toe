angular.module('mean.system').controller('IndexController', ['$scope', 'Global','$modal','localStorageService',  function ($scope, Global, $modal, localStorageService) {
	$scope.global = Global;
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
		//$log.info('Modal dismissed at: ' + new Date());
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
			drop.removeClass(typeClass);
		}

		//add the dragged color
		typeClass = drag.attr("data-type");
		mat[x][y]= typeClass;
		
		drop.addClass(typeClass);
		drop.attr('data-type', typeClass);

		//if element has been dragged from the grid, clear dragged color
		if (drag.attr("x-lvl-drop-target")) {
			drag.removeClass(typeClass);
		}
		console.log(mat);
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