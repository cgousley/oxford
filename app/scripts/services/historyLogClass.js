'use strict';

/**
 * @ngdoc service
 * @name oxfordApp.historyLog
 * @description
 * # historyLog
 * Factory in the oxfordApp.
 */
angular.module('oxfordApp')
    .factory('HistoryLogClass', function () {
    
    function setData(d,obj){
        const data = d || {};
        obj.submissions = data || {};
        obj.date = data.date || new Date();
    }
    
    class HistoryLog {
        constructor (d){
            setData(d,this);
        }
        SAVE_HISTORY(){
            let thisObj = this;
            return this.GET_HISTORY().then(function(history){
                history.push(thisObj);
                localStorage.setItem("oxford_history", JSON.stringify(history));
            }).then(function(){
                return JSON.parse(localStorage.getItem("oxford_history"));
            });
        }
        GET_HISTORY(){
            return Promise.resolve().then(function(){
                return (localStorage.getItem("oxford_history")) ? JSON.parse(localStorage.getItem("oxford_history")) : [];
            });
        }
    }
    
    return HistoryLog;
});