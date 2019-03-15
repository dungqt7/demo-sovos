"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapChildToParentPropsFactory = exports.getChildContents = exports.filterOutChildrenByType = exports.findChildrenByType = exports.findChildByType = void 0;

var _react = require("react");

/**
 * Finds the first child in a collection of React children that matches the type
 * @param {React.ReactNode} children
 * @param {string | React.ComponentClass} type
 * @return {React.ReactNode | undefined}
 */
var findChildByType = function findChildByType(children, type) {
  return _react.Children.toArray(children).find(function (child) {
    return child.type === type;
  });
};

exports.findChildByType = findChildByType;

var findChildrenByType = function findChildrenByType(children, type) {
  return _react.Children.toArray(children).filter(function (child) {
    return child.type === type;
  });
};
/**
 * Modifies a collection of React children by omitting children of specific type(s)
 * @param {React.ReactNode} children
 * @param {...string | ...React.ComponentClass} type
 * @return {[React.ReactNode]}
 */


exports.findChildrenByType = findChildrenByType;

var filterOutChildrenByType = function filterOutChildrenByType(children) {
  for (var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    types[_key - 1] = arguments[_key];
  }

  return _react.Children.toArray(children).filter(function (child) {
    return !types.includes(child.type);
  });
};
/**
 * Extracts contents from a child of a specific type from a collection of React children
 * @param {React.ReactNode} children
 * @param {string | React.ComponentClass} type
 * @return {React.ReactNode | undefined}
 */


exports.filterOutChildrenByType = filterOutChildrenByType;

var getChildContents = function getChildContents(children, type) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var child = findChildByType(children, type);
  return child !== undefined ? child.props.children : defaultValue;
};

exports.getChildContents = getChildContents;

var mapChildToParentPropsFactory = function mapChildToParentPropsFactory(type, map) {
  return function (children) {
    var child = findChildByType(children, type);
    if (!child) return {};
    var childPropKeys = Object.keys(child.props);
    return Object.keys(map).reduce(function (parentProps, childPropKey) {
      if (childPropKeys.includes(childPropKey)) {
        parentProps[map[childPropKey]] = child.props[childPropKey];
      }

      return parentProps;
    }, {});
  };
};

exports.mapChildToParentPropsFactory = mapChildToParentPropsFactory;