'use strict';


const knexFactory = require('knex');
const bookshelfFactory = require('bookshelf');

exports = module.exports = function(config) {
  const knex = knexFactory(config.knex);
  const bookshelf = bookshelfFactory(knex);

  // bookshelf.plugin('registry');
  // bookshelf.plugin('virtuals');
  // bookshelf.plugin('visibility');

  return bookshelf;
};

exports['@inject'] = ['config'];
