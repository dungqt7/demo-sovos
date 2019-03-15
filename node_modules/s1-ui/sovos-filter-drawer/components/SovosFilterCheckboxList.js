"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _sovosCheckbox = _interopRequireDefault(require("../../sovos-checkbox"));

var _SovosFilterSection = _interopRequireDefault(require("./SovosFilterSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  checkbox: {
    height: 24,
    width: 16,
    marginRight: 8,
    '& svg': {
      height: '16px !important',
      width: '16px !important'
    }
  },
  label: {
    lineHeight: '24px',
    margin: 0
  }
};

var getCheckboxRow = function getCheckboxRow(_ref) {
  var classes = _ref.classes,
      checkedItems = _ref.checkedItems,
      label = _ref.entry.label,
      handleChange = _ref.handleChange;
  return _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_sovosCheckbox.default, {
      checked: checkedItems.findIndex(function (item) {
        return item.label === label;
      }) >= 0,
      onChange: handleChange,
      className: (0, _classnames.default)('sovosFilterCheckboxListt__input', classes.checkbox),
      color: "secondary"
    }),
    label: label,
    className: classes.label
  });
};

getCheckboxRow.propTypes = process.env.NODE_ENV !== "production" ? {
  checkedItems: _propTypes.default.array.isRequired,
  classes: _propTypes.default.object.isRequired,
  entry: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired
} : {};

var getRow = function getRow(classes, checkedItems) {
  return function (props) {
    return getCheckboxRow(_objectSpread({
      classes: classes,
      checkedItems: checkedItems
    }, props));
  };
};
/**
 * SovosFilterCheckboxes is used for short lists. This subcomponent consists of a label and a checklist that is sent by the product
 *
 * Props from the mui SovosFilterSection
 */


var SovosFilterCheckboxList = function SovosFilterCheckboxList(_ref2) {
  var classes = _ref2.classes,
      label = _ref2.label,
      data = _ref2.data,
      listItems = _ref2.listItems,
      onChange = _ref2.onChange;

  var handleChange = function handleChange(list) {
    var newData = Array.from(data); // We get a list of checkbox items with a checked state appended when the value changes
    // Loop through the list of items and remove any from the selected list that have been explictly
    // unchecked and append any newly checked items

    list.forEach(function (li) {
      var existingIdx = newData.findIndex(function (d) {
        return d.label === li.label;
      });

      if (existingIdx >= 0 && li.checked === false) {
        newData.splice(existingIdx, 1);
      } else if (existingIdx < 0 && li.checked === true) {
        newData.push({
          label: li.label,
          value: li.value
        });
      }
    });
    onChange(newData);
  }; // Switch list items and data. The section will render a row for each data item, which should be individual checkboxes. The checked state
  // needs to separate from the list of items


  return _react.default.createElement(_SovosFilterSection.default, {
    label: label,
    dataValueName: "checked",
    getRow: getRow(classes, data),
    data: listItems,
    onChange: handleChange,
    className: "sovosFilterCheckboxListt"
  });
};

SovosFilterCheckboxList.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _SovosFilterSection.default.propTypes, {
  /**
   * Mandatory label for section
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Array of objects, that are properties for Checkboxes. It's possible to override props from  mui Checkbox here
   */
  listItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Mandatory label for Checkbox
     */
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string
  })).isRequired,

  /**
   * Array of checked items
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
    * label to find matching Checkbox
    */
    label: _propTypes.default.string.isRequired
  })),

  /**
   * Callback function called on any filter change. Return changed data structure
   */
  onChange: _propTypes.default.func.isRequired
}) : {};
SovosFilterCheckboxList.defaultProps = {
  data: []
};

var _default = (0, _styles.withStyles)(styles)(SovosFilterCheckboxList);

exports.default = _default;