"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTabContent = _interopRequireDefault(require("../sovos-tab-content/SovosTabContent"));

var _SovosPageLayout = _interopRequireDefault(require("./SovosPageLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", {
  id: "singleChild"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement("div", null, "Button");

var renderLayout = function renderLayout() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    maxWidth: 500,
    titleElements: [{
      text: 'test'
    }],
    children: _ref,
    navigationIcon: _ref2
  };

  var props = _objectSpread({}, defaultProps, conf);

  return (0, _enzyme.mount)(_react.default.createElement(_SovosPageLayout.default, props));
};

var _ref3 =
/*#__PURE__*/
_react.default.createElement("div", {
  id: "childrenID_Tab1"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement("div", {
  id: "childrenID_Tab2"
});

describe('SovosPageLayout', function () {
  it('renders a TitleBar', function () {
    var wrapper = renderLayout();
    expect(wrapper.find('PageTitleBar')).toExist();
  });
  it('renders a single child when no tabs are passed', function () {
    var wrapper = renderLayout();
    expect(wrapper.find('#singleChild')).toExist();
  });
  it('renders PageTabTemplates for each of the passed Tab children', function () {
    var wrapper = renderLayout({
      children: [_react.default.createElement(_SovosTabContent.default, {
        TabProps: {
          label: 'label1'
        }
      }, _ref3), _react.default.createElement(_SovosTabContent.default, {
        TabProps: {
          label: 'label2'
        }
      }, _ref4)]
    });
    var tabTemplates = wrapper.find(_SovosTabContent.default);
    expect(tabTemplates.find('#childrenID_Tab1')).toExist();
    expect(tabTemplates.find('#childrenID_Tab2')).toExist();
  });
});