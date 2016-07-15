(function(){
    'use strict';

    angular
        .module('despesas.service')
        .service('LoginService', LoginService);

    //injetar os servicos no parametro.
    LoginService.$inject = [''];

    function LoginService(){

    }
})();