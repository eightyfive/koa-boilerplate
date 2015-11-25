'use strict';


exports = module.exports = function(passport, config) {
  const self = {
    loginAction: function *() {
      this.body = yield this.render('auth/login');
    },

    logoutAction: function *() {
      this.logout();
      this.redirect('/login');
    },

    facebookAction: passport.authenticate('facebook', {scope: config.facebook.scope}),
    facebookCallbackAction: function*(next) {
      yield passport.authenticate('facebook', self.authenticateCallback(this)).call(this, next);
    },

    googleAction: passport.authenticate('google', {scope: config.google.scope}),
    googleCallbackAction: function *(next) {
      yield passport.authenticate('google', self.authenticateCallback(this)).call(this, next);
    },

    isAuthenticated: function *(next) {
      const login = '/login';
      const user = this.passport.user;

      if (user && this.path === login) {
        // this.redirect(/*...*/);
      } else if (!user && this.path !== login) {
        this.redirect(login);
      } else {
        yield next;
      }
    },

    authenticateCallback: function(ctx) {
      return function*(err, user) {
        if (err) throw err;
        if (!user) {
          ctx.flash = {error: 'Email not found'};
          ctx.redirect('/login');
        } else {
          yield ctx.login(user);
          ctx.redirect('/');
        }
      };
    },
  };

  return self;
};

exports['@inject'] = ['@auth/passport-service', 'config'];
