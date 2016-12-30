;(function () {
  define(['./LargeLocalStorage'], function (lls) {
    // console.log('lls', lls);
    // var storage = new lls({size: 100 * 1024 * 1024});
    if (typeof exports === 'object') {
      module.exports = lls;
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return lls;
      });
    } else {
      this.lls = lls;
    }
  });
}).call(this);
