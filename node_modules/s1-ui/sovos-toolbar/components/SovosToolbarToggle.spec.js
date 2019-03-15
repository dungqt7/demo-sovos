"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _mockThemedContext = _interopRequireDefault(require("../../../testUtilities/mockThemedContext"));

var _SovosToolbarToggle = _interopRequireDefault(require("./SovosToolbarToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null);

function renderToggle() {
  var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosToolbarToggle.default, {
    selected: selected
  }, _ref), {
    context: _mockThemedContext.default
  });
}

describe('SovosToolbarToggle', function () {
  var wrapper;
  describe('off state', function () {
    it('does not have selected class', function () {
      wrapper = renderToggle();
      expect(wrapper.find('Chip')).not.toHaveClassName('selected');
    });
  });
  describe('on state', function () {
    it('has background purple', function () {
      wrapper = renderToggle(true);
      expect(wrapper.find('Chip')).toHaveClassName('selected');
    });
  });
});