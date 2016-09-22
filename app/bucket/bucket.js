(function (){'use strict';

angular.module('myApp.bucket', ['ngRoute','myApp.bucket.service'])


	.controller('Bucket1Ctrl', Bucket1Ctrl);
		function Bucket1Ctrl(bucketService, $route){
        var vm = this;
        vm.files = [];
        vm.progress = [];
        vm.refresh = activate;
        vm.bucket = $route.current.params.bucket
        vm.deleteFile = deleteFile
        vm.uploadFile = uploadFile

   		activate()

		return vm

		function activate(){
			return bucketService.getFiles(vm.bucket).then(function(response){
				vm.files = Object.keys(response.data['bucket'])
			})
		}

		function deleteFile(bucket, file){
			bucketService.deleteFile(bucket, file).then(function(){
				vm.refresh();
			})
		}

		function uploadFile(bucket, file){
			 bucketService.uploadFile(bucket, file).then(function (resp) { 
			 	console.log(resp)
                if(resp.status === 200){ 
                    console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.status);
                } else {
                    console.log('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
            }, function (evt) { 
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = progressPercentage + '%';
                console.log(vm.progress)
            }).then(function(){
            	vm.progress = '';
            	vm.file = '';
				vm.refresh();
			});
		}

	}

	Bucket1Ctrl.$inject = ["bucketService","$route"];
})();