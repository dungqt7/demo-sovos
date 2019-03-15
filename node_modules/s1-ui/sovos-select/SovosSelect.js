"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    '&:focus': {
      backgroundColor: 'inherit'
    }
  },
  select: {
    '&:focus': {
      backgroundColor: 'inherit'
    }
  },
  selectMenu: {},
  disabled: {},
  icon: {}
};

var SovosSelect = function SovosSelect(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      selectProps = _objectWithoutProperties(_ref, ["classes", "className"]);

  return _react.default.createElement(_Select.default, _extends({}, selectProps, {
    autoWidth: true,
    MenuProps: {
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    },
    disableUnderline: true,
    classes: classes,
    className: (0, _classnames.default)('sovosSelect', className)
  }));
};

SovosSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosSelect.defaultProps = {
  className: undefined
};
SovosSelect.displayName = 'Select';

var _default = (0, _styles.withStyles)(styles)(SovosSelect);

exports.default = _default;