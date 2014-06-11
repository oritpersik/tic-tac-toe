//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {templateUrl: 'views/vod.html'}).
    otherwise({redirectTo: '/'});
}]);

//Setting HASHbang Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix("!");
}]);