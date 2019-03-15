"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _SovosSlidingPanel = _interopRequireDefault(require("./SovosSlidingPanel"));

var _SovosSlidingPanelHeader = _interopRequireDefault(require("./components/SovosSlidingPanelHeader"));

var _SovosSlidingPanelHeaderActionButtons = _interopRequireDefault(require("./components/SovosSlidingPanelHeaderActionButtons"));

var _SovosSlidingPanelHeaderAdditionalButtons = _interopRequireDefault(require("./components/SovosSlidingPanelHeaderAdditionalButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderAdditionalButtons(additionalButtons) {
  if (additionalButtons) {
    return _react.default.createElement(_SovosSlidingPanelHeaderAdditionalButtons.default, null, additionalButtons);
  }

  return null;
}

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
});

var SovosReadOnlySlidingPanel = function SovosReadOnlySlidingPanel(_ref) {
  var additionalButtons = _ref.additionalButtons,
      children = _ref.children,
      onClose = _ref.onClose,
      title = _ref.title,
      className = _ref.className,
      panelProps = _objectWithoutProperties(_ref, ["additionalButtons", "children", "onClose", "title", "className"]);

  return _react.default.createElement(_SovosSlidingPanel.default, _extends({
    className: (0, _classnames.default)('sovosReadOnlySlidingPanel', className),
    onClose: onClose
  }, panelProps), _react.default.createElement(_SovosSlidingPanelHeader.default, {
    title: title
  }, _react.default.createElement(_SovosSlidingPanelHeaderActionButtons.default, null, _react.default.createElement(_SvgIcon.default, {
    className: "sovosReadOnlySlidingPanel__closeButton",
    style: {
      marginLeft: '9px',
      cursor: 'pointer'
    },
    onClick: onClose
  }, _ref2)), renderAdditionalButtons(additionalButtons)), children);
};

SovosReadOnlySlidingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.element),
  children: _propTypes.default.node.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.node,
  className: _propTypes.default.string
} : {};
SovosReadOnlySlidingPanel.defaultProps = {
  additionalButtons: undefined,
  title: '',
  className: undefined
};
var _default = SovosReadOnlySlidingPanel;
exports.default = _default;