'use strict';


const _merge = require('lodash').merge;

const prod = require('./prod.json');
const dev = require('./dev.json');

module.exports = function(env) {
  return (env === 'development') ? _merge({}, prod, dev) : prod;
};
