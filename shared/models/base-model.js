'use strict';

const modelBase = require('bookshelf-modelbase');

exports = module.exports = function(bookshelf) {
  return modelBase(bookshelf);
};

exports['@inject'] = ['bookshelf'];
