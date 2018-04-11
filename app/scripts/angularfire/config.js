angular.module('firebase.config', [])
  .constant('FBURL', 'https://teach-connect.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
