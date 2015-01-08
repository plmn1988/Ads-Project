app.controller('GuestAdsCtrl', ['$scope', 'adsData', 'filter', function($scope, adsData, filter){
    $scope.ready = false;

    function loadGuestAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getGuestAds(filterParams)
            .$promise
            .then(function (data){
                $scope.adsData = data;
            });
    }

    loadGuestAds();

    $scope.$on('categoryClicked', function (event, category){
        loadGuestAds(filter.getFilterParams());
    });

    $scope.$on('townClicked', function (event, town){
        loadGuestAds(filter.getFilterParams());
    });
}]);