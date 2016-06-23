angular
  .module('app', [
    'lbServices',
    'ui.router'
  ]).service('HttpService',HttpService)
  .controller('MainController', MainController)
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('todo');
  }]);
