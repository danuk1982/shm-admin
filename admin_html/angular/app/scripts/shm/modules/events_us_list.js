angular.module('shm_events_us_list', [
])
  .directive('eventsUsList', [ '$modal', 'shm_request', function( $modal, shm_request ) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      controller: function ($scope, $element, $attrs) {
      },
      templateUrl: "views/shm/modules/events-us-list/select.html"
    }
  }])
;
