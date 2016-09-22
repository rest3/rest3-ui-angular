(function () {
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.landing',
  'myApp.landing.service',
  'myApp.bucket',
  'myApp.bucket.service',
  'myApp.version',
  'myApp.config'
])
})();
