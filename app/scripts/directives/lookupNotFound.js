'use strict';

/**
 * @ngdoc directive
 * @name oxfordApp.directive:resultNotFound
 * @description
 * # resultNotFound
 */
angular.module('oxfordApp')
  .directive('lookupNotFound', function () {
    return {
      template: 
        `
            <h1 class="lookupLists__details--word">{{word.word | uppercase}}</h1>
            <h2  class="lookupLists__details--not-found">{{word.details}}</h2>
        `,
      restrict: 'E'
    }; 
  });

//                