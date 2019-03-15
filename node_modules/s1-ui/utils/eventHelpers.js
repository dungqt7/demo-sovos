"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEnter = void 0;

/* eslint-disable import/prefer-default-export */

/**
 * Check if event key is Enter
 * @param {object} event
 */
var isEnter = function isEnter(event) {
  return event.key === 'Enter';
};
/* eslint-enable import/prefer-default-export */


exports.isEnter = isEnter;