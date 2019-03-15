"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.mergeDeep = mergeDeep;
exports.equalsDeep = equalsDeep;
exports.withoutKeys = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-restricted-syntax */
var withoutKeys = function withoutKeys(keys, propsObject) {
  var result = Object.assign({}, propsObject);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      delete result[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */


exports.withoutKeys = withoutKeys;

function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */


function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}

function equalsDeep(x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  } // after this just checking type of one would be enough


  if (x.constructor !== y.constructor) {
    return false;
  } // if they are functions, they should exactly refer to same one (because of closures)


  if (x instanceof Function) {
    return x === y;
  } // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)


  if (x instanceof RegExp) {
    return x === y;
  }

  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  } // if they are dates, they must had equal valueOf


  if (x instanceof Date) {
    return false;
  } // if they are strictly equal, they both need to be object at least


  if (!(x instanceof Object)) {
    return false;
  }

  if (!(y instanceof Object)) {
    return false;
  } // recursive object equality check


  var p = Object.keys(x);
  return Object.keys(y).every(function (i) {
    return p.indexOf(i) !== -1;
  }) && p.every(function (i) {
    return equalsDeep(x[i], y[i]);
  });
}
/* eslint-enable no-restricted-syntax */