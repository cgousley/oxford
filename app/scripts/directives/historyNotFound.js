'use strict';

/**
 * @ngdoc directive
 * @name oxfordApp.directive:resultNotFound
 * @description
 * # resultNotFound
 */
angular.module('oxfordApp')
  .directive('historyNotFound', function () {
    return {
      template: 
        `
        <div class="historyLists__list historyLists__status--fail">
            <h1 class="historyLists__status-text">Failed Responses {{submission.submissions.failed.length}}</h1>
            <div ng-repeat="word in submission.submissions.failed">
               <h1 class="historyLists__details--word">{{word.word | uppercase}}</h1>
            </div>
        </div>
        `,
      restrict: 'E'
    }; 
  });

//                