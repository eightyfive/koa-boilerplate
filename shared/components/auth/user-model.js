'use strict';


const Joi = require('joi');

exports = module.exports = function(BaseModel) {
  return BaseModel.extend({
    tableName: 'users',

    validate: {
      email: Joi.string().required(),
      // ... name, username...
    },
  });
};

exports['@inject'] = ['base.model'];
