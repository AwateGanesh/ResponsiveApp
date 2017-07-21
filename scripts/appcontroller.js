var app = angular.module("myApp");

myapp.controller("appCtrl", function ($scope,$rootScope,$location,menuService) {
$scope.isExpanded = true;
//$scope.pageFirstLoad = true;
$scope.menuItems = menuService.getMenuItems()
$scope.toggleMenu = function(){
   // $scope.pageFirstLoad = false;
     $scope.isExpanded = !$scope.isExpanded;
}


 $scope.loadPage = function(itemId){
         $location.path('/'+itemId);
 }

 $scope.getClass = function(itemId){
                           $rootScope.firstLoad = false;
                           $scope.CurrentPath = '/'+itemId;
                           return ($location.path() == $scope.CurrentPath ? 'selected' : '');}

});


