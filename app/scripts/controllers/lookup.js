'use strict';

/**
 * @ngdoc function
 * @name oxfordApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oxfordApp
 */
angular.module('oxfordApp')
  .controller('LookupCtrl', ['$scope', 'lookupService', 'LookupClass', 'HistoryLogClass', function ($scope, lookupService, LookupClass, HistoryLogClass) {
      $scope.wordList = '';
      $scope.lookupWordList = function(wordList){
          lookupService.lookupWordList(wordList).then(function(res){
              $scope.responses = res;
              $scope.$digest();
              new HistoryLogClass(res).SAVE_HISTORY().then(function(){
                  Promise.resolve();
              });
          });
      };
}]);
