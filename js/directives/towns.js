app.directive('towns', function() {
    return {
        controller: 'TownsCtrl',
        restrict: 'E',
        templateUrl: 'templates/guest/towns.html',
        replace: true
    };
});