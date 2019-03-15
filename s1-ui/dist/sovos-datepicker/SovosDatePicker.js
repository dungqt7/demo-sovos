"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _materialUiPickers = require("material-ui-pickers");

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

var _sovosEnterprise = _interopRequireDefault(require("../themes/sovos-enterprise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shiftBaseTime = function shiftBaseTime(momentTime, utcOffset) {
  var offsetHours = utcOffset < 14 || utcOffset > 14 ? utcOffset / 60 : utcOffset;
  var newHours = momentTime.hours() - offsetHours;
  return momentTime.clone().hours(newHours);
};

var SovosDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosDatePicker, _Component);

  function SovosDatePicker(props) {
    var _this;

    _classCallCheck(this, SovosDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosDatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (_this.props.value !== prevProps.value) {
        _this.setState({
          dateValue: _this.props.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (newValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          timezoneName = _this$props.timezoneName;
      var momentValue = (0, _momentTimezone.default)(newValue) // Set timezone to local
      .utcOffset(-newValue.utcOffset()); // Change timezone to cultureSetting and shift the UTC time

      var shiftedMomentValue = shiftBaseTime(momentValue, _momentTimezone.default.tz(timezoneName).utcOffset()).tz(timezoneName); // shift to configured TZ;

      var dateValue = shiftedMomentValue.toDate();

      _this.setState({
        dateValue: dateValue
      }, function () {
        if (onChange) {
          onChange(null, dateValue);
        }
      });
    });

    _this.state = {
      dateValue: props.value
    };
    return _this;
  }

  _createClass(SovosDatePicker, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          displayName = _this$props2.displayName,
          timezoneName = _this$props2.timezoneName,
          value = _this$props2.value,
          className = _this$props2.className,
          datePickerProps = _objectWithoutProperties(_this$props2, ["onChange", "displayName", "timezoneName", "value", "className"]);

      var dateValue = null;

      if (this.state.dateValue) {
        // shift TZ to browser default (altering UTC time)
        var momentDateValue = shiftBaseTime((0, _momentTimezone.default)(this.state.dateValue), -new Date().getTimezoneOffset());
        dateValue = momentDateValue.toDate();
      }

      return _react.default.createElement(_styles.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)(_objectSpread({}, _sovosEnterprise.default, {
          overrides: {
            MuiPickersDay: {
              selected: {
                backgroundColor: _sovosColors.primaryNavy
              }
            }
          }
        }))
      }, _react.default.createElement(_materialUiPickers.DatePicker, _extends({}, datePickerProps, {
        className: (0, _classnames.default)('sovosDatePicker', className),
        value: dateValue,
        onChange: this.onInputChange
      })));
    }
  }]);

  return SovosDatePicker;
}(_react.Component);

SovosDatePicker.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({
  className: _propTypes.default.string,
  format: _propTypes.default.string,
  timezoneName: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.object
}, _materialUiPickers.DatePicker.propTypes) : {};
SovosDatePicker.defaultProps = {
  className: undefined,
  format: 'YYYY-MM-DD',
  onChange: undefined,
  timezoneName: _momentTimezone.default.tz.guess(),
  value: null
};
SovosDatePicker.displayName = 'DatePicker';
var _default = SovosDatePicker;
exports.default = _default;