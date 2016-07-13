(function(){
    'use strict';

    angular.module('financas.controller', []);
    angular.module('financas.service', []);
    angular.module('financas.factory', []);
    angular.module('financas.directive', []);
    angular.module('financas.filter', []);
    angular.module('financas', [
        'financas.controller',
        'financas.service',
        'financas.factory',
        'financas.directive',
        'financas.filter'
    ]);
})();