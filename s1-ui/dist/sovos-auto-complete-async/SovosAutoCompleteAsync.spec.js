"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosAutoCompleteAsync = _interopRequireDefault(require("./SovosAutoCompleteAsync"));

var _AutoComplete = _interopRequireDefault(require("../internals/auto-complete/AutoComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestions = ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia, Plurinational State of', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam'];
var noSuggestionsMessage = 'No results found';
var moreCharsMessage = 'Type 2+ characters to begin searching';

var renderAutoCompleteAsync = function renderAutoCompleteAsync(initialSuggestions, isLoading) {
  return (0, _enzyme.shallow)(_react.default.createElement(_SovosAutoCompleteAsync.default, {
    suggestions: initialSuggestions,
    isLoading: isLoading,
    loadSuggestions: jest.fn(),
    clearSuggestions: jest.fn(),
    onChange: jest.fn(),
    value: "",
    label: "",
    helperText: ""
  }));
};

describe('SovosAutoCompleteAsync', function () {
  it('should render a component', function () {
    var wrapper = renderAutoCompleteAsync(suggestions, false);
    expect(wrapper.find(_AutoComplete.default)).toExist();
  });
  it('getNoOptions should return null when getNoOptions is called with no searchValue and the component is loading suggestions', function () {
    var wrapper = renderAutoCompleteAsync([], true);
    wrapper.setState({
      searchValue: ''
    });
    wrapper.update();
    var instance = wrapper.instance();
    expect(instance.getNoOptionsMessage()).toEqual(null);
  });
  it('getNoOptions should return noSuggestionsMessage when getNoOptions is called with a searchValue and no suggestions', function () {
    var wrapper = renderAutoCompleteAsync([], false);
    wrapper.setState({
      searchValue: 'asd'
    });
    wrapper.update();
    var instance = wrapper.instance();
    expect(instance.getNoOptionsMessage()).toEqual(noSuggestionsMessage);
  });
  it('getNoOptions should return null when getNoOptions is called with no searchValue', function () {
    var wrapper = renderAutoCompleteAsync([], false);
    wrapper.setState({
      searchValue: 'a'
    });
    wrapper.update();
    var instance = wrapper.instance();
    expect(instance.getNoOptionsMessage()).toEqual(moreCharsMessage);
  });
  it('loadSuggestions should be called when a search value is passed in', function () {
    var load = jest.fn();
    var clear = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SovosAutoCompleteAsync.default, {
      suggestions: suggestions,
      isLoading: false,
      loadSuggestions: load,
      clearSuggestions: clear,
      onChange: jest.fn(),
      value: "",
      label: "",
      helperText: ""
    }));
    var instance = wrapper.instance();
    instance.handleInputChange('abc');
    wrapper.update();
    expect(load).toHaveBeenCalled();
  });
  it('clearSuggestions should be called when an empty search value is passed in', function () {
    var load = jest.fn();
    var clear = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SovosAutoCompleteAsync.default, {
      suggestions: suggestions,
      isLoading: false,
      loadSuggestions: load,
      clearSuggestions: clear,
      onChange: jest.fn(),
      value: "",
      label: "",
      helperText: ""
    }));
    var instance = wrapper.instance();
    instance.handleInputChange('');
    wrapper.update();
    expect(clear).toHaveBeenCalled();
  });
});