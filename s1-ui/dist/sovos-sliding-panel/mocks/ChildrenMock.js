"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildrenMock = function ChildrenMock(props) {
  return _react.default.createElement("div", {
    id: "childrenMock"
  }, _react.default.createElement(_Button.default, {
    id: "closeChildrenMock",
    onClick: props.onCloseParentSlide
  }, "Close"), _react.default.createElement(_Button.default, {
    id: "forcedCloseChildrenMock",
    onClick: props.onForcedCloseParentSlide
  }, "Forced Close"));
};

ChildrenMock.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseParentSlide: _propTypes.default.func,
  onForcedCloseParentSlide: _propTypes.default.func
} : {};
ChildrenMock.defaultProps = {
  onCloseParentSlide: null,
  onForcedCloseParentSlide: null
};
var _default = ChildrenMock;
exports.default = _default;