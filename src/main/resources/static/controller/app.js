var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "content/bookAuthor.html",
            controller : "bookAuthorCtrl as bookAuthorCtrl"
        })
        .when("/book-author", {
            templateUrl : "content/bookAuthor.html",
            controller : "bookAuthorCtrl as bookAuthorCtrl"
        })
        .when("/borrower", {
            templateUrl : "content/borrower.html",
            controller : "borrowerCtrl as borrowerCtrl"
        })
        .when("/loan", {
            templateUrl : "content/loan.html",
            controller : "loanCtrl as loanCtrl"
        });
});

app.controller("myCtrl", function ($scope, $location) {
    var controller = this;
    controller.currentTab = $location.url();
});