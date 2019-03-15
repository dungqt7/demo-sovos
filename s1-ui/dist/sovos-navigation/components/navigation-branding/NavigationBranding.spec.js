"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NavigationBranding = _interopRequireDefault(require("./NavigationBranding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NavigationBranding', function () {
  it('shows correct branding product name', function () {
    var productName = 'blah';
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_NavigationBranding.default, {
      productName: productName,
      classes: {}
    }));
    var productNameElement = wrapper.find('.sovosNavigationBranding__productName');
    expect(productNameElement.text()).toEqual(productName);
  });
});