(function(){
    'use strict';

    angular.module('despesas.controller', []);
    angular.module('despesas.service', []);
    angular.module('despesas.directive', []);
    angular.module('despesas.filter', []);

    angular.module('despesas', [
        'ui.router',
        'despesas.controller',
        'despesas.service',
        'despesas.directive',
        'despesas.filter'
    ]);
})();