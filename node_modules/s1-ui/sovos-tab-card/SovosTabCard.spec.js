"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTabCard = _interopRequireDefault(require("./SovosTabCard"));

var _SovosTabContent = _interopRequireDefault(require("../sovos-tab-content/SovosTabContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTabCard = function renderTabCard(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosTabCard.default, props));
};

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null, "Test");

var _ref2 =
/*#__PURE__*/
_react.default.createElement("h1", null, "Test");

describe('SovosTabCard', function () {
  it('renders children', function () {
    var wrapper = renderTabCard({
      children: [_react.default.createElement(_SovosTabContent.default, {
        TabProps: {
          label: 'tab 1'
        }
      }, _ref), _react.default.createElement(_SovosTabContent.default, {
        TabProps: {
          label: 'tab 2'
        }
      }, _ref2)]
    });
    expect(wrapper.find(_SovosTabContent.default).length).toBe(2);
  });
});