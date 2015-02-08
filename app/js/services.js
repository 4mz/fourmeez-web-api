'use strict';

/* Services */

var fourmeezServices = angular.module('fourmeezServices', ['ngResource']);

fourmeezServices.factory('Users', ['$resource',
  function($resource){
    return $resource('http://fourmeezapp-dev.com:8080/users/profile', {}, {
      query: {method:'GET', isArray:false}
    });
  }]);

fourmeezServices.factory('httpInterceptor', function httpInterceptor ($q, $window, $location) {
  return function (promise) {
      var success = function (response) {
          return response;
      };

      var error = function (response) {
          if (response.status === 401) {
              $location.url('/login');
          }

          return $q.reject(response);
      };

      return promise.then(success, error);
  };
});

fourmeezServices.factory('api', function ($http, $cookies) {
  return {
      init: function (token) {
          $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
      }
  };
});
