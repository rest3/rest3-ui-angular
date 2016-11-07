(function (){'use strict';

angular.module('myApp.addonsLanding', ['ngRoute','myApp.addonsLanding.service'])


	.controller('AddonsLandingCtrl', AddonsLandingCtrl);
		function AddonsLandingCtrl(addonsLandingService){
        var vm = this;
        vm.buckets = [];
        vm.refresh = activate;
        vm.downloadFile = addonsLandingService.downloadFile;
        vm.api_endpoint = addonsLandingService.api_endpoint

   		activate()

		return vm

		function activate(){
			return addonsLandingService.getAddons().then(function(response){
				vm.addonFiles = response.data['bucket']
			})
		}

	}

	AddonsLandingCtrl.$inject = ["addonsLandingService"];
})();