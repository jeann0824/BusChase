'use strict';

angular.module('busChaseApp.auth', ['busChaseApp.constants', 'busChaseApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
