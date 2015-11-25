'use strict';


exports = module.exports = function(di) {
  return (name) => di.get(name.toLowerCase() + '.model');
};

exports['@inject'] = ['@'];
