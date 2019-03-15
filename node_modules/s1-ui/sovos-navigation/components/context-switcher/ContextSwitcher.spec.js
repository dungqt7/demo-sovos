"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MuiThemeProvider = _interopRequireDefault(require("@material-ui/core/styles/MuiThemeProvider"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../../../themes/sovos-colors");

var _ContextSwitcher = _interopRequireDefault(require("./ContextSwitcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function renderContextSwitcher(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_ContextSwitcher.default, _extends({}, props, {
    classes: {},
    setContext: jest.fn()
  })));
}

describe('Context Switcher', function () {
  it('shows correct colors for each context type', function () {
    var contexts = [{
      name: 'test1',
      type: 'production',
      taxYear: '2018'
    }, {
      name: 'test2',
      type: 'default',
      taxYear: '2018'
    }, {
      name: 'test3',
      type: 'test',
      taxYear: '2018'
    }];
    var wrapper = renderContextSwitcher({
      contexts: contexts,
      selectedContext: contexts[0]
    });
    var buttonTheme = wrapper.find(_MuiThemeProvider.default).prop('theme').overrides.MuiButton.root;
    expect(buttonTheme.backgroundColor).toEqual((0, _colorManipulator.fade)(_sovosColors.green, 0.6));
    wrapper = renderContextSwitcher({
      contexts: contexts,
      selectedContext: contexts[1]
    });
    buttonTheme = wrapper.find(_MuiThemeProvider.default).prop('theme').overrides.MuiButton.root;
    expect(buttonTheme.backgroundColor).toEqual((0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.6));
    wrapper = renderContextSwitcher({
      contexts: contexts,
      selectedContext: contexts[2]
    });
    buttonTheme = wrapper.find(_MuiThemeProvider.default).prop('theme').overrides.MuiButton.root;
    expect(buttonTheme.backgroundColor).toEqual((0, _colorManipulator.fade)(_sovosColors.pink, 0.6));
  });
  it('shows year when context has a year', function () {
    var contexts = [{
      name: 'test1',
      type: 'production',
      taxYear: '2018'
    }];
    var wrapper = renderContextSwitcher({
      contexts: contexts,
      selectedContext: contexts[0]
    });
    var contextYear = wrapper.find('.sovos-navigation-context-switcher__year');
    expect(contextYear).toExist();
  });
  it('hides year when context doesn\'t have a year', function () {
    var contexts = [{
      name: 'test1',
      type: 'production'
    }];
    var wrapper = renderContextSwitcher({
      contexts: contexts,
      selectedContext: contexts[0]
    });
    var contextYear = wrapper.find('.sovos-navigation-context-switcher__year');
    expect(contextYear).not.toExist();
  });
});