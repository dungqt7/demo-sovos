"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _createAutoCorrectedDatePipe = _interopRequireDefault(require("text-mask-addons/dist/createAutoCorrectedDatePipe"));

var _styles = require("@material-ui/core/styles");

var _eventHelpers = require("../../utils/eventHelpers");

var _sovosTextField = _interopRequireDefault(require("../../sovos-text-field"));

var _SovosFilterSection = _interopRequireDefault(require("./SovosFilterSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    width: 70,
    height: 24,
    fontSize: 12,
    fontWeight: 'normal'
  }
};

function DateTextMask(props) {
  var datePlaceholder = props.datePlaceholder,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["datePlaceholder", "inputRef"]);

  return _react.default.createElement(_reactTextMask.default, _extends({}, other, {
    ref: function ref(_ref) {
      return inputRef(_ref ? _ref.inputElement : null);
    },
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: "_",
    pipe: (0, _createAutoCorrectedDatePipe.default)(datePlaceholder.toLowerCase()),
    keepCharPositions: true
  }));
}

DateTextMask.propTypes = process.env.NODE_ENV !== "production" ? {
  datePlaceholder: _propTypes.default.string.isRequired,
  inputRef: _propTypes.default.func.isRequired
} : {};

var getStyledRow = function getStyledRow(_ref2) {
  var entry = _ref2.entry,
      index = _ref2.index,
      handleChange = _ref2.handleChange,
      handleBlur = _ref2.handleBlur,
      classes = _ref2.classes,
      datePlaceholder = _ref2.datePlaceholder;

  var handleKeyDown = function handleKeyDown(event) {
    if ((0, _eventHelpers.isEnter)(event)) {
      handleBlur(event);
    }
  };

  var commonProps = {
    id: "".concat(index),
    onBlur: handleBlur,
    onKeyDown: handleKeyDown
  };
  return _react.default.createElement(_sovosTextField.default, {
    className: "sovosFilterDateInput__input",
    InputProps: _objectSpread({
      classes: classes,
      inputComponent: DateTextMask
    }, commonProps),
    inputProps: {
      // eslint-disable-line
      datePlaceholder: datePlaceholder,
      placeholder: entry ? '' : datePlaceholder
    },
    value: entry,
    onChange: handleChange
  });
};

getStyledRow.propTypes = process.env.NODE_ENV !== "production" ? {
  datePlaceholder: _propTypes.default.string.isRequired,
  entry: _propTypes.default.node.isRequired,
  index: _propTypes.default.number.isRequired,
  classes: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  handleBlur: _propTypes.default.func.isRequired
} : {};

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


var SovosFilterDateInput = function SovosFilterDateInput(_ref3) {
  var classes = _ref3.classes,
      multiple = _ref3.multiple,
      label = _ref3.label,
      onChange = _ref3.onChange,
      data = _ref3.data,
      datePlaceholder = _ref3.datePlaceholder;
  return _react.default.createElement(_SovosFilterSection.default, {
    label: label,
    addEnabled: true,
    removeEnabled: true,
    multiple: multiple,
    onChange: onChange,
    getRow: getRow({
      classes: classes,
      datePlaceholder: datePlaceholder
    }),
    data: data,
    className: "sovosFilterDateInput"
  });
};

SovosFilterDateInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Mandatory label for section
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Array of js Date, that are values of date field.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Multiple datapoints allowed, resulting in an 'OR' query.
   * If a user wishes to enter multiple datapoints of a particular category (ex. “MA” OR “NY”),
   * a user will once again click on the filter category name or plus button adjacent to it.
   * When they do so, a new text field will appear below the datapoint(s) already entered by the user.
   */
  multiple: _propTypes.default.bool,

  /**
   * Callback function called on any filter change. Return changed data structure
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Optional date format string used a placeholder and validator for the masked input
   */
  datePlaceholder: _propTypes.default.string,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};
SovosFilterDateInput.defaultProps = {
  data: [],
  multiple: false,
  datePlaceholder: 'MM/DD/YYYY'
};

var _default = (0, _styles.withStyles)(styles)(SovosFilterDateInput);

exports.default = _default;