app.directive('loggedInSidebar', function(){
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/guest/left-sidebar.html',
        replace: true
    }
});