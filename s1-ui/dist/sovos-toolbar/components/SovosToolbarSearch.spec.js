"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _sovosEnterprise = _interopRequireDefault(require("../../themes/sovos-enterprise"));

var _SovosIconButton = _interopRequireDefault(require("../../sovos-icon-button/SovosIconButton"));

var _mockThemedContext = _interopRequireDefault(require("../../../testUtilities/mockThemedContext"));

var _SovosToolbarSearch = _interopRequireDefault(require("./SovosToolbarSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosToolbarSearch.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_SovosToolbarSearch.default, {
  defaultValue: "test"
});

describe('SovosToolbarSearch', function () {
  var wrapper;
  describe('active', function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_ref, {
        context: _mockThemedContext.default
      });
      wrapper.find(_SovosIconButton.default).simulate('click');
    });
    it('has shadow', function () {
      var style = wrapper.find('div').at(0).prop('style');
      expect(style.boxShadow).toEqual("0px 2px 4px 1px ".concat(_sovosEnterprise.default.palette.secondary.main));
    });
    it('text color: $purple', function () {
      expect(wrapper.find('Input')).toHaveStyle('color', _sovosEnterprise.default.palette.secondary.main);
    });
  });
  describe('default value', function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_ref2, {
        context: _mockThemedContext.default
      });
    });
    it('has text color: $purple', function () {
      expect(wrapper.find('span').at(0)).toHaveStyle('color', _sovosEnterprise.default.palette.secondary.main);
    });
  });
});