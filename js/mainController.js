angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams){
  $scope.test = 'Mom! my main controller is working!';
  $scope.getProducts = function()
  {
    mainService.getProducts().then(function(res)
  {
    $scope.products = res.data;

  })
  };

  $scope.getProducts();
});
