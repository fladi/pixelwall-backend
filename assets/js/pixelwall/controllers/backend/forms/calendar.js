angular.module('PixelWall')
.controller('CalendarFormController', [
  '$scope',
  'box',
  'editable',
  function (
    $scope,
    box,
    editable
  ) {
    $scope.box = box;
    $scope.editable = editable;
    $scope.form = 'pixelwall/forms/calendar.html';
  }
]);

