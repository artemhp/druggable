angular.module('app.draggable').directive('draggable', ['$document', function ($document) {
  return {
    scope: {
      coordinates: '=',
      save: '='
    },
    controller: function ($scope, dataService, status) {
      $scope.dataService = dataService;
      $scope.status = status;
    },
    link: function (scope, element, attr) {
      let startX = 0;
      let startY = 0;
      let x = scope.coordinates ? scope.coordinates.x : 0;
      let y = scope.coordinates ? scope.coordinates.y : 0;

      element.css({
        position: 'absolute',
        cursor: 'pointer',
        transform: `translateY(${y}px) translateX(${x}px)`,
      });

      element.on('mousedown', function (event) {
        // Prevent default dragging of selected content
        event.preventDefault();

        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          transform: `translateY(${y}px) translateX(${x}px)`,
        });
      }

      function mouseup(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;

        let obj = {};
        obj[scope.save] = { x, y };

        scope.dataService.changeUser(scope.status.id, obj);
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}])