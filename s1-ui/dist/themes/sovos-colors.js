"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redDark = exports.redMedium = exports.redLight = exports.yellowDark = exports.yellowMedium = exports.yellowLight = exports.blueDark = exports.blueMedium = exports.blueLight = exports.grayDark = exports.grayMedium = exports.grayLight = exports.neutralWhite = exports.boxShadow = exports.borderColorWhite = exports.borderColor = exports.textColorWhiteHint = exports.textColorWhiteDisabled = exports.textColorWhiteSubtle = exports.textColorWhite = exports.textColorHint = exports.textColorDisabled = exports.textColorSubtle = exports.textColor = exports.tableAction = exports.secondaryAction = exports.primaryAction = exports.orange = exports.buttonOrange = exports.buttonBlue = exports.black = exports.aqua = exports.purple = exports.pink = exports.magenta = exports.navy = exports.green = exports.yellow = exports.primaryColorLight = exports.primaryNavy = exports.primaryBlue = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

// Primary colors
var primaryBlue = '#b2e0f3';
exports.primaryBlue = primaryBlue;
var primaryNavy = '#3F5A72'; // primaryColorLight will be deleted in version 5

exports.primaryNavy = primaryNavy;
var primaryColorLight = '#B8C3CC'; // Charts and data accents

exports.primaryColorLight = primaryColorLight;
var yellow = '#f9d460';
exports.yellow = yellow;
var green = '#51c68b';
exports.green = green;
var navy = '#283975';
exports.navy = navy;
var magenta = '#a73b8f';
exports.magenta = magenta;
var pink = '#e9668c';
exports.pink = pink;
var purple = '#6f6dbc';
exports.purple = purple;
var aqua = '#30cace';
exports.aqua = aqua;
var black = '#000000'; // Accent colors

exports.black = black;
var buttonBlue = '#14B9F1';
exports.buttonBlue = buttonBlue;
var buttonOrange = '#FF9F37'; // orange will be deleted in version 5

exports.buttonOrange = buttonOrange;
var orange = '#FF9F37';
exports.orange = orange;
var primaryAction = buttonBlue;
exports.primaryAction = primaryAction;
var secondaryAction = buttonOrange;
exports.secondaryAction = secondaryAction;
var tableAction = purple; // Text colors

exports.tableAction = tableAction;
var textColor = (0, _colorManipulator.fade)('#000', 0.9);
exports.textColor = textColor;
var textColorSubtle = (0, _colorManipulator.fade)('#000', 0.5);
exports.textColorSubtle = textColorSubtle;
var textColorDisabled = (0, _colorManipulator.fade)('#000', 0.3);
exports.textColorDisabled = textColorDisabled;
var textColorHint = (0, _colorManipulator.fade)('#000', 0.3);
exports.textColorHint = textColorHint;
var textColorWhite = '#FFF';
exports.textColorWhite = textColorWhite;
var textColorWhiteSubtle = (0, _colorManipulator.fade)('#FFF', 0.7);
exports.textColorWhiteSubtle = textColorWhiteSubtle;
var textColorWhiteDisabled = (0, _colorManipulator.fade)('#000', 0.5);
exports.textColorWhiteDisabled = textColorWhiteDisabled;
var textColorWhiteHint = (0, _colorManipulator.fade)('#000', 0.5); // Border and shadows

exports.textColorWhiteHint = textColorWhiteHint;
var borderColor = (0, _colorManipulator.fade)('#000', 0.1);
exports.borderColor = borderColor;
var borderColorWhite = (0, _colorManipulator.fade)('#FFF', 0.15);
exports.borderColorWhite = borderColorWhite;
var boxShadow = '#444'; // Neutrals

exports.boxShadow = boxShadow;
var neutralWhite = '#ffffff';
exports.neutralWhite = neutralWhite;
var grayLight = '#ebeef0';
exports.grayLight = grayLight;
var grayMedium = '#9ca8b4';
exports.grayMedium = grayMedium;
var grayDark = '#6a8195'; // Semantic good

exports.grayDark = grayDark;
var blueLight = '#daf0ff';
exports.blueLight = blueLight;
var blueMedium = '#8bcff4';
exports.blueMedium = blueMedium;
var blueDark = '#1689ce'; // Semantic warning

exports.blueDark = blueDark;
var yellowLight = '#feeabc';
exports.yellowLight = yellowLight;
var yellowMedium = '#ffbd5a';
exports.yellowMedium = yellowMedium;
var yellowDark = '#fd9332'; // Semantic Danger

exports.yellowDark = yellowDark;
var redLight = '#fedcdf';
exports.redLight = redLight;
var redMedium = '#ee534b';
exports.redMedium = redMedium;
var redDark = '#e53530';
exports.redDark = redDark;