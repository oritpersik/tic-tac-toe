window.app = angular.module('home-page-vod', ['ui.bootstrap']);
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

