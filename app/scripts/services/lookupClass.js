'use strict';
/**
 * @ngdoc service
 * @name oxfordApp.word
 * @description
 * # word
 * Factory in the oxfordApp.
 */
angular.module('oxfordApp').factory('LookupClass', ["$http", function($http) {
	function setData(d, obj) {
		const data = d || {};
		// data
		obj.word = data.word || "";
		obj.details = data.details || "";
		obj.status = data.status || "";
	}
	class LookupClass {
		constructor(d) {
			// merge the data
			setData(d, this);
		}
		GET(opts) {
			const options = Object.assign({
				baseUrl: "https://od-api.oxforddictionaries.com/api/v1/entries/en/",
				proxyUrl: 'https://cors-anywhere.herokuapp.com/',
				headers: {
					"app_id": "4dcb072c",
					"app_key": "40e72f831cdb950bca782a6ff9dd00a1"
				},
			}, opts);
			const thisObj = this;
			return Promise.resolve().then(function() {
				return $http({
					method: 'GET',
					url: options.proxyUrl + options.baseUrl + encodeURI(thisObj.word.replace(/ /g, "_")),
					headers: options.headers
				}).then(function(res) {
					return {
						status: res.status,
						word: decodeURI(res.data.results[0].word.replace(/_/g, " ")),
						details: res.data.results[0].lexicalEntries.map(function(entry) {
							return {
								category: entry.lexicalCategory,
								senses: entry.entries[0].senses.map(function(sense) {
									const isDef = (sense.hasOwnProperty("definitions"));
									const isCrossRef = (sense.hasOwnProperty("crossReferenceMarkers"));
									const hasRegisters = (sense.hasOwnProperty("registers"));
									return {
										definition: isDef ? sense.definitions[0] : isCrossRef ? sense.crossReferenceMarkers[0] : "NEW DEF VALUE",
										registers: (hasRegisters) ? sense.registers.join(',') : "",
										example: (sense.hasOwnProperty("examples")) ? sense.examples.map(function(example) {
											return {
												registers: (example.hasOwnProperty("registers")) ? example.registers.join(",") : undefined,
												text: example.text
											};
										}) : ""
									};
								})
							};
						})
					};
				})
			}).catch(function(res) {
				return {
					status: status,
					word: res.config.url.substr(res.config.url.lastIndexOf('/') + 1),
					details: "Not Found."
				}
			}).then(function(res) {
				setData(res, thisObj);
				return Promise.resolve(thisObj);
			});
		}
	}
	// Public API here
	return LookupClass;
}]);