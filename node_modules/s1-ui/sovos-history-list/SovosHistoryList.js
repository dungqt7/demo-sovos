"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  timestamp: {
    marginLeft: 'auto'
  },
  username: {
    marginLeft: 8,
    color: _sovosColors.blueMedium
  }
};
/* eslint-disable react/prop-types */

var getRowRenderer = function getRowRenderer(classes) {
  return function (_ref) {
    var username = _ref.username,
        action = _ref.action,
        timestamp = _ref.timestamp,
        timeLabel = _ref.timeLabel;
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: (0, _classnames.default)('sovosHistoryListRow__username', classes.username)
    }, username), _react.default.createElement("span", {
      className: "sovosHistoryList__action"
    }, action), _react.default.createElement("span", {
      className: (0, _classnames.default)('sovosHistoryListRow__timestamp', classes.timestamp)
    }, timeLabel || timestamp));
  };
};
/* eslint-enable react/prop-types */


var SovosHistoryList = function SovosHistoryList(_ref2) {
  var data = _ref2.data,
      classes = _ref2.classes,
      className = _ref2.className,
      SovosListClasses = _ref2.SovosListClasses,
      listProps = _objectWithoutProperties(_ref2, ["data", "classes", "className", "SovosListClasses"]);

  return _react.default.createElement(_index.SovosList, _extends({}, listProps, {
    classes: SovosListClasses,
    className: (0, _classnames.default)('sovosHistoryList', className),
    data: data,
    rowRenderer: getRowRenderer(classes)
  }));
};

SovosHistoryList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Array of entries to be rendered. Each entry should contain username, action, timestamp and optional time label.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    username: _propTypes.default.string.isRequired,
    action: _propTypes.default.string.isRequired,
    timestamp: _propTypes.default.number.isRequired,
    timeLabel: _propTypes.default.string
  })).isRequired,

  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes.default.func,
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  SovosListClasses: _propTypes.default.object
} : {};
SovosHistoryList.defaultProps = {
  className: undefined,
  sortFunction: function sortFunction(e1, e2) {
    return e1.timestamp - e2.timestamp;
  },
  SovosListClasses: undefined
};
SovosHistoryList.displayName = 'HistoryList';

var _default = (0, _styles.withStyles)(styles)(SovosHistoryList);

exports.default = _default;