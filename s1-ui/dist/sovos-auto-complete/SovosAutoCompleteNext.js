"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AutoComplete = _interopRequireDefault(require("../internals/auto-complete/AutoComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosAutoComplete = function SovosAutoComplete(props) {
  return _react.default.createElement(_AutoComplete.default, props);
};

SovosAutoComplete.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  classes: _propTypes.default.object,
  suggestions: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  label: _propTypes.default.string
} : {};
SovosAutoComplete.defaultProps = {
  classes: undefined,
  className: undefined,
  value: undefined,
  label: undefined
};
var _default = SovosAutoComplete;
exports.default = _default;