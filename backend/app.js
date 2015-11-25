'use strict';


const appFactory = require('../shared/_app');

// app
const app = appFactory(__dirname);
const di = app.context.di;
const config = di.get('config');

// Middlewares
const session = require('koa-session');
const flash = require('koa-flash');
const serve = require('koa-static');
const error = require('koa-error');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const xhr = require('koa-request-xhr');
const pjax = require('koa-request-pjax');
const methodOverride = require('koa-methodoverride');

app.use(xhr());
app.use(pjax());
app.use(session(app));
app.use(flash());
app.use(bodyParser());
app.use(multer());
app.use(methodOverride());

app.use(error(config.error));
app.use(serve(config.static));

// Swig locals
const _assign = require('lodash').assign;
app.use(function *(next) {
  _assign(this.state, config.app.locals, {
    flash: this.flash,
    pathname: this.request.path,
    path: app.context.generateUrl,
  });
  yield next;
});

// Auth
const passport = di.get('@auth/passport-service');

app.use(passport.initialize());
app.use(passport.session());

// Controllers/Routes
const router = di.get('@services/router');
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
