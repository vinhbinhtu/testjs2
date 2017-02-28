var app=angular.module('myModule',[]);

app.controller('AppCtrl',function($scope,$http){

console.log("Hello world from controller");
$http.get('/list').then(function(response){
	console.log("I got the data I requested");
//	alert(response);
	$scope.categorylist=response.data;
});
$scope.add= function(){
	console.log($scope.category);
	$scope.categorylist.push($scope.category);
	$http.post('/list',$scope.category);
};



});