(function() {
    'use strict';
		angular.module("myApp.config", [])
		    .factory("config", function() {
		        return {
		            api_endpoint : 'http://192.168.20.240:30501', 
		            api_buckets : '/rest3/api/v1/buckets',
		            api_upload : '/rest3/api/v1/upload',
					api_download : '/rest3/api/v1/download'
		        };
		    });
		})();
