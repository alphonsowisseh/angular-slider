var app = angular.module('app', ['ngAnimate']);

app.controller('SliderCtrl', ['$scope', '$timeout', function($scope, $timeout){	
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
		$scope.loop();
	}

	$scope.next = function(){		
		for(var i=0; i< $scope.images.length; i++) {
			$scope.current[i] = false;
		}
		console.log('in next');
		$scope.currentIndex++;
		console.log($scope.current);
		if($scope.currentIndex == $scope.images.length) {
			$scope.currentIndex = 0;
		}
		$scope.current[$scope.currentIndex] = true;
		console.log($scope.current);
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

	$scope.nextLoop = function(){		
		for(var i=0; i< $scope.images.length; i++) {
			$scope.current[i] = false;
		}

		$scope.currentIndex++;
		if($scope.currentIndex == $scope.images.length) {
			$scope.currentIndex = 0;
		}
		$scope.current[$scope.currentIndex] = true;		
		$scope.loop();
	}

	$scope.loop = function(){
		$timeout(function(){			
			$scope.nextLoop();	
		},1000);
	};

	$scope.init();
}]);