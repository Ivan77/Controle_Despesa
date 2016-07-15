(function(){
    'use strict';

    angular
        .module('despesas').config(ConfigurarProjeto);

    function ConfigurarProjeto($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        // criar rotas das paginas
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/views/app-login/login.html"
        });
    }
})();