"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosFilterSection = _interopRequireDefault(require("./SovosFilterSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosFilterSection', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterSection.default, {
      label: "test",
      getRow: function getRow() {}
    }));
  });
  it('has Label text', function () {
    expect(wrapper.find('.sovosFilterSection__label')).toExist();
  });
});