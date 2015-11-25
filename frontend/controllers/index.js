'use strict';


module.exports = function() {
  return {
    homeAction: function *homeAction() {
      this.body = yield this.render('index/home');
    },
  };
};
