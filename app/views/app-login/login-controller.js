(function(){
    'use strict';

    angular
        .module('despesas.controller')
        .controller('LoginController', LoginController);

    //injetar os servicos no parametro.
    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService){

    }
});