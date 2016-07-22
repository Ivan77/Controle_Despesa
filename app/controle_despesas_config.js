(function(){
    'use strict';

    angular
        .module('controleDespesa').config(ConfigurarProjeto);

    function ConfigurarProjeto($stateProvider, $urlRouterProvider){

        var login = {
            url: '/login',
            templateUrl: 'app/views/login/login.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/login/login-controller.js');
                }
            }
        };

        $stateProvider.state('login', login);
        $urlRouterProvider.otherwise('/login');
    }
})();