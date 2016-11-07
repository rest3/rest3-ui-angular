(function() {
    'use strict';

    angular.module('myApp')
        .config(['$routeProvider', router]);

    function router($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'landing/landing.html',
            controller: 'Landing1Ctrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/buckets/:bucket', {
            templateUrl: 'bucket/bucket.html',
            controller: 'Bucket1Ctrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/addons', {
            templateUrl: 'addons/addons_landing.html',
            controller: 'AddonsLandingCtrl',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise({ redirectTo: '/' });        

    }

})();