app.controller('GuestAdsCtrl', ['$scope', 'adsData', function($scope, adsData){
    adsData.getGuestAds()
        .$promise
        .then(function (data){
            $scope.adsData = data;
        });
}]);