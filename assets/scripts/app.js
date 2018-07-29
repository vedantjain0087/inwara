var myApp = angular.module('myApp',['ngRoute', 'angularUtils.directives.dirPagination']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'assets/pages/home.html',
        controller: 'mainController'
    })
 
});

myApp.controller('mainController', ['$scope', '$http', '$location','$window','$rootScope', function($scope,$http,$location,$window,$rootScope){

  var socket = io.connect('https://coincap.io');
  socket.on('trades', function (tradeMsg) {
    $http({
      url: 'https://coincap.io/front',
      method: "GET",
     })
     .then(function(response) {
          console.log(response);
          $scope.dataset = response.data;
     });
  })

  $scope.sort = function(keyname){
    $scope.sortKey = keyname;   //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
}


 }]);

 