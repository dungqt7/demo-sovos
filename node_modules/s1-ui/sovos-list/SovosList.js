"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    background: 'white',
    padding: '8px 16px'
  },
  row: {
    fontSize: 13,
    padding: 0,
    height: 50
  },
  rowBorder: {
    borderBottom: "solid 1px ".concat(_sovosColors.grayLight)
  }
};

var renderRows = function renderRows(rowRenderer, data, classes) {
  return data.map(function (entry, index) {
    return _react.default.createElement(_ListItem.default, {
      key: index,
      className: (0, _classnames.default)('sovosList__item', classes.row, _defineProperty({}, classes.rowBorder, index < data.length - 1))
    }, rowRenderer(entry));
  });
};

var SovosList = function SovosList(_ref) {
  var data = _ref.data,
      sortFunction = _ref.sortFunction,
      classes = _ref.classes,
      className = _ref.className,
      rowRenderer = _ref.rowRenderer,
      props = _objectWithoutProperties(_ref, ["data", "sortFunction", "classes", "className", "rowRenderer"]);

  if (typeof sortFunction === 'function') {
    data = data.slice().sort(sortFunction);
  }

  var rows = renderRows(rowRenderer, data, classes);
  return _react.default.createElement(_List.default, _extends({
    className: (0, _classnames.default)('sovosList', classes.root, className)
  }, props), rows);
};

SovosList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Data provided to the getRows function.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape).isRequired,

  /**
   * Function used to get the row items.
   */
  rowRenderer: _propTypes.default.func.isRequired,

  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes.default.func,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosList.defaultProps = {
  sortFunction: undefined,
  className: undefined
};
SovosList.displayName = 'List';

var _default = (0, _styles.withStyles)(styles)(SovosList);
/* eslint-enable react/no-array-index-key */


exports.default = _default;