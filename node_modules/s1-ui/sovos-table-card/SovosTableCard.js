"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _styles = require("@material-ui/core/styles");

var _reactHelpers = require("../utils/reactHelpers");

var _sovosToolbar = require("../sovos-toolbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    paddingBottom: 15
  },
  tableContainer: {
    padding: '10px 5px 0px'
  }
};

var SovosTableCard = function SovosTableCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      style = _ref.style;
  var toolbar = (0, _reactHelpers.findChildByType)(children, _sovosToolbar.SovosToolbar);
  var childrenToKeep = (0, _reactHelpers.filterOutChildrenByType)(children, _sovosToolbar.SovosToolbar);
  return _react.default.createElement(_Card.default, {
    className: (0, _classnames.default)('sovosTableCard', className, classes.root),
    style: style
  }, toolbar, _react.default.createElement("div", {
    className: classes.tableContainer
  }, childrenToKeep));
};

SovosTableCard.propTypes = process.env.NODE_ENV !== "production" ? {
  /** SovosToolbar and mui Table. */
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  style: _propTypes.default.object
} : {};
SovosTableCard.defaultProps = {
  className: undefined,
  style: undefined
};
SovosTableCard.displayName = 'TableCard';

var _default = (0, _styles.withStyles)(styles)(SovosTableCard);

exports.default = _default;