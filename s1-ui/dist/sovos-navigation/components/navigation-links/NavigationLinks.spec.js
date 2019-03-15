"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _NavigationLinks = require("./NavigationLinks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderNavigationLinks(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_NavigationLinks.NavigationLinksUnstyled, {
    links: props.links,
    selectedLink: props.selectedLink || '',
    onLinkClick: props.onLinkClick || jest.fn(),
    classes: {}
  }));
}

describe('NavigationLinks', function () {
  var icon = _Search.default;
  var action = jest.fn();
  it('shows the links provided', function () {
    var links = [{
      label: 'a',
      action: action,
      icon: icon
    }, {
      label: 'b',
      action: action,
      icon: icon
    }, {
      label: 'c',
      action: action,
      icon: icon
    }];
    var wrapper = renderNavigationLinks({
      links: links
    });
    var linkElements = wrapper.find('div.sovosNavigationLinks__link');
    expect(linkElements).toExist();
    linkElements.forEach(function (e, i) {
      expect(e.text()).toEqual(links[i].label);
    });
  });
  it('shows nested items when parent clicked', function () {
    var nestedLinks = [{
      label: 'b',
      action: action
    }];
    var links = [{
      label: 'a',
      action: action,
      icon: icon,
      nestedLinks: nestedLinks
    }];
    var wrapper = renderNavigationLinks({
      links: links
    });
    var nestedItems = wrapper.find('div.sovosNavigationLinks__link--nested');
    expect(nestedItems).not.toExist();
    wrapper.find('div.sovosNavigationLinks__link').simulate('click');
    nestedItems = wrapper.find('div.sovosNavigationLinks__link--nested');
    expect(nestedItems).toExist();
  });
  it('calls action on click', function () {
    var onClick = jest.fn();
    var links = [{
      label: 'a',
      action: action,
      icon: icon
    }];
    var wrapper = renderNavigationLinks({
      links: links,
      onLinkClick: onClick
    });
    wrapper.find('div.sovosNavigationLinks__link').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('sets class of selected item', function () {
    var links = [{
      label: 'a',
      action: action,
      icon: icon
    }, {
      label: 'b',
      action: action,
      icon: icon
    }];
    var wrapper = renderNavigationLinks({
      links: links,
      selectedLink: 'b'
    });
    expect(wrapper.find('div.sovosNavigationLinks__link').at(0)).not.toHaveClassName('active');
    expect(wrapper.find('div.sovosNavigationLinks__link').at(1)).toHaveClassName('active');
  });
  describe('selected link expansion', function () {
    it('sets expanded state when nested link is selected', function () {
      var nestedLinks = [{
        label: 'b',
        action: action
      }];
      var links = [{
        label: 'a',
        action: action,
        icon: icon,
        nestedLinks: nestedLinks
      }];
      var wrapper = renderNavigationLinks({
        links: links,
        selectedLink: 'b'
      });
      expect(wrapper.state('expandedLinks')).toEqual({
        a: true
      });
    });
    it('renders a collapsed navigation list when initialized with non-nested link', function () {
      var nestedLinks = [{
        label: 'b',
        action: action
      }];
      var links = [{
        label: 'a',
        action: action,
        icon: icon,
        nestedLinks: nestedLinks
      }];
      var wrapper = renderNavigationLinks({
        links: links,
        selectedLink: 'a'
      });
      expect(wrapper.state('expandedLinks')).toEqual({});
    });
  });
});