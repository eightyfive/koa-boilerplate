'use strict';


const appFactory = require('../shared/_app');

// app
const app = appFactory(__dirname);
const di = app.context.di;
const config = di.get('config');

// Middlewares
const serve = require('koa-static');
const error = require('koa-error');
const xhr = require('koa-request-xhr');
const pjax = require('koa-request-pjax');

app.use(xhr());
app.use(pjax());
app.use(error(config.error));
app.use(serve(config.static));

// Locals
const _assign = require('lodash').assign;
app.use(function *(next) {
  _assign(this.state, config.app.locals, {
    flash: this.flash,
    pathname: this.request.path,
    path: app.context.generateUrl,
  });
  yield next;
});

// Routes
const router = di.get('@services/router');
app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
