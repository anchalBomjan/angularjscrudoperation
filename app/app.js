var app = angular.module('studentApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Views/Home.html"
    })
    .when("/students", {
        templateUrl: "../Views/List.html",
        controller: "studentController"
    })
    .when("/addStudent", {
        templateUrl: "../Views/studentform.html",
        controller: "studentController"
    })
    .when("/editStudent/:id", {
        templateUrl: "../Views/edit.html",
        controller: "studentController"
    })
    .otherwise({
        redirectTo: "/"
    });
});
