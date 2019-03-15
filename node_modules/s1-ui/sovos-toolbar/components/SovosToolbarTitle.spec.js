"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _mockThemedContext = _interopRequireDefault(require("../../../testUtilities/mockThemedContext"));

var _SovosToolbarTitle = _interopRequireDefault(require("./SovosToolbarTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosToolbarTitle.default, null, "Lorem Impsum");

describe('SovosToolbarTitle', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_ref, {
      context: _mockThemedContext.default
    });
  });
  it('renders', function () {
    expect(wrapper.find('span')).toExist();
  });
});