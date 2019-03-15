"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _SovosNavigation = require("./SovosNavigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doNothing = function doNothing() {};

var onLinkClick = function onLinkClick(label, action, hasNestedItems) {
  if (!hasNestedItems) {
    action();
  }
};

var footerProps = {
  onHelpClicked: doNothing,
  showSettingsButton: false,
  showHelpButton: false,
  settingsMenuItems: [],
  userName: 'Test',
  userMenuItems: []
};
var classes = {
  open: 'open',
  hidden: 'hidden'
};

var renderNavigation = function renderNavigation(props) {
  props = props || {};
  return (0, _enzyme.mount)(_react.default.createElement(_SovosNavigation.UnstyledSovosNavigation, {
    BrandingProps: props.branding || {
      productName: 'test'
    },
    contexts: props.contexts || [{
      name: 'test',
      type: 'production',
      taxYear: '2018'
    }],
    selectedContext: props.selectedContext || {
      name: 'test',
      type: 'production',
      taxYear: '2018'
    },
    links: props.links || [{
      label: 'test',
      action: function action() {},
      icon: _Search.default
    }],
    initialSelectedLink: props.initialSelectedLink || 'test',
    FooterProps: footerProps,
    collapsed: props.collapsed || false,
    setContext: doNothing,
    hideDrawer: doNothing,
    onLinkClick: onLinkClick,
    classes: classes
  }));
};

describe('SovosNavigation', function () {
  describe('width', function () {
    it('doesn\'t show if collapsed set', function () {
      var wrapper = renderNavigation({
        collapsed: true
      });
      expect(wrapper.find(".".concat(classes.hidden))).toExist();
    });
    it('shows if collapsed not set', function () {
      var wrapper = renderNavigation();
      expect(wrapper.find(".".concat(classes.open))).toExist();
    });
  });
});