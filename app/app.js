'use strict';

// Declare app level module which depends on views, and components
var timezoneConvert = angular.module('timezoneConvert', [
  'ngRoute',
  'timezoneConvert.view1',
  'timezoneConvert.view2',
  'timezoneConvert.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

timezoneConvert.controller("mainController",function () {

});