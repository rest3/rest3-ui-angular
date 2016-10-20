(function() {
    'use strict';
		angular.module("myApp.config", [])
		    .factory("config", function() {
		        return {
		            api_endpoint : 'http://192.168.99.100:8080', 
		            api_buckets : '/rest3/api/v1/buckets',
		            api_upload : '/rest3/api/v1/upload',
					api_download : '/rest3/api/v1/download'
		        };
		    });
		})();
