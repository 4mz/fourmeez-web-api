'use strict';

var fourmeez = angular.module('fourmeez', [
    'ngCookies',
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'fourmeezControllers',
    'fourmeezServices'
]);

fourmeez.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');

    $routeProvider
      .when('/', { templateUrl: 'view/home.html'})
      .when('/login', { templateUrl: 'view/login.html', controller: 'UserAuthCtrl' })
      .when('/user', { templateUrl: 'view/user.html', controller: 'UserCtrl' })
      .when('/signup', { templateUrl: 'view/signup.html', controller: 'SignUpCtrl' })
      .otherwise({ redirectTo: '/' });
});

fourmeez.run(function (api) {
    api.init();
});

