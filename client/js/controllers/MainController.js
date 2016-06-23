'use strict';

function MainController($scope, $state, $rootScope, $window, $stateParams, HttpService) {


  $scope.init = function() {
      HttpService.load("http://0.0.0.0:3000/api/custdetails")
        .then(function(response) {
          if (response) {
            console.log(JSON.stringify(response.data));
            $scope.showAllData = response.data;
          }
        }, function(error) {
          console.log("Error occurred");
        });
    };

$scope.addMoreData = function(){
  var data = {
    cust_name: $scope.custNameModel,
    phone_number: $scope.phoneNumberModel,
    id: $scope.idModel
  };

  HttpService.update('http://0.0.0.0:3000/api/custdetails?', data);
  $scope.init();

};

$scope.updateData = function(){
  var data = {
    cust_name: $scope.custNameModel,
    phone_number: $scope.phoneNumberModel,
    id: $scope.idModel
  };

  HttpService.patch('http://0.0.0.0:3000/api/custdetails?', data);
  $scope.init();

};

$scope.deleteData = function(){
  console.log("ID defined is: "+$scope.idModel);
  HttpService.delete("http://0.0.0.0:3000/api/custdetails", $scope.idModel);
  $scope.init();

};





}
