angular
    .module('shm_user', [
])
.controller('ShmUserController',
    ['$scope','$location','$route','shm_request', function($scope, $location, $route, shm_request) {
    'use strict';

    if ( !$scope.user.user_id ) {
        $location.path('/users');
    } else {
        shm_request('GET','/admin/user.cgi?user_id='+$scope.user.user_id ).then(function(response) {
            $scope.data = response.data[0];
        });
    }

    $scope.save = function() {
        shm_request('POST_JSON','/admin/user.cgi', $scope.data ).then(function() {
            $location.path('/users');
        })
    }

    $scope.passwd = function () {
        var new_password = prompt("Enter new password:");
        if ( new_password ) {
            var data = {
                user_id: $scope.user.user_id,
                password: new_password
            };
            shm_request('POST_JSON','/admin/user.cgi?method=passwd', data ).then(function() {
                $location.path('/users');
            })
        }
    }

}]);

