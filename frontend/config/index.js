'use strict';


const path = require('path');
const _merge = require('lodash').merge;

const cfg = require('../../shared/config/index');
const dev = require('./dev.json');
const prod = require('./prod.json');


module.exports = function(env) {
  const cfg1 = cfg(env);
  const cfg2 = (env === 'development') ? _merge({}, prod, dev) : prod;
  const config = _merge({}, cfg1, cfg2);
  const approot = path.resolve(__dirname, '../');

  config.static = path.resolve(approot, config.static);
  config.swig.root = path.resolve(approot, config.swig.root);
  config.error.template = path.resolve(approot, config.error.template);

  return config;
};
