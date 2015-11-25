
'use strict';


const Router = require('koa-router');

exports = module.exports = function(auth) {
  const router = new Router();

  router
    .get('auth-login', '/login', auth.loginAction)
    .get('auth-logout', '/logout', auth.logoutAction)
    .get('auth-facebook', '/auth/facebook', auth.facebookAction)
    .get('auth-facebook-callback', '/auth/facebook/callback', auth.facebookCallbackAction)
    .get('auth-google', '/auth/google', auth.googleAction)
    .get('auth-google-callback', '/auth/google/callback', auth.googleCallbackAction);

  return router;
};

exports['@inject'] = ['@auth/auth-controller'];
