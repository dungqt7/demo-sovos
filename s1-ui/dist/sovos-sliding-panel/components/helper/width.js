"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPanelWidth = getPanelWidth;
exports.getOverlayWidth = getOverlayWidth;

var _SovosNavigation = require("../../../sovos-navigation/SovosNavigation");

function getPanelWidth(order) {
  var baseWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var navigationElement = document.getElementsByClassName(_SovosNavigation.navigationClassName)[0];
  var navWidth = navigationElement ? window.getComputedStyle(navigationElement).width : 0;
  var width = baseWidth != null ? baseWidth : "100vw - ".concat(navWidth); // The width of the sliding panel varies based on window size and should be 50px from the edge of the navigation
  // bar or 50px from the edge of the window is the navigation is hidden

  return "calc(".concat(width, " - ").concat(50 * (order + 1), "px)");
}

function getOverlayWidth(order) {
  var baseWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (order === 0) {
    return '100vw';
  }

  return getPanelWidth(order - 1, baseWidth);
}