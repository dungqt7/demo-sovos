"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _styles = require("@material-ui/core/styles");

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _SovosCheckbox = require("./SovosCheckbox");

var _sovosEnterprise = _interopRequireDefault(require("../themes/sovos-enterprise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var testTheme = (0, _styles.createMuiTheme)(_sovosEnterprise.default);

function renderCheckbox(props) {
  var checkboxProps = _objectSpread({
    checked: true
  }, props);

  return (0, _enzyme.shallow)(_react.default.createElement(_SovosCheckbox.UnstyledSovosCheckbox, _extends({}, checkboxProps, {
    onChange: jest.fn(),
    theme: testTheme,
    classes: {}
  })));
}

describe('SovosCheckbox', function () {
  it('should render a Checked icon on render', function () {
    var enzymeWrapper = renderCheckbox();
    expect(enzymeWrapper.find(_CheckBox.default)).toExist();
  });
  it('should render an outlined icon on render', function () {
    var enzymeWrapper = renderCheckbox({
      checked: false
    });
    expect(enzymeWrapper.find(_CheckBoxOutlineBlank.default)).toExist();
  });
  it('should render with blue as the color with no color specified', function () {
    var enzymeWrapper = renderCheckbox();
    expect(enzymeWrapper.find(_CheckBox.default).prop('style')).toEqual({
      color: testTheme.palette.primary.main
    });
  });
  it('should render with purple as the color with no color specified', function () {
    var enzymeWrapper = renderCheckbox({
      color: 'secondary'
    });
    expect(enzymeWrapper.find(_CheckBox.default).prop('style')).toEqual({
      color: testTheme.palette.secondary.main
    });
  });
  it('should render with gray as the color with disabled=true passed in', function () {
    var enzymeWrapper = renderCheckbox({
      disabled: true
    });
    expect(enzymeWrapper.find(_CheckBox.default).prop('style')).toEqual({
      color: testTheme.palette.action.disabled
    });
  });
});