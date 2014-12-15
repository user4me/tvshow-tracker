angular.module('MyApp')
    .factory('Lang', function($http) {
        return {
            getAll: function() {
                return $http.get('/api/lang');
            }
        };
    });