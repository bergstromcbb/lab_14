var app = angular.module("catdogApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider.when("/cat", {
        templateUrl: "cat.html",
        controller: "picController"
    });

    $routeProvider.when("/dog", {
        templateUrl: "dog.html",
        controller: "picController"
    });

    $routeProvider.when("/racoon", {
            templateUrl: "racoon.html",
            controller: "picController"
        });

    $routeProvider.when("/elephant", {
            templateUrl: "elephant.html",
            controller: "picController"
        });

    $routeProvider.when("/horse", {
            templateUrl: "horse.html",
            controller: "picController"
        });

    $routeProvider.when("/sheep", {
            templateUrl: "sheep.html",
            controller: "picController"
        });

    $routeProvider.when("/squirrel", {
            templateUrl: "squirrel.html",
            controller: "picController"
        });

    $routeProvider.otherwise({
        redirectTo: "/cat"
    });

});

app.controller("picController", function() {
  
});


