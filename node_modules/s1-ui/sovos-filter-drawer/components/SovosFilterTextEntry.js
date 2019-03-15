"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _eventHelpers = require("../../utils/eventHelpers");

var _sovosAutoComplete = require("../../sovos-auto-complete");

var _sovosAutoCompleteAsync = _interopRequireDefault(require("../../sovos-auto-complete-async"));

var _sovosTextField = _interopRequireDefault(require("../../sovos-text-field"));

var _SovosFilterSection = _interopRequireDefault(require("./SovosFilterSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  input: {
    height: 24,
    fontSize: 12,
    fontWeight: 'normal'
  },
  text: {
    flexGrow: 1
  },
  option: {
    lineHeight: '24px',
    minHeight: 24,
    fontSize: 13,
    padding: '0 8px'
  }
};

var getStyledRow = function getStyledRow(_ref) {
  var entry = _ref.entry,
      index = _ref.index,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      classes = _ref.classes,
      autoComplete = _ref.autoComplete,
      AutoCompleteProps = _ref.AutoCompleteProps;

  var handleKeyDown = function handleKeyDown(event) {
    if ((0, _eventHelpers.isEnter)(event)) {
      handleBlur(event);
    }
  };

  var commonProps = {
    id: "".concat(index),
    onBlur: handleBlur,
    value: entry || '',
    autoFocus: !entry,
    onKeyDown: handleKeyDown
  };

  if (autoComplete || AutoCompleteProps) {
    var _ref2 = AutoCompleteProps || {},
        suggestions = _ref2.suggestions,
        autoCompleteProps = _objectWithoutProperties(_ref2, ["suggestions"]);

    var AutoCompleteComponent = autoCompleteProps.loadSuggestions ? _sovosAutoCompleteAsync.default : _sovosAutoComplete.SovosAutoCompleteNext;
    return _react.default.createElement(AutoCompleteComponent, _extends({
      classes: {
        root: classes.text,
        input: classes.input,
        option: classes.option,
        valueContainer: classes.input,
        singleValue: classes.input,
        message: classes.input
      },
      onChange: handleChange,
      suggestions: autoComplete || suggestions,
      className: "sovosFilterTextEntry__input"
    }, commonProps, autoCompleteProps, {
      isClearable: false
    }));
  }

  return _react.default.createElement(_sovosTextField.default, _extends({
    InputProps: {
      fullWidth: true,
      classes: {
        root: classes.input
      }
    },
    onChange: handleChange,
    className: (0, _classnames.default)('sovosFilterTextEntry__input', classes.text)
  }, commonProps));
};

getStyledRow.propTypes = process.env.NODE_ENV !== "production" ? {
  entry: _propTypes.default.node.isRequired,
  index: _propTypes.default.number.isRequired,
  classes: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  handleBlur: _propTypes.default.func.isRequired,
  autoComplete: _propTypes.default.arrayOf(_propTypes.default.string)
} : {};
getStyledRow.defaultProps = {
  autoComplete: undefined
};

var getRow = function getRow(componentProps) {
  return function (props) {
    return getStyledRow(_objectSpread({}, componentProps, props));
  };
};
/**
 * SovosFilterTextEntry is used for searchable input fields + free text entry.
 *
 * This is a dynamic component where the text field is hidden by default.
 * When a user clicks on a label or the plus button to the right of the label, a text field (or in some cases,
 * a set of text fields) will appear below. The container will grow vertically to push down all other content in the filter drawer.
 *
 * If a user clicks the X to the right of an empty text field, the text field will disappear and should be removed from the filter.
 *
 * If a user has input a valid datapoint in the field and they either 1) press Enter or 2) click outside of the field,
 * the text field will disappear and the datapoint entered will be added as a filter selection
 *
 * Hint text is optional and will be provided by the product. Leverage the default hint text available in both material UI components
 */


var SovosFilterTextEntry = function SovosFilterTextEntry(_ref3) {
  var classes = _ref3.classes,
      multiple = _ref3.multiple,
      label = _ref3.label,
      autoComplete = _ref3.autoComplete,
      onChange = _ref3.onChange,
      data = _ref3.data;
  return _react.default.createElement(_SovosFilterSection.default, {
    label: label,
    addEnabled: true,
    removeEnabled: true,
    multiple: multiple,
    onChange: onChange,
    getRow: getRow({
      classes: classes,
      autoComplete: autoComplete
    }),
    data: data,
    className: "sovosFilterTextEntry"
  });
};

SovosFilterTextEntry.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Mandatory label for section
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Array of values for TextField/AutoComplete
   */
  data: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Autocomplete: Product will provide an array of values. Typing should show matching results:
   * See Material UI > Autocomplete (https://www.material-ui.com/#/components/auto-complete)
   */
  autoComplete: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Multiple datapoints allowed.
   * If a user wishes to enter multiple datapoints of a particular category (ex. “MA” OR “NY”),
   * a user will once again click on the filter category name or plus button adjacent to it.
   * When they do so, a new text field will appear below the datapoint(s) already entered by the user.
   */
  multiple: _propTypes.default.bool,

  /**
   * Callback function called on any filter change. Return changed data structure
   */
  onChange: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object.isRequired,
  AutoCompleteProps: _propTypes.default.shape({
    loadSuggestions: _propTypes.default.func,
    clearSuggestions: _propTypes.default.func,
    isLoading: _propTypes.default.bool,
    minimumCharacters: _propTypes.default.number,
    suggestions: _propTypes.default.arrayOf(_propTypes.default.string)
  })
} : {};
SovosFilterTextEntry.defaultProps = {
  data: [],
  autoComplete: undefined,
  multiple: false,
  AutoCompleteProps: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosFilterTextEntry);

exports.default = _default;