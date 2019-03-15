"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    '& > button': {
      margin: '0 5px',
      '&:first-child': {
        marginLeft: 0
      },
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  center: {
    justifyContent: 'center'
  }
};

var SovosButtonsGroup = function SovosButtonsGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      align = _ref.align,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosButtonGroup', classes.root, classes[align], className),
    style: style
  }, children);
};
/**
 * A group of buttons that will be next to each other with 10px of spacing between them except the first and the last one
 * that won't have margin on the edges. It also exposes an align attribute to show the buttons on the left, center or right
 * section of its parent.
 * @type {{align, style: shim}}
 */


SovosButtonsGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Alignment of the buttons on the button group.
   */
  align: _propTypes.default.oneOf(['right', 'left', 'center']),

  /**
   * @ignore
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]).isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * Style of the buttons container
   */
  style: _propTypes.default.object,
  className: _propTypes.default.string
} : {};
SovosButtonsGroup.defaultProps = {
  align: 'left',
  style: undefined,
  className: undefined
};
SovosButtonsGroup.displayName = 'ButtonsGroup';

var _default = (0, _styles.withStyles)(styles)(SovosButtonsGroup);

exports.default = _default;