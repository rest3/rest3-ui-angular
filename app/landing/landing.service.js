(function (){'use strict';

	angular.module('myApp.landing.service', [])
	.factory("landingService", LandingService);

	function LandingService($http, config){
	    var service = this;
	    service.buckets = []
	    service.getBuckets = getBuckets
	    service.newBucket = newBucket
	    service.deleteBucket = deleteBucket

		return service

		function getBuckets(){
	        var buckets = $http.get(config.api_endpoint + config.api_buckets)//config.api_endpoint + config.api_domains)
	        return buckets;
	    };

	    function newBucket(bucket){
	    	console.log(bucket)
	    	return $http.post(config.api_endpoint + config.api_buckets + '/' + bucket)//config.api_endpoint + config.api_domains)
	   }

	    function deleteBucket(bucket){
	    	return $http.delete(config.api_endpoint + config.api_buckets + '/' + bucket)//config.api_endpoint + config.api_domains)
	   }

	}

	LandingService.$inject = ["$http", "config"];
})();