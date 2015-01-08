app.directive('categories', function(){
    return {
        controller: 'CategoriesCtrl',
        restrict: 'E',
        templateUrl: 'templates/guest/categories.html',
        replace: true
    }
});