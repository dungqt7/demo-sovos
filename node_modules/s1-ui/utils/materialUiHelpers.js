"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isKnownMaterialUiColor = isKnownMaterialUiColor;

function isKnownMaterialUiColor(color) {
  //eslint-disable-line
  return ['default', 'inherit', 'primary', 'secondary'].includes(color.toLowerCase());
}