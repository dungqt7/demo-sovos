"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _spacing = _interopRequireDefault(require("@material-ui/core/styles/spacing"));

var _common = _interopRequireDefault(require("@material-ui/core/colors/common"));

var _sovosColors = require("./sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = _common.default.white;
var _default = {
  spacing: _spacing.default,
  typography: {
    fontFamily: 'Roboto, Arial',
    useNextVariants: true
  },
  palette: {
    primary: {
      light: _sovosColors.grayMedium,
      main: _sovosColors.primaryBlue,
      dark: _sovosColors.primaryNavy
    },
    secondary: {
      main: _sovosColors.purple,
      contrastText: _sovosColors.neutralWhite
    },
    text: {
      primary: _sovosColors.textColor,
      disabled: (0, _colorManipulator.fade)(_sovosColors.textColor, 0.3)
    },
    background: {
      default: white
    },
    action: {
      disabled: (0, _colorManipulator.fade)(_sovosColors.textColor, 0.3)
    },
    neutralColors: {
      white: _sovosColors.neutralWhite,
      light: _sovosColors.grayLight,
      normal: _sovosColors.grayMedium,
      dark: _sovosColors.grayDark,
      black: _sovosColors.black
    },
    semanticColors: {
      good: {
        light: _sovosColors.blueLight,
        normal: _sovosColors.blueMedium,
        dark: _sovosColors.blueDark
      },
      warning: {
        light: _sovosColors.yellowLight,
        normal: _sovosColors.yellowMedium,
        dark: _sovosColors.yellowDark
      },
      danger: {
        light: _sovosColors.redLight,
        normal: _sovosColors.redMedium,
        dark: _sovosColors.redDark
      }
    }
  }
};
exports.default = _default;