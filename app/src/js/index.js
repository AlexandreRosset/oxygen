var app = angular.module('app', []);

app.controller('ctrl', function($scope, $interval){

  $scope.tableau = [];

  $scope.init = function () {
    for (let i = 0; i < 15; i++) {
      $scope.tableau.push([]);
      for (let j = 0; j < 15; j++) {
        $scope.tableau[i].push([]);
      }
    }
    $scope.generateWorld();
  }

  $scope.generateWorld = function () {

  }


  var socket = io.connect('http://localhost:8081');
  /*$scope.NC = function() {
    socket.emit('nouveau_client', $scope.people);
    console.log($scope.people);
  }
  socket.on('pseudo', function(pseudo) {
    $scope.Ps = pseudo;
    $scope.$apply();
  })*/

});
