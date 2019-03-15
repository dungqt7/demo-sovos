"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _OverlayLayer = _interopRequireDefault(require("./OverlayLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-undef:0 */
var getBlockOverlayLayer = function getBlockOverlayLayer() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    transitionDuration: 400,
    order: 0,
    open: true,
    onClick: function onClick() {},
    zIndex: 1200,
    classes: {}
  };
  var props = Object.assign({}, defaultProps, conf);
  return (0, _enzyme.mount)(_react.default.createElement(_OverlayLayer.default, props));
};

describe('BlockOverlayLayer', function () {
  describe('zIndex tests', function () {
    it('Overlay layer has zIndex from props', function () {
      var wrapper = getBlockOverlayLayer();
      var container = wrapper.find('.sovosSlidingPanelOverlay');
      expect(container.get(0).props.style.zIndex).toEqual(1200);
    });
  });
  describe('onCick', function () {
    var closeClick;
    beforeEach(function () {
      closeClick = jest.fn();
    });
    it('Is calling to the click by default', function () {
      var wrapper = getBlockOverlayLayer({
        onClick: closeClick
      });
      var container = wrapper.find('.sovosSlidingPanelOverlay');
      container.simulate('click');
      expect(closeClick).toHaveBeenCalled();
    });
  });
});