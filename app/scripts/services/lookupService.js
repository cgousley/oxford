'use strict';

/**
* @ngdoc service
* @name oxfordApp.oxfordHttp
* @description
* # oxfordHttp
* Service in the oxfordApp.
*/
angular.module('oxfordApp')
    .service('lookupService', ['$http', 'LookupClass', function ($http, LookupClass) {
        this.lookupWordList = (wordList) =>{
            
            if(wordList === ""){
                alert(`You must enter at least one word.

Words are comma separated.`);
            }else{
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
                             Promise.resolve();
                        })
                    );
                });
                return Promise.all(promises).then(function(){
                    return Promise.resolve(responses);
                });
            }
        };

    }]);
