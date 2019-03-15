"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NavigationFooter = _interopRequireDefault(require("./NavigationFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doNothing = function doNothing() {};

var renderNavigation = function renderNavigation(props) {
  props = props || {};
  return (0, _enzyme.mount)(_react.default.createElement(_NavigationFooter.default, {
    onHelpClicked: props.onHelpClicked || doNothing,
    showSettingsButton: props.showSettingsButton || false,
    showHelpButton: props.showHelpButton || false,
    settingsMenuItems: props.settingsMenuItems || [],
    userName: props.userName || 'Test',
    userMenuItems: props.userMenuItems || []
  }));
};

describe('SovosNavigationFooter', function () {
  it('shows Help button when specified', function () {
    var wrapper = renderNavigation({
      showHelpButton: true
    });
    var helpIcon = wrapper.find('.sovosNavigationFooter__helpButton');
    expect(helpIcon.exists()).toEqual(true);
  });
  it('hides Help button when specified', function () {
    var wrapper = renderNavigation({
      showHelpButton: false
    });
    var helpIcon = wrapper.find('.sovosNavigationFooter__helpButton');
    expect(helpIcon.exists()).toEqual(false);
  });
  it('shows Settings button when specified', function () {
    var wrapper = renderNavigation({
      showSettingsButton: true
    });
    var settingsIcon = wrapper.find('.sovosNavigationFooter__settingsButton');
    expect(settingsIcon.exists()).toEqual(true);
  });
  it('hides Settings button when specified', function () {
    var wrapper = renderNavigation({
      showSettingsButton: false
    });
    var helpIcon = wrapper.find('.sovosNavigationFooter__settingsButton');
    expect(helpIcon.exists()).toEqual(false);
  });
  it('calls onHelpClicked when help icon is clicked', function () {
    var onHelpClicked = jest.fn();
    var wrapper = renderNavigation({
      showHelpButton: true,
      onHelpClicked: onHelpClicked
    });
    wrapper.find('button.sovosNavigationFooter__helpButton').simulate('click');
    expect(onHelpClicked).toHaveBeenCalled();
  }); // TODO: write tests for popover menus
});