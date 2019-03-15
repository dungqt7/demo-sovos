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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    padding: 40
  },
  '@media screen and (min-width: 60em)': {
    root: {
      boxSizing: 'inherit',
      flex: '1 1 66.663%',
      marginLeft: 10,
      minWidth: 0
    }
  }
};
/**
 * *SovosSettingsCard* contains all the elements that are to be displayed there
 */

var SovosSettingsCard = function SovosSettingsCard(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement(_Card.default, {
    className: (0, _classnames.default)('sovosSettingsCard', classes.root)
  }, children);
};

SovosSettingsCard.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSettingsCard);

exports.default = _default;