/**
 * User: marksimonson
 */
angular.module('HMRCDev')
    .config(
        [ '$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider',
            function ($stateProvider,   $urlRouterProvider, $uiViewScrollProvider) {

                /////////////////////////////
                // Redirects and Otherwise //
                /////////////////////////////
                $uiViewScrollProvider.useAnchorScroll();
                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                    // Here we are just setting up some convenience urls.
                    .when('/c?id', '/contacts/:id')
                    .when('/user/:id', '/contacts/:id')


                    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                   .otherwise('/');


                //////////////////////////
                // State Configurations //
                //////////////////////////

                // Use $stateProvider to configure your states.
                $stateProvider

                    //////////
                    // Home //
                    //////////

                    .state("home", {
                       // Use a url of "/" to set a states as the "index".
                        url: "/",
                        templateUrl : "views/main.html"
                        , data: {title: "Home Page"}
                   })

                   .state('angular', {
                    url: '/angular',
                    templateUrl: 'angular.html',
                    //controller: 'testController as test',
                    data: {title: "Angular"}

                  })
                    .state('bootstrap', {
                        url: '/bootstrap',
                        templateUrl: 'bootstrap.html',
                        //controller: 'testController as test',
                        data: {title: "Bootstrap Kendo"}

                    })
                    .state('autocomplete', {
                        url: '/autocomplete',
                        templateUrl: 'views/autocomplete/angular.html',
                        //controller: 'testController as test',
                        data: {title: "Autocomplete Kendo"}

                    })
                   .state('account', {
                      url: '/account',
                       templateUrl: 'views/account.html',
                       controller: 'accountController as account',
                       data: {title: "Account"}
                     })
                    .state('organization', {
                      url: '/organization',
                       templateUrl: 'views/organization.html',
                       controller: 'orgController as organization',
                       data: {title: "Organization"}
                     })


            }
        ]);

