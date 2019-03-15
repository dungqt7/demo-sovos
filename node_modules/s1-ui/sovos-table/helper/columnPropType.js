"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnPropType = _propTypes.default.shape({
  alignment: _propTypes.default.oneOf(['center', 'left', 'right']),
  component: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element, _propTypes.default.func]),
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.oneOf(['greedy', 'noWrap']), _propTypes.default.string, _propTypes.default.number])
});

var _default = columnPropType;
exports.default = _default;