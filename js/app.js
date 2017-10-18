var app = angular.module("mobileApp", ["ngRoute"]);

app.config(function($routeProvider){
$routeProvider
.when("/",{
	templateUrl:"view/sub.html"

})
.when("/SUB2",{
	templateUrl:"view/sub2.html"
	
})
.otherwise({
redirectTo: "/"
});
});