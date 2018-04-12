'use strict';

/**
 * @ngdoc function
 * @name teachConnectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teachConnectApp
 */

var app = angular.module('teachConnectApp');

app.controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.l1 = {
    title: 'lesson 1',
    info: 'AP Calc BC'
  };

  $scope.l2 = {
    title: 'lesson 2',
    info: 'boopp'
  };

  $scope.l3 = {
    title: 'lesson 3',
    info: 'helllllo'
  };
});


app.directive('lessonInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      lesson: '=' 
    }, 
    templateUrl: 'scripts/directives/lessonInfo.html' 
  }; 
});


