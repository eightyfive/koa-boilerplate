'use strict';


exports = module.exports = function() {
  return {
    editAction: function(self) {
      return function *() {
        let resource = self.getResource(this.state);

        const flash = {};
        const isCreate = this.method === 'POST';
        const isUpdate = this.method === 'PUT';

        if (isCreate || isUpdate) {
          const data = this.req.body;

          try {
            if (isCreate) {
              resource = yield self.createResource(data, this.state);
            } else {
              resource = yield self.updateResource(resource.id, data);
            }
          } catch (err) {
            flash.errors = this.Errors.fromJoi(err.details);
            flash.prev_data = data;
          }

          let url;
          if (flash.errors) {
            url = isCreate ? self.getCreateUrl(this) : self.getUpdateUrl(resource.id, this.state, this);
          } else {
            url = self.getSuccessUrl(this.state, this);
            flash.toaster = {
              type: 'success',
              message: this.__(self.getSuccessMsg(isCreate)),
            };
          }

          if (this.state.pjax) {
            flash.pjaxUrl = url;
          }
          this.flash = flash;
          this.redirect(url);
        } else {
          if (this.state.pjax && this.flash.pjaxUrl) {
            this.state.pjax.url = this.flash.pjaxUrl;
          }

          if (!resource) {
            const prevData = this.flash.prev_data || {};
            resource = self.forgeResource(prevData);
          }

          const renderData = yield self.getTemplateData(resource, this.state);

          this.body = yield this.render(self.getTemplate(), renderData);
        }
      };
    },

    //
    // API to implement
    //

    // getResource: function(state) {
    //   throw new Error('Abstract method not implemented');
    // },

    // createResource: function(data, state) {
    //   throw new Error('Abstract method not implemented');
    // },

    // updateResource: function(id, data) {
    //   throw new Error('Abstract method not implemented');
    // },

    // forgeResource: function(data) {
    //   throw new Error('Abstract method not implemented');
    // },

    // getCreateUrl: function(state) {
    //   throw new Error('Abstract method not implemented');
    // },

    // getUpdateUrl: function(id, state) {
    //   throw new Error('Abstract method not implemented');
    // },

    // getSuccessUrl: function(state) {
    //   throw new Error('Abstract method not implemented');
    // },

    // getSuccessMsg: function(isCreate) {
    //   throw new Error('Abstract method not implemented');
    // },

    // getTemplate: function() {
    //   throw new Error('Abstract method not implemented');
    // },

    // getTemplateData: function *(state) {
    //   throw new Error('Abstract method not implemented');
    // },
  };
};
