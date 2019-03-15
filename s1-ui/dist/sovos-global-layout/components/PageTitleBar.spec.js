"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _PageTitleBar = _interopRequireDefault(require("./PageTitleBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onClick = function onClick() {};

var renderTitleBar = function renderTitleBar(props) {
  props = props || {};
  return (0, _enzyme.mount)(_react.default.createElement(_PageTitleBar.default, {
    actions: props.actions || [],
    tabs: props.tabs || [],
    titleElements: props.titleElements || [{
      text: 'test'
    }],
    maxWidth: props.maxWidth || 1000,
    navigationIcon: props.navigationIcon || undefined,
    onTabClick: function onTabClick() {}
  }));
};

var _ref =
/*#__PURE__*/
_react.default.createElement("div", {
  className: "navigation_button"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Search.default, {
  key: "abc123"
});

describe('PageTitleBar', function () {
  describe('Navigation Toggle', function () {
    it('shows nvigation icon if specified', function () {
      var wrapper = renderTitleBar({
        navigationIcon: _ref
      });
      expect(wrapper.find('.navigation_button')).toExist();
    });
  });
  describe('Right Action Items', function () {
    it('shows if right action buttons are defined', function () {
      var actions = [_ref2];
      var wrapper = renderTitleBar({
        actions: actions
      });
      var actionsSection = wrapper.find('.sovosPageTitleBar__actions');
      expect(actionsSection.exists()).toEqual(true);
    });
    it('hides if right action buttons are not defined', function () {
      var wrapper = renderTitleBar();
      var actionsSection = wrapper.find('.sovosPageTitleBar__actions');
      expect(actionsSection.exists()).toEqual(false);
    });
  });
  describe('Bread Crumbs', function () {
    it('shows non-clickable breadcrumb if no onClick provided', function () {
      var wrapper = renderTitleBar({
        titleElements: [{
          text: 'test'
        }]
      });
      var nonClickableBreadCrumb = wrapper.find('.sovosPageTitleBar__breadCrumb--nonClickable');
      var clickableBreadCrumb = wrapper.find('.sovosPageTitleBar__breadCrumbText--clickable');
      expect(clickableBreadCrumb.exists()).toEqual(false);
      expect(nonClickableBreadCrumb.exists()).toEqual(true);
    });
    it('shows clickable breadcrumb if an onClick method is provided', function () {
      var wrapper = renderTitleBar({
        titleElements: [{
          text: 'test',
          onClick: onClick
        }]
      });
      var clickableBreadCrumb = wrapper.find('.sovosPageTitleBar__breadCrumbText--clickable');
      var nonClickableBreadCrumb = wrapper.find('.sovosPageTitleBar__breadCrumb--nonClickable');
      expect(clickableBreadCrumb.exists()).toEqual(true);
      expect(nonClickableBreadCrumb.exists()).toEqual(false);
    });
    it('shows dropdown menu if item has nested items', function () {
      var item = [{
        text: 'test',
        nestedItems: [{
          text: 'nested item'
        }]
      }];
      var wrapper = renderTitleBar({
        titleElements: item
      });
      var dropDownButton = wrapper.find('svg');
      expect(dropDownButton.exists()).toEqual(true);
    });
    it('items without nested items don\'t have a dropdown menu', function () {
      var wrapper = renderTitleBar({
        titleElements: [{
          text: 'test',
          onClick: onClick
        }]
      });
      var dropDownButton = wrapper.find('svg');
      expect(dropDownButton.exists()).toEqual(false);
    });
  });
  describe('Tabs', function () {
    it('shows tabs section if tabs defined in props', function () {
      var tabs = [{
        label: 'tab 1',
        onClick: onClick
      }];
      var wrapper = renderTitleBar({
        tabs: tabs
      });
      var tabsSection = wrapper.find('.sovosPageTitleBar__tabs');
      expect(tabsSection.exists()).toEqual(true);
    });
    it('doesn\'t show tabs section if no tabs in props', function () {
      var wrapper = renderTitleBar();
      var tabsSection = wrapper.find('.sovosPageTitleBar__tabs');
      expect(tabsSection.exists()).toEqual(false);
    });
  });
});