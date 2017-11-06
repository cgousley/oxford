'use strict';

/**
* @ngdoc overview
* @name oxfordApp
* @description
* # oxfordApp
*
* Main module of the application.
*/
angular
    .module('oxfordApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
    .config(function ($routeProvider,$locationProvider ) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .when('/lookup', {
            templateUrl: 'views/lookup.html',
            controller: 'LookupCtrl',
            controllerAs: 'lookup'
        })
        .when('/history', {
            templateUrl: 'views/history.html',
            controller: 'HistoryCtrl',
            controllerAs: 'history'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
});
