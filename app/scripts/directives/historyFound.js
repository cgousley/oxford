'use strict';

/**
 * @ngdoc directive
 * @name oxfordApp.directive:results
 * @description
 * # results
 */
angular.module('oxfordApp')
  .directive('historyFound', function () {
    return {
      template: 
        `
        <div class="historyLists__list historyLists__status--success">
            <h1 class="historyLists__status-text">Successful Responses : {{submission.submissions.success.length}}</h1>
            <div ng-repeat="word in submission.submissions.success">
               <h1 class="historyLists__details--word">{{word.word | uppercase}}</h1>
            </div>
        </div>
        `,
      restrict: 'E'
    };
  });


