"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _sovosRaisedButton = _interopRequireDefault(require("../../sovos-raised-button"));

var _SovosSlidingPanelHeader = _interopRequireDefault(require("./SovosSlidingPanelHeader"));

var _SovosSlidingPanelHeaderActionButtons = _interopRequireDefault(require("./SovosSlidingPanelHeaderActionButtons"));

var _SovosSlidingPanelHeaderAdditionalButtons = _interopRequireDefault(require("./SovosSlidingPanelHeaderAdditionalButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
});

var ExportIcon = function ExportIcon(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
});

var RefreshIcon = function RefreshIcon(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref2);
};

var renderSovosSlidingPanelHeader = function renderSovosSlidingPanelHeader() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    onCloseClick: function onCloseClick() {
      return null;
    },
    showHeaderBorderBottom: true,
    titleStyle: {}
  };
  var title = conf.title,
      showBorderBottom = conf.showBorderBottom;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosSlidingPanelHeader.default, _objectSpread({}, defaultProps, {
    title: title,
    showBorderBottom: showBorderBottom
  }), conf.additionalButtons ? _react.default.createElement(_SovosSlidingPanelHeaderAdditionalButtons.default, null, conf.additionalButtons) : null, conf.actionButtons ? _react.default.createElement(_SovosSlidingPanelHeaderActionButtons.default, null, conf.actionButtons) : null));
};

var _ref3 =
/*#__PURE__*/
_react.default.createElement("div", null, "test");

describe('SovosSlidingPanelHeader', function () {
  describe('General Tests', function () {
    it('has no title', function () {
      var wrapper = renderSovosSlidingPanelHeader();
      var container = wrapper.find('.sovosSlidingPanelHeader__title');
      expect(container.text()).toEqual('');
    });
    it('has title of the props', function () {
      var wrapper = renderSovosSlidingPanelHeader({
        title: 'Test Title'
      });
      var container = wrapper.find('.sovosSlidingPanelHeader__title');
      expect(container.text()).toEqual('Test Title');
    });
    it('can take a node as a title element', function () {
      var wrapper = renderSovosSlidingPanelHeader({
        title: _ref3
      });
      var container = wrapper.find('.sovosSlidingPanelHeader__title');
      expect(container).toExist();
    });
    it('has borderBottom when showHeaderBorderBottom to true', function () {
      var wrapper = renderSovosSlidingPanelHeader({
        title: 'Test Title'
      });
      var container = wrapper.find('.sovosSlidingPanelHeader');
      expect(container.get(0).props.style.borderBottom).toEqual('1px solid #ebeef0');
    });
    it('doesn\'t have borderBottom when showBorderBottom to false', function () {
      var wrapper = renderSovosSlidingPanelHeader({
        title: 'Test Title',
        showBorderBottom: false
      });
      var container = wrapper.find('.sovosSlidingPanelHeader');
      expect(container.get(0).props.style.borderBottom).toEqual('none');
    });
  });
  describe('additionalButtons', function () {
    it('has additional Buttons', function () {
      var additionalButtons = [_react.default.createElement(RefreshIcon, {
        onClick: function onClick() {},
        key: "refresh"
      }), _react.default.createElement(ExportIcon, {
        onClick: function onClick() {},
        key: "export"
      })];
      var wrapper = renderSovosSlidingPanelHeader({
        additionalButtons: additionalButtons
      });
      var container = wrapper.find('RefreshIcon');
      expect(container).toExist();
      container = wrapper.find('ExportIcon');
      expect(container).toExist();
    });
    it('has additional Buttons with callbacks', function () {
      var refreshClick = jest.fn();
      var additionalButtons = [_react.default.createElement(RefreshIcon, {
        onClick: refreshClick,
        key: "refresh"
      })];
      var wrapper = renderSovosSlidingPanelHeader({
        additionalButtons: additionalButtons
      });
      var container = wrapper.find('RefreshIcon');
      container.simulate('click');
      expect(refreshClick).toHaveBeenCalledTimes(1);
    });
  });
  describe('actionButtons', function () {
    it('has action Buttons with custom labels', function () {
      var actionButtons = [_react.default.createElement(_sovosRaisedButton.default, {
        onClick: function onClick() {
          return null;
        },
        key: "1"
      }, "Action 1"), _react.default.createElement(_sovosRaisedButton.default, {
        onClick: function onClick() {
          return null;
        },
        key: "2"
      }, "Action 2")];
      var wrapper = renderSovosSlidingPanelHeader({
        actionButtons: actionButtons
      });
      var container = wrapper.find(_sovosRaisedButton.default);
      expect(container.length).toEqual(2);
      expect(container.at(0).text()).toEqual('Action 1');
      expect(container.at(1).text()).toEqual('Action 2');
    });
    it('has action Buttons with onClicks', function () {
      var actionClick = jest.fn();
      var actionButtons = [_react.default.createElement(_sovosRaisedButton.default, {
        onClick: actionClick,
        key: "1"
      }, "Action 1")];
      var wrapper = renderSovosSlidingPanelHeader({
        actionButtons: actionButtons
      });
      var container = wrapper.find(_sovosRaisedButton.default);
      container.at(0).prop('onClick')();
      expect(actionClick).toHaveBeenCalledTimes(1);
    });
  });
});