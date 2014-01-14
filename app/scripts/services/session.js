'use strict';

angular.module('cybenexApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
