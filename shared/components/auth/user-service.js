'use strict';


const _keys = require('lodash').keys;
const _pick = require('lodash').pick;
const _omit = require('lodash').omit;


exports = module.exports = function(User) {
  const self = {
    find: function(id) {
      return User.findOne({'id': id});
    },

    update: function(id, data, options) {
      let _options = options;
      _options = options || {};
      _options.id = id;

      let _data = data;
      _data = this.sanitizeData(_data);
      _data.id = id;

      return User.update(_data, _options);
    },

    create: function(data, options) {
      const _data = this.sanitizeData(data);
      return User.create(_data, options);
    },

    sanitizeData: function(data) {
      let _data = data;
      _data = _pick(_data, _keys(User.prototype.validate));
      _data = _omit(_data, function(val) {
        return !!!val;
      });

      return _data;
    },

    findOneByEmail: function(email) {
      return User.findOne({'email': email});
    },

    verifyPassportUser: function(token, tokenSecret, profile, done) {
      const email = profile.emails[0].value;

      self.findOneByEmail(email).then(function(user) {
        done(null, user ? user : false);
      });
    },
  };

  return self;
};

exports['@inject'] = ['@auth/user-model'];
