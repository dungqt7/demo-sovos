"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _SovosGlobalLayout = require("./SovosGlobalLayout");

var _SovosPageLayout = _interopRequireDefault(require("./SovosPageLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doNothing = function doNothing() {};

var defaultNavProps = {
  BrandingProps: {
    productName: 'test'
  },
  contexts: [{
    name: 'test',
    type: 'production',
    taxYear: '2018'
  }],
  FooterProps: {
    onHelpClicked: doNothing,
    showSettingsButton: false,
    showHelpButton: false,
    settingsMenuItems: [],
    userName: 'Test',
    userMenuItems: []
  },
  initialSelectedLink: 'test',
  links: [{
    label: 'test',
    action: function action() {},
    icon: _Search.default
  }],
  selectedContext: {
    name: 'test',
    type: 'production',
    taxYear: '2018'
  },
  setContext: doNothing
};

var renderGlobalLayout = function renderGlobalLayout(props) {
  props = props || {};
  return (0, _enzyme.mount)(_react.default.createElement(_SovosGlobalLayout.SovosGlobalLayout, {
    breakPoint: props.breakPoint,
    window: props.window || {
      innerWidth: 1000
    },
    initialNavigationCollapsed: props.initialNavigationCollapsed,
    NavigationProps: defaultNavProps,
    classes: {}
  }, _react.default.createElement(_SovosPageLayout.default, {
    titleBarActions: props.titleBarActions || [],
    titleBarTabs: props.titleBarTabs || [],
    titleElements: props.titleElements || [{
      text: 'test'
    }]
  }, "Test content")));
};

describe('SovosGlobalLayout', function () {
  describe('navigationCollapsed', function () {
    it('set if initialNavigationCollapsed set', function () {
      var wrapper = renderGlobalLayout({
        initialNavigationCollapsed: true
      });
      expect(wrapper.state('navigationCollapsed')).toBeTruthy();
    });
    it('is not set if initialNavigationCollapsed not set', function () {
      var wrapper = renderGlobalLayout();
      expect(wrapper.state('navigationCollapsed')).toBeFalsy();
    });
    it('is set if browser width is less than breakpoint', function () {
      var wrapper = renderGlobalLayout({
        window: {
          innerWidth: 100
        },
        breakPoint: 150
      });
      expect(wrapper.state('navigationCollapsed')).toBeTruthy();
    });
    it('is not set if browser width is more than breakpoint', function () {
      var wrapper = renderGlobalLayout({
        window: {
          innerWidth: 150
        },
        breakPoint: 100
      });
      expect(wrapper.state('navigationCollapsed')).toBeFalsy();
    });
    it('clickable overlay hides navigation on click if browser width is less than breakpoint', function () {
      var wrapper = renderGlobalLayout({
        window: {
          innerWidth: 100
        },
        breakPoint: 150,
        initialNavigationCollapsed: false
      });
      wrapper.find('.sovosGlobalLayout__overlay').first().simulate('click');
      expect(wrapper.state('navigationCollapsed')).toBeTruthy();
    });
  });
});