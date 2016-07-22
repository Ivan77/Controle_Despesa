(function(){
    'use strict';

    angular.module('controleDespesa')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController(){
        var vm = this;
        vm.usuario = {};
    }
})();