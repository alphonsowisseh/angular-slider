var app = angular.module('app', ['ngAnimate']);

app.controller('SliderCtrl', ['$scope', function($scope){
	$scope.images = [
		{
			link: 'images/1.jpg'
		},
		{
			link: 'images/2.jpg'
		},
		{
			link: 'images/3.jpg'
		},
		{
			link: 'images/4.jpg'
		},
	];

	$scope.current = [];
	$scope.currentIndex = 0;
	for(var i=0; i< $scope.images.length; i++) {
		$scope.current[i] = false;
	}

	//$scope.current[3] = true;

	$scope.init = function(){
		$scope.currentIndex = 0;
		$scope.current[0] = true;
		loop();
	}

	$scope.next = function(){		
		for(var i=0; i< $scope.images.length; i++) {
			$scope.current[i] = false;
		}

		$scope.currentIndex++;
		if($scope.currentIndex == $scope.images.length) {
			$scope.currentIndex = 0;
		}
		$scope.current[$scope.currentIndex] = true;
	}

	$scope.previous = function(){		
		for(var i=0; i< $scope.images.length; i++) {
			$scope.current[i] = false;
		}

		$scope.currentIndex--;
		if($scope.currentIndex < 0) {
			$scope.currentIndex = $scope.images.length-1;
		}
		$scope.current[$scope.currentIndex] = true;
	}

	var loop = function(){

	}

	$scope.init();
}]);