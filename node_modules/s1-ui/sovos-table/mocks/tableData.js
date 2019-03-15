"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rows = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var columns = [{
  title: 'column 1',
  id: 1,
  component: function component(_ref) {
    var content = _ref.content;
    return _react.default.createElement("div", null, content.value1);
  }
}, {
  title: 'column 2',
  id: 2,
  component: function component(_ref2) {
    var content = _ref2.content;
    return _react.default.createElement("div", null, content.value2);
  }
}];
exports.columns = columns;
var rows = [{
  value1: 1,
  value2: 1
}, {
  value1: 2,
  value2: 2
}, {
  value1: 3,
  value2: 3
}];
/* eslint-enable react/prop-types */

exports.rows = rows;