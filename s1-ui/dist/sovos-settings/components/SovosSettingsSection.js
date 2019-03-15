"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _SovosSettingsTitle = _interopRequireDefault(require("./SovosSettingsTitle"));

var _SovosSettingsSubtitle = _interopRequireDefault(require("./SovosSettingsSubtitle"));

var _sovosColors = require("../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px 25px 20px',
    position: 'relative',
    '&:last-child $divider': {
      display: 'none'
    }
  },
  header: {},
  divider: {
    background: 'transparent',
    color: 'transparent',
    border: ".5px solid ".concat((0, _colorManipulator.fade)(_sovosColors.black, 0.05)),
    margin: 0,
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20
  },
  '@media screen and (min-width: 60em)': {
    root: {
      flexDirection: 'row'
    },
    header: {
      boxSizing: 'inherit',
      flex: '1 1 33.337%',
      marginRight: 10
    }
  }
};

function getSectionElements(children, isHeader) {
  return _react.default.Children.toArray(children).filter(function (c) {
    return isHeader === [_SovosSettingsTitle.default, _SovosSettingsSubtitle.default].includes(c.type);
  });
}
/**
 * *SovosSettingsSection* contains information about the settings section
 *
 */


var SovosSettingsSection = function SovosSettingsSection(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosSettingsSection', classes.root)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosSettingsSection__header', classes.header)
  }, getSectionElements(children, true)), getSectionElements(children, false), _react.default.createElement("hr", {
    className: classes.divider
  }));
};

SovosSettingsSection.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSettingsSection);

exports.default = _default;