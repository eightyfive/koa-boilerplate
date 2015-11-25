'use strict';


const Router = require('koa-router');

exports = module.exports = function(authRouter, auth) {
  const privateRouter = new Router();
  privateRouter.use(auth.isAuthenticated);

  const appRouter = new Router();
  appRouter.use(authRouter.routes());
  appRouter.use(privateRouter.routes());

  return appRouter;
};

exports['@inject'] = ['@auth/auth-router', '@auth/auth-controller'];
