'use strict';

/**
 * @ngdoc service
 * @name oxfordApp.historyService
 * @description
 * # historyService
 * Service in the oxfordApp.
 */
angular.module('oxfordApp')
    .service('historyService', ["LookupClass", function (LookupClass) {
    
        this.historyWordList = (wordList) =>{
            let promises = [];
            let responses = {
                success: [],
                failed : []
            };
            let wordArray = wordList.split(",");
            wordArray.map(function(w){
                promises.push(
                     new LookupClass({word:w}).GET().then(function(r){
                         (r.status === 200) ? responses.success.push(r) : responses.failed.push(r);
                         return Promise.resolve();
                    })
                );
            });
            return Promise.all(promises).then(function(){
                return Promise.resolve(responses);
            });
        };
}]);
