(function (){'use strict';

	angular.module('myApp.addonsLanding.service', [])
	.factory("addonsLandingService", AddonsLandingService);

	function AddonsLandingService($http, config){
	    var service = this;
	    service.buckets = [];
	    service.deleteBucket = deleteBucket;
	    service.getAddons = getAddons;
	    service.downloadFile = downloadFile;
	    service.api_endpoint = config.api_endpoint

		return service

		function getAddons(){
			var files = $http.get(config.api_endpoint + config.api_buckets + '/Addons')
			return files
		}


	   	function downloadFile(bucket, file){
            window.open(config.api_endpoint + config.api_download + '/' + bucket + '/' + file)
	   }

		function getBuckets(){
	        var buckets = $http.get(config.api_endpoint + config.api_buckets)
	        return buckets;
	    };

	    function newBucket(bucket){
	    	console.log(bucket)
	    	return $http.post(config.api_endpoint + config.api_buckets + '/' + bucket)
	   }

	    function deleteBucket(bucket){
	    	return $http.delete(config.api_endpoint + config.api_buckets + '/' + bucket)
	   }

	}

	AddonsLandingService.$inject = ["$http", "config"];
})();