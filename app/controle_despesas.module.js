(function(){
    'use strict';

    angular.module('controleDespesa.controller', []);
    angular.module('controleDespesa.service', []);
    angular.module('controleDespesa.directive', []);
    angular.module('controleDespesa.filter', []);

    angular.module('controleDespesa', [
        'ui.router',
        'oc.lazyLoad',
        'ngMaterial',
        'ui.bootstrap',
        'controleDespesa.controller',
        'controleDespesa.service',
        'controleDespesa.directive',
        'controleDespesa.filter'
    ]);
})();