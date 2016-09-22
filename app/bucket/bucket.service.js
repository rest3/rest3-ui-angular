(function (){'use strict';

	angular.module('myApp.bucket.service', ['ngFileUpload'])
	.factory("bucketService", BucketService);

	function BucketService($http, $window, Upload, config){
	    var service = this;
	    service.deleteFile = deleteFile
	    service.getFiles = getFiles
	    service.uploadFile = uploadFile

		return service

		function getFiles(bucket){
			var files = $http.get(config.api_endpoint + config.api_buckets + '/' + bucket)
			return files
		}


	    function deleteFile(bucket, file){
	    	return $http.delete(config.api_endpoint + config.api_buckets + '/' + bucket + "/" + file)
	   }

	    function uploadFile(bucket, file){

            return Upload.upload({
                url: config.api_endpoint + config.api_upload,
                data:{file:file,bucket:bucket}
            })
	   }

	}

	BucketService.$inject = ["$http", "$window", "Upload", "config"];
})();