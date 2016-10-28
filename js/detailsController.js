angular.module('assessment').controller('detailsController', function($scope, mainService, $stateParams){
  $scope.getProducts = function()
  {
    mainService.getId().then(function(response)
    {
      for(var i = 0; i < response.data.length; i++)
      {
        if($stateParams.id === response.data[i].id)
        {
              $scope.image = response.data[i].image;
              $scope.title = response.data[i].title;
              $scope.desc = response.data[i].desc;
              $scope.price = response.data[i].price;
        }
      }
      $scope.products = response.data;
    })
  }
  $scope.getProducts();
});
