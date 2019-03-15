"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _reactHelpers = require("../utils/reactHelpers");

var _SovosDialogActions = _interopRequireDefault(require("./components/SovosDialogActions"));

var _SovosDialogContent = _interopRequireDefault(require("./components/SovosDialogContent"));

var _SovosDialogTitle = _interopRequireDefault(require("./components/SovosDialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SMALL = 'small';
var MEDIUM = 'medium';
var LARGE = 'large';

var getWidthStyle = function getWidthStyle(width) {
  switch (width) {
    case SMALL:
      return {
        maxWidth: '400px'
      };

    case MEDIUM:
      return {
        minWidth: '600px',
        maxWidth: '700px'
      };

    case LARGE:
      return {
        minWidth: '600px',
        maxWidth: '80%',
        width: '80%'
      };

    default:
      return {
        width: width
      };
  }
};

var SovosDialog = function SovosDialog(_ref) {
  var children = _ref.children,
      className = _ref.className,
      width = _ref.width,
      PaperProps = _ref.PaperProps,
      dialogProps = _objectWithoutProperties(_ref, ["children", "className", "width", "PaperProps"]);

  var title = (0, _reactHelpers.findChildByType)(children, _SovosDialogTitle.default);

  var content = (0, _reactHelpers.findChildByType)(children, _SovosDialogContent.default) || _react.default.createElement(_SovosDialogContent.default, null, (0, _reactHelpers.filterOutChildrenByType)(children, _SovosDialogTitle.default, _SovosDialogActions.default));

  var actions = (0, _reactHelpers.findChildByType)(children, _SovosDialogActions.default);
  return _react.default.createElement(_Dialog.default, _extends({}, dialogProps, {
    className: (0, _classnames.default)('sovosDialog', className),
    PaperProps: _objectSpread({}, PaperProps, {
      style: _objectSpread({
        padding: 20
      }, PaperProps.style, getWidthStyle(width))
    })
  }), title, content, actions);
};

SovosDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,

  /**
   * Props passed the MuiDialog paper component
   */
  PaperProps: _propTypes.default.object,

  /**
   * Width, can be 'small', 'medium', 'large' or an arbitrary number.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.oneOf([SMALL, MEDIUM, LARGE]), _propTypes.default.number])
} : {};
SovosDialog.defaultProps = {
  className: undefined,
  PaperProps: {},
  width: MEDIUM
};
SovosDialog.displayName = 'Dialog';
var _default = SovosDialog;
exports.default = _default;