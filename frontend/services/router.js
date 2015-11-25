'use strict';


const Router = require('koa-router');

exports = module.exports = function(index) {
  const appRouter = new Router();

  appRouter
    .get('/', index.homeAction)
  ;

  return appRouter;
};

exports['@inject'] = ['@controllers/index'];
