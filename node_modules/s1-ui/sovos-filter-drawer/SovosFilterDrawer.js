"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SovosDrawer = _interopRequireDefault(require("../sovos-drawer/SovosDrawer"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClearButtonChildren = 'Clear';

var SovosFilterDrawer = function SovosFilterDrawer(_ref) {
  var SaveButtonProps = _ref.SaveButtonProps,
      ClearButtonProps = _ref.ClearButtonProps,
      onClose = _ref.onClose,
      open = _ref.open,
      children = _ref.children,
      title = _ref.title,
      className = _ref.className,
      style = _ref.style;
  return _react.default.createElement(_SovosDrawer.default, {
    title: title,
    PrimaryButtonProps: {
      backgroundColor: _sovosColors.purple,
      color: _sovosColors.neutralWhite,
      onClick: SaveButtonProps.onClick,
      children: SaveButtonProps.children,
      className: 'sovosFilterDrawer__saveButton'
    },
    SecondaryButtonProps: {
      backgroundColor: _sovosColors.neutralWhite,
      color: _sovosColors.purple,
      onClick: ClearButtonProps.onClick,
      children: ClearButtonProps.children || defaultClearButtonChildren,
      className: 'sovosFilterDrawer__clearButton'
    },
    onClose: onClose,
    open: open,
    className: (0, _classnames.default)('sovosFilterDrawer', className),
    style: style
  }, children);
};

SovosFilterDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes.default.string,
  SaveButtonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func.isRequired,
    children: _propTypes.default.node
  }).isRequired,
  ClearButtonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func.isRequired,
    children: _propTypes.default.node
  }).isRequired,
  onClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
SovosFilterDrawer.defaultProps = {
  title: 'Filters',
  className: undefined,
  style: undefined
};
SovosFilterDrawer.displayName = 'FilterDrawer';
var _default = SovosFilterDrawer;
exports.default = _default;