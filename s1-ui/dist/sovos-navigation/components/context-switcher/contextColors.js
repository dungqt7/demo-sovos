"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sovosColors = require("../../../themes/sovos-colors");

var contextColors = {
  production: {
    background: _sovosColors.green,
    icon: _sovosColors.green,
    text: _sovosColors.neutralWhite
  },
  test: {
    background: _sovosColors.pink,
    icon: _sovosColors.pink,
    text: _sovosColors.neutralWhite
  },
  default: {
    background: _sovosColors.neutralWhite,
    icon: _sovosColors.grayMedium,
    text: 'black'
  }
};
var _default = contextColors;
exports.default = _default;