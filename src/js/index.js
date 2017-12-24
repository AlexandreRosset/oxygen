var app = angular.module('oxygen', []);

app.controller('ctrl', function ($scope, $interval) {

    $scope.tableau = [];

    $scope.init = function () {
        for (var i = 0; i < 15; i++) {
            $scope.tableau.push({"ligne":[]});
            for (var j = 0; j < 15; j++) {
                $scope.tableau[i].ligne.push($scope.newCell(i, j));
            }
        }
        /*$scope.generateWorld('flat');*/
    };

    $scope.generateWorld = function () {

    };

    $scope.newCell = function (i, j) {
        return {
            "i": i,
            "j": j,
            "gaz": {
                "oxygen": Math.floor(Math.random()*1000),
                "CO2": Math.floor(Math.random()*1000)
            },
            "solid": false
        }
    };

    $interval(function () {
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {



                if (i - 1 >= 0 && !$scope.tableau[i-1].ligne[j].solid) {
                    for (var k = 0; k < ($scope.tableau[i].ligne[j].gaz.oxygen + $scope.tableau[i].ligne[j].gaz.CO2) / 10; k++) {
                        var choix = Math.floor(Math.random()*2);
                        switch (choix){
                            case 0:
                                if ($scope.tableau[i].ligne[j].gaz.oxygen > 0) {
                                    $scope.tableau[i].ligne[j].gaz.oxygen -= 1;
                                    $scope.tableau[i-1].ligne[j].gaz.oxygen += 1;
                                }
                                break;
                            case 1:
                                if ($scope.tableau[i].ligne[j].gaz.CO2 > 0) {
                                    $scope.tableau[i].ligne[j].gaz.CO2 -= 1;
                                    $scope.tableau[i-1].ligne[j].gaz.CO2 += 1;
                                }
                                break;
                            default:
                                break;
                        }
                    }

                }



                if (i + 1 <= 14 && !$scope.tableau[i+1].ligne[j].solid) {
                    for (var k = 0; k < ($scope.tableau[i].ligne[j].gaz.oxygen + $scope.tableau[i].ligne[j].gaz.CO2) / 10; k++) {
                        var choix = Math.floor(Math.random()*2);
                        switch (choix){
                            case 0:
                                if ($scope.tableau[i].ligne[j].gaz.oxygen > 0) {
                                    $scope.tableau[i].ligne[j].gaz.oxygen -= 1;
                                    $scope.tableau[i+1].ligne[j].gaz.oxygen += 1;
                                }
                                break;
                            case 1:
                                if ($scope.tableau[i].ligne[j].gaz.CO2 > 0) {
                                    $scope.tableau[i].ligne[j].gaz.CO2 -= 1;
                                    $scope.tableau[i+1].ligne[j].gaz.CO2 += 1;
                                }
                                break;
                            default:
                                break;
                        }
                    }

                }



                if (j - 1 >= 0 && !$scope.tableau[i].ligne[j-1].solid) {
                    for (var k = 0; k < ($scope.tableau[i].ligne[j].gaz.oxygen + $scope.tableau[i].ligne[j].gaz.CO2) / 10; k++) {
                        var choix = Math.floor(Math.random()*2);
                        switch (choix){
                            case 0:
                                if ($scope.tableau[i].ligne[j].gaz.oxygen > 0) {
                                    $scope.tableau[i].ligne[j].gaz.oxygen -= 1;
                                    $scope.tableau[i].ligne[j-1].gaz.oxygen += 1;
                                }
                                break;
                            case 1:
                                if ($scope.tableau[i].ligne[j].gaz.CO2 > 0) {
                                    $scope.tableau[i].ligne[j].gaz.CO2 -= 1;
                                    $scope.tableau[i].ligne[j-1].gaz.CO2 += 1;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }



                if (j + 1 <= 14 && !$scope.tableau[i].ligne[j+1].solid) {
                    for (var k = 0; k < ($scope.tableau[i].ligne[j].gaz.oxygen + $scope.tableau[i].ligne[j].gaz.CO2) / 10; k++) {
                        var choix = Math.floor(Math.random()*2);
                        switch (choix){
                            case 0:
                                if ($scope.tableau[i].ligne[j].gaz.oxygen > 0) {
                                    $scope.tableau[i].ligne[j].gaz.oxygen -= 1;
                                    $scope.tableau[i].ligne[j+1].gaz.oxygen += 1;
                                }
                                break;
                            case 1:
                                if ($scope.tableau[i].ligne[j].gaz.CO2 > 0) {
                                    $scope.tableau[i].ligne[j].gaz.CO2 -= 1;
                                    $scope.tableau[i].ligne[j+1].gaz.CO2 += 1;
                                }
                                break;
                            default:
                                break;
                        }
                    }

                }
            }
        }
    }, 1000);

    //var socket = io.connect('http://localhost:8081');
    /*$scope.NC = function() {
      socket.emit('nouveau_client', $scope.people);
      console.log($scope.people);
    }
    socket.on('pseudo', function(pseudo) {
      $scope.Ps = pseudo;
      $scope.$apply();
    })*/

});
