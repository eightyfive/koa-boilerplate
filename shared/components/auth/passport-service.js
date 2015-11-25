'use strict';


const passport = require('koa-passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports = module.exports = function(sUser, config) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    sUser.find(id).then(function(user) {
      done(null, user);
    });
  });

  passport.use(
    new FacebookStrategy({
      clientID: config.facebook.appId,
      clientSecret: config.facebook.appSecret,
      callbackURL: config.facebook.callbackURL,
      profileFields: config.facebook.profileFields,
    },
    sUser.verifyPassportUser
  ));

  passport.use(
    new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
    },
    sUser.verifyPassportUser
  ));

  return passport;
};

exports['@inject'] = ['@auth/user-service', 'config'];
