angular.module('PixelWall')
.config([
  '$stateProvider',
  function(
    $stateProvider
  ) {
    $stateProvider
    .state('backend', {
      abstract: true,
      template: '<ui-view/>',
      data: {
        authLevel: 1000
      }
    });
  }
]);
