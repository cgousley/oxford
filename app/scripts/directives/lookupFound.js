'use strict';

/**
 * @ngdoc directive
 * @name oxfordApp.directive:results
 * @description
 * # results
 */
angular.module('oxfordApp')
  .directive('lookupFound', function () {
    return {
      template: 
        `
        <h1 class="lookupLists__details--word">{{word.word | uppercase}}</h1>
        <div ng-repeat="detail in word.details">
            <h2 class="lookupLists__details--category">{{detail.category}}</h2>
            <div class="lookupLists__list-sense" ng-repeat="sense in detail.senses">
                <h3>Definition {{ $index + 1 }}:</h3>
                <p><span ng-show="sense.registers">{{sense.registers}}: </span>{{sense.definition}}</p>
                <div ng-hide="!sense.example">
                    <h3>Examples</h3>
                    <div ng-repeat="example in sense.example">
                        <p><span ng-show="example.registers">{{example.registers}}: </span>{{example.text}}</p>
                    </div>
                </div>
            </div>
        </div>
`,
      restrict: 'E'
    };
  });


