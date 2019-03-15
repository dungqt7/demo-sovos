"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosSlidingPanel = _interopRequireDefault(require("./SovosSlidingPanel"));

var _ChildrenMock = _interopRequireDefault(require("./mocks/ChildrenMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_ChildrenMock.default, null);

var renderSovosSlidingPanel = function renderSovosSlidingPanel() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    open: false,
    onClose: function onClose() {},
    baseZIndex: 1200
  };
  var props = Object.assign({}, defaultProps, conf);
  return (0, _enzyme.mount)(_react.default.createElement(_SovosSlidingPanel.default, props, _ref));
};

describe('SovosSlidingPanel', function () {
  describe('open flag tests', function () {
    it('has a ChildrenMock when open true', function () {
      var wrapper = renderSovosSlidingPanel({
        open: true
      });
      var container = wrapper.find(_ChildrenMock.default);
      expect(container).toExist();
    });
    it('does not has a ChildrenMock when open false', function () {
      var wrapper = renderSovosSlidingPanel();
      var container = wrapper.find(_ChildrenMock.default);
      expect(container).not.toExist();
    });
    it('has a sliding panel container when open true', function () {
      var wrapper = renderSovosSlidingPanel({
        open: true
      });
      var container = wrapper.find('.sovosSlidingPanelContainer');
      expect(container).toExist();
    });
    it('does not has a sliding panel container when open false', function () {
      var wrapper = renderSovosSlidingPanel();
      var container = wrapper.find('.sovosSlidingPanelContainer');
      expect(container).not.toExist();
    });
    it('hides and shows the children on open prop modification', function () {
      var wrapper = renderSovosSlidingPanel();
      var container = wrapper.find(_ChildrenMock.default);
      expect(container).not.toExist();
      wrapper.setProps({
        open: true
      });
      wrapper.update();
      container = wrapper.find(_ChildrenMock.default);
      expect(container).toExist();
    });
  });
});