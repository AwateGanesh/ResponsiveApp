var myapp = angular.module("myApp",["ngRoute"]);
myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/dashboard.html"
    }).when("/history", {
        templateUrl : "views/history.html",
        controller : "appCtrl"
    }).when("/budget", {
        templateUrl : "views/budget.html",
        controller : "appCtrl"
    }).when("/distrubution", {
            templateUrl : "views/distrubution.html",
            controller : "appCtrl"
    }).when("/statistics", {
                    templateUrl : "views/statistics.html",
                    controller : "appCtrl"
                }).
     otherwise({
         redirectTo: '/'
       });

});
