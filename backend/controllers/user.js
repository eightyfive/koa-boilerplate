'use strict';


const _sortBy = require('lodash').sortBy;
const _assign = require('lodash').assign;

exports = module.exports = function(ResourceCtrl, sUser) {
  const self = {};

  return _assign(self, {
    indexAction: function *() {
      let users = yield sUser.findAll();
      users = _sortBy(users.toJSON(), 'updated_at').reverse();

      this.body = yield this.render('user/list', {
        users: users,
      });
    },
    getResource: function(state) {
      return state.user;
    },

    createResource: function(data) {
      return sUser.create(data);
    },

    updateResource: function(id, data) {
      return sUser.update(id, data);
    },

    forgeResource: function(data) {
      return sUser.forge(data);
    },

    getCreateUrl: function(ctx) {
      return ctx.path('user-create');
    },

    getUpdateUrl: function(id, state, ctx) {
      return ctx.path('user-update', state.user.id);
    },

    getSuccessUrl: function(state, ctx) {
      return ctx.path('user-list', state.user.id);
    },

    getSuccessMsg: function(isCreate) {
      return 'success.user-' + (isCreate ? 'create' : 'update');
    },

    getTemplate: function() {
      return 'user/edit';
    },

    getTemplateData: function *(user) {
      return {
        user: user.toJSON(),
      };
    },

    editAction: ResourceCtrl.editAction(self),

    paramUser: function *(id, next) {
      try {
        this.state.user = yield sUser.find(id);
      } catch (err) {
        this.status = 404;
        return this.status;
      }

      yield next;
    },
  });
};

exports['@inject'] = ['@controllers/resource', '@auth/user-service'];
