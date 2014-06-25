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
			localStorageService.set('test', 'test');
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
				}

				$scope.move = function(id)
				{
					swapBeginEndClass(id);
	//document.getElementById(id).className = "end";
}

// swaps classes "begin" and "end" in the node with the specified HTML id.
// adds class "end" if none are found
function swapBeginEndClass(id)
{
	var nod = document.getElementById(id);
	if (nod != null)
	{
		var new_class = "";
		var found = false;
		for (var i=0; i<nod.classList.length; i++)
		{
			var clas = nod.classList[i];
			if (clas == "end")
			{
				clas = "begin";
				found = true;
			}
			else if (clas == "begin")
			{
				clas = "end";
				found = true;
			}
			new_class += " " + clas;
		}
		if (!found)
			new_class += " " + "end";
		nod.setAttribute("class", new_class);
	}
}



}]);