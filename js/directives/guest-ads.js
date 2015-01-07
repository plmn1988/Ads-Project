app.directive('guestAds', function() {
    return {
        controller: 'GuestAdsCtrl',
        restrict: 'E',
        templateUrl: 'templates/guest/guest-ads.html',
        replace: true
    };
});