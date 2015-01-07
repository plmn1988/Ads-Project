app.directive('leftGuestSidebar', function(){
    return {
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/guest/left-sidebar.html',
        replace: true
    }
});