//get the module we made earlier (friendsList)
var app = angular.module("friendsList");

//create new controller and add it as a property on our friendsList app
app.controller("mainCtrl", function($scope){
    $scope.friends = ["Sarah", "Julie Ann", "Rachel", "Eleanor", "Michelle"];
    $scope.addFriend = function(name) {
        $scope.friends.push(name);
    }
});