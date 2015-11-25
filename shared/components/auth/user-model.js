'use strict';


const Joi = require('joi');

exports = module.exports = function(BaseModel) {
  return BaseModel.extend({
    tableName: 'users',

    validate: {
      name: Joi.string().required(),
      languages: Joi.array().unique().required(),
      education: Joi.string().required(),
      experience: Joi.string().optional(),
    },
  });
};

exports['@inject'] = ['base.model'];
