"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AutoComplete = require("./AutoComplete");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestions = ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia, Plurinational State of', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam'];

var renderAutoComplete = function renderAutoComplete() {
  return (0, _enzyme.shallow)(_react.default.createElement(_AutoComplete.UnstyledAutoComplete, {
    className: "",
    classes: {},
    suggestions: suggestions,
    onChange: jest.fn(),
    value: "",
    label: "",
    theme: {}
  }));
};

describe('AutoComplete', function () {
  it('should render a component', function () {
    var wrapper = renderAutoComplete();
    expect(wrapper.find('.sovosAutoComplete')).toExist();
  });
  it('should change state based on suggestions list changing', function () {
    var wrapper = renderAutoComplete();
    var state1 = wrapper.state();
    wrapper.setProps({
      suggestions: suggestions.slice(10)
    });
    wrapper.update();
    var state2 = wrapper.state();
    expect(state1).not.toEqual(state2);
  });
});