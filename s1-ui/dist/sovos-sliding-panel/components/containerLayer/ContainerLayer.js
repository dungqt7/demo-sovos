"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../../../themes/sovos-colors");

var _width = require("../helper/width");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    backgroundColor: _sovosColors.neutralWhite,
    boxSizing: 'border-box'
  },
  '@media (max-width: 1050px)': {
    root: {
      left: '50px !important',
      minWidth: '974px !important'
    }
  }
};

var ContainerLayer = function ContainerLayer(_ref) {
  var order = _ref.order,
      zIndex = _ref.zIndex,
      children = _ref.children,
      baseWidth = _ref.baseWidth,
      classes = _ref.classes;

  var handleContainerClick = function handleContainerClick(event) {
    event.stopPropagation();
  };

  var rootStyle = {
    zIndex: zIndex,
    width: (0, _width.getPanelWidth)(order, baseWidth)
  };
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosSlidingPanelContainer', classes.root),
    style: rootStyle,
    onClick: handleContainerClick
  }, children);
};

ContainerLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  zIndex: _propTypes.default.number.isRequired,
  children: _propTypes.default.node.isRequired,
  order: _propTypes.default.number.isRequired,
  baseWidth: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired
} : {};
ContainerLayer.defaultProps = {
  baseWidth: undefined
};

var _default = (0, _styles.withStyles)(styles)(ContainerLayer);

exports.default = _default;