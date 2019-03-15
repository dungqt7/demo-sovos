"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sovosButtonsGroup = _interopRequireDefault(require("../../../sovos-buttons-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderButtonsGroup = function HeaderButtonsGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;

  if (_react.default.Children.count(children) > 1) {
    return _react.default.createElement(_sovosButtonsGroup.default, {
      className: className
    }, children);
  }

  return children;
};

HeaderButtonsGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
} : {};
HeaderButtonsGroup.defautlProps = {
  className: undefined
};
var _default = HeaderButtonsGroup;
exports.default = _default;