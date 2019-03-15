"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _mockThemedContext = _interopRequireDefault(require("../../../testUtilities/mockThemedContext"));

var _SovosToolbarBulkActions = _interopRequireDefault(require("./SovosToolbarBulkActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBulkActions(count) {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosToolbarBulkActions.default, {
    count: count
  }), {
    context: _mockThemedContext.default
  });
}

describe('SovosToolbarBulkActions', function () {
  var wrapper;
  describe('with count greater than 0', function () {
    beforeEach(function () {
      wrapper = renderBulkActions(1);
    });
    it('is visible', function () {
      var style = wrapper.find('div').at(1).prop('style');
      expect(style.marginLeft).toEqual(0);
    });
  });
  describe('SovosToolbarBulkActions with count 0', function () {
    beforeEach(function () {
      wrapper = renderBulkActions(0);
    });
    it('is hidden', function () {
      var style = wrapper.find('div').at(1).prop('style');
      expect(style.marginLeft < 0).toEqual(true);
    });
  });
});