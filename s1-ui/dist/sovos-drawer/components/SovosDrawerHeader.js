"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosRaisedButton = _interopRequireDefault(require("../../sovos-raised-button"));

var _sovosButtonsGroup = _interopRequireDefault(require("../../sovos-buttons-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultPrimaryText = 'Apply';
var defaultSecondaryText = 'Cancel';
var styles = {
  root: {
    padding: '10px 10px',
    boxShadow: '0 0 1px gray',
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 0,
    flexWrap: 'wrap'
  },
  title: {
    flex: '1 1 auto',
    marginBottom: 10,
    paddingTop: 4,
    '& h2': {
      margin: 0,
      fontSize: '22px',
      fontWeight: 400,
      flex: '1 1 auto'
    }
  }
};

var SovosDrawerHeader = function SovosDrawerHeader(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      headerSize = _ref.headerSize,
      PrimaryButtonProps = _ref.PrimaryButtonProps,
      SecondaryButtonProps = _ref.SecondaryButtonProps;

  var primaryChildren = PrimaryButtonProps.children,
      primaryColor = PrimaryButtonProps.color,
      primaryClassName = PrimaryButtonProps.className,
      primaryProps = _objectWithoutProperties(PrimaryButtonProps, ["children", "color", "className"]);

  var secondaryChildren = SecondaryButtonProps.children,
      secondaryColor = SecondaryButtonProps.color,
      secondaryClassName = SecondaryButtonProps.className,
      secondaryProps = _objectWithoutProperties(SecondaryButtonProps, ["children", "color", "className"]);

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosDrawerHeader', classes.root),
    style: {
      minWidth: headerSize
    }
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosDrawerHeader__title', classes.title)
  }, _react.default.createElement("h2", null, title)), _react.default.createElement("div", null, _react.default.createElement(_sovosButtonsGroup.default, {
    align: "left"
  }, _react.default.createElement(_sovosRaisedButton.default, _extends({
    color: secondaryColor || 'secondary',
    className: (0, _classnames.default)('sovosDrawerHeader__secondaryButton', secondaryClassName)
  }, secondaryProps), secondaryChildren || defaultSecondaryText), _react.default.createElement(_sovosRaisedButton.default, _extends({
    color: primaryColor || 'primary',
    className: (0, _classnames.default)('sovosDrawerHeader__primaryButton', primaryClassName)
  }, primaryProps), primaryChildren || defaultPrimaryText))));
};

SovosDrawerHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  title: _propTypes.default.string.isRequired,
  headerSize: _propTypes.default.number.isRequired,
  PrimaryButtonProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    onClick: _propTypes.default.func.isRequired,
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }).isRequired,
  SecondaryButtonProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    onClick: _propTypes.default.func.isRequired,
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }).isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosDrawerHeader);

exports.default = _default;