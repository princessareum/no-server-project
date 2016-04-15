angular.module('app').controller('mainCtrl', function($scope, mainSvc){
  $scope.productList = mainSvc.getProducts();
})
