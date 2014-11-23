'use strict';

var countdownControllers = angular.module('countdownControllers',[]);

countdownControllers.controller('countdownController',['$scope','$timeout', function ($scope,$timeout){

	
		$scope.pollingInterval = 1000 // in milli seconds
		var difference = function()
		{
		var presentTime = new Date();  //Current Date
		var endTime = new Date("January 01, 2015 00:00:00");

		var seconds = (moment(endTime).diff(moment(presentTime))) /1000;
		
		$scope.days = (mill2humanReadable(seconds).days);
		$scope.hours = (mill2humanReadable(seconds).hours);
		$scope.minutes = (mill2humanReadable(seconds).minutes);
		$scope.seconds = Math.floor(mill2humanReadable(seconds).seconds);
		
		//padding 0s in the beginning
    	$scope.seconds = ($scope.seconds < 10 ? ("0" + $scope.seconds.toString()) : $scope.seconds );
		$scope.minutes = ($scope.minutes < 10 ? ("0" + $scope.minutes.toString()) : $scope.minutes );
		$scope.hours = ($scope.hours < 10 ? ("0" + $scope.hours.toString()) : $hours );
		$scope.days = ($scope.days < 10 ? ("0" + $scope.days.toString()) : $scope.days );

		//returning concatenated because of problems with alignment
		$scope.timerData =  $scope.days.toString() + ' : ' + $scope.hours.toString() + ' : ' +$scope.minutes.toString() + ' : ' + $scope.seconds.toString();
	

		$timeout(difference,$scope.pollingInterval);
		}

		$timeout(difference,$scope.pollingInterval);
}]);