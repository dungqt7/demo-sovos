"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SovosMonthSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _DateRange = _interopRequireDefault(require("@material-ui/icons/DateRange"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _SovosFlatButton = _interopRequireDefault(require("../sovos-flat-button/SovosFlatButton"));

var _SovosIconButton = _interopRequireDefault(require("../sovos-icon-button/SovosIconButton"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doubleClickMilliseconds = 200;
var styles = {
  root: {
    display: 'inline-block',
    position: 'relative',
    width: 'fit-content'
  },
  calendarIcon: {
    paddingRight: 8
  },
  currentSelectionButton: {
    textAlign: 'left',
    minWidth: 150,
    height: 45,
    maxHeight: 45,
    minHeight: 45
  },
  nextPrevButton: {
    width: 25,
    height: 25
  },
  dropdown: {
    display: 'flex',
    width: 200,
    padding: 10
  },
  months: {
    paddingRight: 10,
    flex: 1
  },
  years: {
    borderLeft: "1px solid ".concat(_sovosColors.borderColor),
    paddingLeft: 10,
    flex: 1
  },
  menuItem: {
    lineHeight: '32px',
    height: 32,
    padding: '0 16px',
    textAlign: 'left',
    zIndex: 999
  },
  widget: {
    backgroundColor: _sovosColors.neutralWhite,
    height: 45,
    display: 'flex',
    alignItems: 'center'
  }
};
var selectedStyle = {
  backgroundColor: _sovosColors.purple,
  color: _sovosColors.neutralWhite
};

function handleClick(monthChangeFunction) {
  var timeout;
  var clickCount = 0;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    clickCount += 1;
    timeout = setTimeout(function () {
      monthChangeFunction(clickCount);
      timeout = null;
      clickCount = 0;
    }, doubleClickMilliseconds);
  };
}

var _ref =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowLeft.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowRight.default, null);

var SovosMonthSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosMonthSelector, _React$Component);

  function SovosMonthSelector(props) {
    var _this;

    _classCallCheck(this, SovosMonthSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosMonthSelector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onValueChanged", function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.getOutput());
      }

      _this.hideMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "setStateAndTriggerUpdateEvent", function (state) {
      _this.setState(state, _this.onValueChanged);
    });

    _defineProperty(_assertThisInitialized(_this), "getOutput", function () {
      switch (_this.props.format) {
        case 'month-name':
          return {
            month: _this.props.monthsFull[_this.state.selectedMonth],
            year: _this.state.selectedYear
          };

        case 'number':
          return {
            month: _this.state.selectedMonth,
            year: _this.state.selectedYear
          };

        default:
          throw new Error("Unrecognized format '".concat(_this.props.format, "' in SovosMonthSelector."));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showMenu", function (event) {
      return _this.setState({
        showMenu: true,
        anchorElement: event.currentTarget
      }, function () {
        return _this.props.onToggle(true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideMenu", function () {
      return _this.setState({
        showMenu: false
      }, function () {
        return _this.props.onToggle(false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectMonth", function (month) {
      return _this.setStateAndTriggerUpdateEvent({
        selectedMonth: month
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectYear", function (year) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;
      var selectedMonth = _this.state.selectedMonth;
      var newState = {
        selectedYear: year
      };

      if (year === minDate.getFullYear()) {
        newState.selectedMonth = Math.max(minDate.getMonth(), selectedMonth);
      }

      if (year === maxDate.getFullYear()) {
        newState.selectedMonth = Math.min(maxDate.getMonth(), selectedMonth);
      }

      _this.setStateAndTriggerUpdateEvent(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "canIncreaseMonth", function () {
      var maxDate = _this.props.maxDate;
      var _this$state = _this.state,
          selectedYear = _this$state.selectedYear,
          selectedMonth = _this$state.selectedMonth;

      if (selectedYear !== maxDate.getFullYear()) {
        return true;
      }

      return selectedMonth < maxDate.getMonth();
    });

    _defineProperty(_assertThisInitialized(_this), "canDecreaseMonth", function () {
      var minDate = _this.props.minDate;
      var _this$state2 = _this.state,
          selectedYear = _this$state2.selectedYear,
          selectedMonth = _this$state2.selectedMonth;

      if (selectedYear !== minDate.getFullYear()) {
        return true;
      }

      return selectedMonth > minDate.getMonth();
    });

    _defineProperty(_assertThisInitialized(_this), "nextMonth", function (monthsToAdd) {
      if (!_this.canIncreaseMonth()) {
        return;
      }

      var _this$state3 = _this.state,
          selectedYear = _this$state3.selectedYear,
          selectedMonth = _this$state3.selectedMonth;
      var newState = {
        selectedYear: selectedYear,
        selectedMonth: selectedMonth
      };
      newState.selectedMonth += monthsToAdd;

      if (newState.selectedMonth > 11) {
        newState.selectedYear = selectedYear + 1;
        newState.selectedMonth = 0;
      }

      _this.setStateAndTriggerUpdateEvent(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "prevMonth", function (monthsToRemove) {
      if (!_this.canDecreaseMonth()) {
        return;
      }

      var _this$state4 = _this.state,
          selectedYear = _this$state4.selectedYear,
          selectedMonth = _this$state4.selectedMonth;
      var newState = {
        selectedYear: selectedYear,
        selectedMonth: selectedMonth
      };
      newState.selectedMonth -= monthsToRemove;

      if (newState.selectedMonth < 0) {
        newState.selectedYear = selectedYear - 1;
        newState.selectedMonth = 11;
      }

      _this.setStateAndTriggerUpdateEvent(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonths", function () {
      var _this$props2 = _this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          classes = _this$props2.classes;
      var _this$state5 = _this.state,
          selectedMonth = _this$state5.selectedMonth,
          selectedYear = _this$state5.selectedYear;
      return _this.props.monthsAbbreviated.map(function (item, index) {
        var disabled = selectedYear === minDate.getFullYear() && index < minDate.getMonth() || selectedYear === maxDate.getFullYear() && index > maxDate.getMonth();
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosMonthSelector__month--".concat(item), classes.menuItem),
          key: "month-".concat(item),
          style: index === selectedMonth ? selectedStyle : undefined,
          disabled: disabled,
          onClick: disabled ? null : function () {
            return _this.selectMonth(index);
          }
        }, item);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderYears", function () {
      var _this$props3 = _this.props,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          classes = _this$props3.classes;
      var years = [];

      for (var year = minDate.getFullYear(); year <= maxDate.getFullYear(); year += 1) {
        years.push(year);
      }

      return years.map(function (item) {
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosMonthSelector__year--".concat(item), classes.menuItem),
          key: "year-".concat(item),
          style: item === _this.state.selectedYear ? selectedStyle : undefined,
          onClick: function onClick() {
            return _this.selectYear(item);
          }
        }, item);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDropdownMenu", function () {
      var classes = _this.props.classes;
      return _react.default.createElement(_Popover.default, {
        open: _this.state.showMenu,
        anchorEl: _this.state.anchorElement,
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        onClose: _this.hideMenu,
        className: "sovosMonthSelector__popover"
      }, _react.default.createElement("div", {
        className: classes.dropdown
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosMonthSelector__months', classes.months)
      }, _this.renderMonths()), _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosMonthSelector__years', classes.years)
      }, _this.renderYears())));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWidget", function () {
      var classes = _this.props.classes;
      var today = new Date();
      var label = today.getMonth() === _this.state.selectedMonth && today.getFullYear() === _this.state.selectedYear ? 'This Month' : "".concat(_this.props.monthsAbbreviated[_this.state.selectedMonth], " ").concat(_this.state.selectedYear);
      return _react.default.createElement("div", {
        className: classes.widget
      }, _react.default.createElement(_Tooltip.default, {
        title: "Go to a specific month"
      }, _react.default.createElement(_SovosFlatButton.default, {
        className: (0, _classnames.default)('sovosMonthSelector__selectButton', classes.currentSelectionButton),
        color: _sovosColors.purple,
        onClick: _this.showMenu
      }, _react.default.createElement(_DateRange.default, {
        className: classes.calendarIcon
      }), ' ', label)), _react.default.createElement(_SovosIconButton.default, {
        className: (0, _classnames.default)('sovosMonthSelector__previousButton', classes.nextPrevButton),
        color: _sovosColors.purple,
        onClick: _this.prevMonth,
        TooltipProps: {
          title: 'Previous Month'
        },
        disabled: !_this.canDecreaseMonth()
      }, _ref), _react.default.createElement(_SovosIconButton.default, {
        className: (0, _classnames.default)('sovosMonthSelector__nextButton', classes.nextPrevButton),
        color: _sovosColors.purple,
        onClick: _this.nextMonth,
        TooltipProps: {
          title: 'Next Month'
        },
        disabled: !_this.canIncreaseMonth()
      }, _ref2));
    });

    var _selectedMonth = props.selectedMonth,
        _selectedYear = props.selectedYear,
        _minDate = props.minDate,
        _maxDate = props.maxDate;

    var minYear = _minDate.getFullYear();

    var minMonth = _minDate.getMonth();

    var maxYear = _maxDate.getFullYear();

    var maxMonth = _maxDate.getMonth();

    var _year = _selectedYear;
    var _month = _selectedMonth;

    if (_year < minYear) {
      _year = minYear;
      _month = minMonth;
    } else if (_year === minYear && _month < minMonth) {
      _month = minMonth;
    } else if (_year > maxYear) {
      _year = maxYear;
      _month = maxMonth;
    } else if (_year === maxMonth && _month > maxMonth) {
      _month = maxMonth;
    }

    _this.state = {
      anchorElement: null,
      showMenu: false,
      selectedMonth: _month,
      selectedYear: _year
    };
    _this.nextMonth = handleClick(_this.nextMonth);
    _this.prevMonth = handleClick(_this.prevMonth);
    return _this;
  }

  _createClass(SovosMonthSelector, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          className = _this$props4.className,
          style = _this$props4.style;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosMonthSelector', classes.root, className),
        style: style
      }, this.renderWidget(), this.renderDropdownMenu());
    }
  }]);

  return SovosMonthSelector;
}(_react.default.Component);

exports.SovosMonthSelector = SovosMonthSelector;

_defineProperty(SovosMonthSelector, "defaultProps", {
  onToggle: function onToggle() {},
  onChange: function onChange() {},
  minDate: new Date(new Date().getFullYear(), 0),
  maxDate: new Date(new Date().getFullYear(), 11),
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth(),
  format: 'number',
  className: undefined,
  style: undefined,
  monthsAbbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
});

_defineProperty(SovosMonthSelector, "displayName", 'MonthSelector');

SovosMonthSelector.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  selectedMonth: _propTypes.default.number,
  selectedYear: _propTypes.default.number,
  minDate: _propTypes.default.instanceOf(Date),
  maxDate: _propTypes.default.instanceOf(Date),
  format: _propTypes.default.oneOf(['number', 'month-name']),
  monthsAbbreviated: _propTypes.default.arrayOf(_propTypes.default.string),
  monthsFull: _propTypes.default.arrayOf(_propTypes.default.string),
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosMonthSelector);

exports.default = _default;