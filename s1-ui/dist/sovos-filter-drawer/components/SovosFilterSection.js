"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../../themes/sovos-colors");

var _SovosIconButton = _interopRequireDefault(require("../../sovos-icon-button/SovosIconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      padding: '15px 0',
      fontSize: 12,
      fontWeight: 'normal',
      borderBottom: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.1),
      width: '100%',
      boxSizing: 'border-box'
    },
    label: {
      color: theme.palette.secondary.main,
      fontWeight: 'bolder',
      fontSize: 13,
      height: 24,
      lineHeight: '24px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    left: {
      alignSelf: 'flex-start',
      margin: 0
    },
    right: {
      alignSelf: 'flex-end',
      margin: 0
    },
    row: {
      whiteSpace: 'nowrap',
      height: 24,
      width: '100%',
      display: 'flex'
    },
    button: {
      marginLeft: 4
    }
  };
};
/**
 * *SovosFilterSection* is subcomponents in the filter drawer to provide a wide range of selectors. Examples: checkbox lists, date range, slider
 */


var _ref =
/*#__PURE__*/
_react.default.createElement(_Clear.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_SovosIconButton.default, {
  size: "extraSmall",
  className: "sovos-filter-ection__addButton",
  color: _sovosColors.purple
}, _react.default.createElement(_Add.default, null));

var SovosFilterSection =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SovosFilterSection, _React$PureComponent);

  function SovosFilterSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosFilterSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosFilterSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getRows", function (classes) {
      return _this.props.data.map(function (entry, index) {
        return _react.default.createElement("div", {
          key: index,
          className: classes.row
        }, _this.props.getRow({
          index: index,
          entry: entry,
          handleChange: _this.handleChange(index),
          handleBlur: _this.handleBlur
        }), _this.props.removeEnabled && _react.default.createElement("div", {
          className: classes.button
        }, _react.default.createElement(_SovosIconButton.default, {
          size: "extraSmall",
          onClick: _this.handleRemove(index),
          color: _sovosColors.purple,
          className: "sovos-filter-ection__clearButton"
        }, _ref)));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNewEntry", function (entry, newValue) {
      var dataValueName = _this.props.dataValueName;
      return dataValueName ? _objectSpread({}, entry, _defineProperty({}, dataValueName, newValue)) : newValue;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (index) {
      return function (event, newValue) {
        var data = _this.props.data.map(function (entry, i) {
          return i === index ? _this.getNewEntry(entry, newValue === undefined ? event.target.value : newValue) : entry;
        });

        _this.handleOnChange(data);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemove", function (index) {
      return function () {
        var filtredData = _this.props.data.filter(function (entry, i) {
          return i !== index;
        });

        var data = _this.props.onRemove ? _this.props.onRemove(filtredData) : filtredData;

        _this.handleOnChange(data);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var filtredData = _this.props.data.filter(function (entry) {
        return !!entry;
      });

      var data = _this.props.onBlur ? _this.props.onBlur(filtredData) : filtredData;

      _this.handleOnChange(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAdd", function () {
      _this.handleOnChange([].concat(_toConsumableArray(_this.props.data), [null]));
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (data) {
      if (_this.props.onChange) {
        _this.props.onChange(data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          label = _this$props.label,
          addEnabled = _this$props.addEnabled,
          multiple = _this$props.multiple,
          data = _this$props.data,
          className = _this$props.className;

      var rows = _this.getRows(classes);

      var addable = addEnabled && (multiple || data.length < 1);
      var onClick = addable ? {
        onClick: _this.handleAdd
      } : {};
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, 'sovosFilterSection', classes.root)
      }, _react.default.createElement("div", _extends({
        className: (0, _classnames.default)('sovosFilterSection__label', classes.label)
      }, onClick), _react.default.createElement("p", {
        className: classes.left
      }, label), addable && _react.default.createElement("p", {
        className: classes.right
      }, _ref2)), rows);
    });

    return _this;
  }

  return SovosFilterSection;
}(_react.default.PureComponent);

SovosFilterSection.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Mandatory label for section
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Array of objects, that are used to generate rows. If there is onChange function, it'll be called when specific row is changed
   */
  data: _propTypes.default.array,

  /** Function that return row. */
  getRow: _propTypes.default.func.isRequired,

  /** Is it possible to add row. */
  addEnabled: _propTypes.default.bool,

  /** Is it possible to remove row. */
  removeEnabled: _propTypes.default.bool,

  /**
   * Callback function called on any filter change. Return changed data structure.
   * You can use also specific onChange for every record at data.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback function called on any filter blur. Return changed data structure.
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback function called on any filter removed. Return changed data structure.
   */
  onRemove: _propTypes.default.func,

  /**
   * Multiple datapoints allowed.
   * If a user wishes to enter multiple datapoints of a particular category (ex. “MA” OR “NY”),
   * a user will once again click on the filter category name or plus button adjacent to it.
   * When they do so, a new text field will appear below the datapoint(s) already entered by the user.
   */
  multiple: _propTypes.default.bool,

  /**
   * Name of the changed value in row in data structure. Do not define it if data is only list of values
   */
  dataValueName: _propTypes.default.string,

  /**
   * ClassName to apply to the top component
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};
SovosFilterSection.defaultProps = {
  data: [],
  addEnabled: false,
  removeEnabled: false,
  multiple: false,
  onChange: undefined,
  onBlur: undefined,
  onRemove: undefined,
  dataValueName: undefined,
  className: ''
};

var _default = (0, _styles.withStyles)(getStyles)(SovosFilterSection);
/* eslint-enable react/no-array-index-key */


exports.default = _default;