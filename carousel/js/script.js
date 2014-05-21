var app = angular.module('app', []);

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

	$scope.next = function(){
		var tempArr = $scope.images;
		var temp = tempArr[0];
		var slide;
		console.log(temp);	
		
		for (var i = 0 ; i < tempArr.length - 1; i++) {
			slide = tempArr[i + 1];
			tempArr[i] = slide;
		};
		tempArr[tempArr.length - 1] = temp;
		$scope.images = tempArr;	
	};

}]);