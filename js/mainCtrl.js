angular.module('app').controller('mainCtrl', function($scope, mainSvc){
  $scope.productList = mainSvc.getProducts();
  $scope.modalShown = false;
  $scope.toggleModal = function(pro){
    $scope.modalShown = !$scope.modalShown;
    $scope.pro = pro;
  };
});
