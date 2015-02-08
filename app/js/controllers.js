'use strict';

/* Controllers */

var fourmeezControllers = angular.module('fourmeezControllers', []);

fourmeezControllers.controller('HomeCtrl', [ function() {
}]);

fourmeezControllers.controller('UserCtrl', [ '$scope', 'Users', function($scope, Users) {
    $scope.users = Users.query();
}]);

fourmeezControllers.controller('UserAuthCtrl', ['$scope','$http', '$location',
    function($scope, $http, $location, $cookieStore, api){
        $scope.signIn = function() {
            $http({
                method: 'POST',
                url: 'http://fourmeezapp-dev.com:8080/signin/access_token/',
                data: "username="+$scope.userData.username+
                                    "&password="+$scope.userData.password+
                                    "&grant_type=password&client_id=b89d29260a645d3710c7",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data, status, headers, config)
                {
                    $scope.data = data;
                    $scope.status = status;
                    $http.defaults.headers.common["Authorization"] = "Bearer " + $scope.data.access_token;
                    $location.path("/user");
                    if (data.result)
                    {
                        console.log(data.result);
                    } else if (data.error)
                    {
                    
                    }
                }
                ).error(function(data, status, headers, config)
                {
                });
            }
    }
]);

fourmeezControllers.controller('SignUpCtrl', ['$scope','$http', '$location',
    function($scope, $http, $location, $cookieStore, api){
        $scope.signUp = function() {
                $location.path("/signup")
            }
    }
]);


//  function($scope, $http){
//        $http({
//            method: 'POST',
//            url: 'http://127.0.0.1:8080/signin/access_token/',
//            data: "username="+$scope.userData.username+
//                                "&password="+$scope.userData.password+
//                                "&grant_type=password&client_id=b89d29260a645d3710c7",
//            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//                }).success(function(data, status, headers, config)
//                {
//                /*called for result & error because 200 status*/
//                if (data.result){
//                    //handle success here
//                    } else if (data.error {
//                    //handle error here
//                    )}
//                     }).error(function(data, status, headers, config){
//                /*handle non 200 statuses*/
//                    });
//              }
//]);
