"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _HeaderButtonsGroup = _interopRequireDefault(require("./headerButtonsGroup/HeaderButtonsGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosSlidingPanelHeaderActionButtons = function SovosSlidingPanelHeaderActionButtons(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement(_HeaderButtonsGroup.default, {
    className: (0, _classnames.default)(className, 'sovosSlidingPanelHeaderActionButtons')
  }, children);
};

SovosSlidingPanelHeaderActionButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
} : {};
SovosSlidingPanelHeaderActionButtons.defaultProps = {
  className: undefined
};
var _default = SovosSlidingPanelHeaderActionButtons;
exports.default = _default;