(function (){'use strict';

angular.module('myApp.landing', ['ngRoute','myApp.landing.service'])


	.controller('Landing1Ctrl', Landing1Ctrl);
		function Landing1Ctrl(landingService){
        var vm = this;
        vm.buckets = [];
        vm.refresh = activate;
        vm.newBucket = newBucket
        vm.deleteBucket = deleteBucket

   		activate()

		return vm

		function activate(){
			return landingService.getBuckets().then(function(response){
				vm.buckets = response.data['buckets']
			})
		}

		function newBucket(name){
			landingService.newBucket(name).then(function(){
				vm.refresh();
			})
		}

		function deleteBucket(name){
			landingService.deleteBucket(name).then(function(){
				vm.refresh();
			})
		}

	}

	Landing1Ctrl.$inject = ["landingService"];
})();