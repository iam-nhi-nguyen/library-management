$(document).ready(function(){
    $('.sidenav').sidenav();
});

var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "content/bookAuthor.html",
            controller : "bookAuthorCtrl as ctrl"
        })
        .when("/book-author", {
            templateUrl : "content/bookAuthor.html",
            controller : "bookAuthorCtrl as ctrl"
        })
        .when("/borrower", {
            templateUrl : "content/borrower.html",
            controller : "borrowerCtrl as ctrl"
        })
        .when("/loan", {
            templateUrl : "content/loan.html",
            controller : "loanCtrl as ctrl"
        });
});

app.controller("myCtrl", function ($scope, $location) {
    var controller = this;
    controller.currentTab = $location.url();
});