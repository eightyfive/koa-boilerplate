'use strict';


const koaSwig = require('koa-swig');
const extras = require('swig-extras');
const numeral = require('numeral');
const moment = require('moment');
const str = require('string');
const _chunk = require('lodash').chunk;
const _assign = require('lodash').assign;

const filters = {
  numeral: function num(input, format) {
    const frmt = format || '0,0';
    return numeral(input).format(frmt);
  },
  truncate: extras.filters.truncate,
  markdown: extras.filters.markdown,
  humanize: function(inp) { return str(inp).humanize().s; },
  capitalize: function(inp) { return str(inp).capitalize().s; },
  batch: function(arr, size) {
    const avg = Math.ceil(arr.length / size);
    return _chunk(arr, avg);
  },
  moment: function(input, fmt) {
    return moment(input).format(fmt);
  },
};

exports = module.exports = function(config) {
  const settings = _assign({}, config.swig, {filters});
  return koaSwig(settings);
};

exports['@inject'] = ['config'];
