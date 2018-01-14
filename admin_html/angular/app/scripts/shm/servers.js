angular
  .module('shm_servers', [
  ])
  .controller('ShmServersController', ['$scope', function($scope) {
    'use strict';

    $scope.url = 'admin/servers.cgi';

    $scope.columnDefs = [
        {field: 'server_id'},
        {field: 'group_name', displayName: 'Группа' },
        {field: 'host'},
        {field: 'ip'},
        {field: 'transport'},
    ];
   
  }]);