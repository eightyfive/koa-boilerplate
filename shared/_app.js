'use strict';


const path = require('path');
const koa = require('koa');
const Di = require('kontainer-di-lazy');

module.exports = function(appRoot) {
  const app = koa();
  const config = require(path.resolve(appRoot, 'config/index'))(app.env);

  // DI
  config.di.resolveFrom = path.resolve(__dirname, '../');
  const di = new Di(config.di);
  di.set('config', config);

  // app.context
  const router = di.get('@services/router');
  app.context.render = di.get('swig');
  app.context.generateUrl = router.url.bind(router);
  app.context.di = di;

  // app.
  app.proxy = true;
  app.keys = config.app.keys;

  return app;
};
