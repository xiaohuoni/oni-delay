"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function delay(ms) {
  return new _promise2.default(function (resolve) {
    setTimeout(resolve, ms);
  });
}
module.exports = delay;