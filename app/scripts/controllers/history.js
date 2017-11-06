'use strict';

/**
 * @ngdoc function
 * @name oxfordApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oxfordApp
 */
angular.module('oxfordApp')
    .controller('HistoryCtrl', ['$scope', 'HistoryLogClass', function ($scope, HistoryLogClass) {
        new HistoryLogClass().GET_HISTORY().then(function(h){
            $scope.history = h;
            $scope.$digest();
        });
}]);
