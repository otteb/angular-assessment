angular.module('assessment',['ui.router']).config(function($urlRouterProvider, $stateProvider)
{
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      templateUrl: '../views/home.html',
      controller: 'mainCtrl',
      url: '/'
    })
    
    .state('about',{
      templateUrl: '../views/about.html',
      controller: 'mainCtrl',
      url:'/about'
    })
    .state('blog', {
      templateUrl: '../views/blog.html',
      controller: 'mainCtrl',
      url: '/blog'
    })

    .state('shop', {
      templateUrl: '../views/shop.html',
      controller: 'mainCtrl',
      url: '/shop'
    })

    .state('details', {
      templateUrl: '../views/product-details.html',
      controller: 'detailsController',
      url: '/details/:id'
    })
})
