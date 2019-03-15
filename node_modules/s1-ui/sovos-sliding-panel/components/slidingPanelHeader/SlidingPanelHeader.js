'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Tabs = require('material-ui/Tabs');

var _sovosRaisedButton = require('../../../sovos-raised-button');

var _sovosRaisedButton2 = _interopRequireDefault(_sovosRaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' });

var CloseIcon = function CloseIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

var SlidingPanelHeader = function (_React$Component) {
  _inherits(SlidingPanelHeader, _React$Component);

  function SlidingPanelHeader() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SlidingPanelHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SlidingPanelHeader.__proto__ || Object.getPrototypeOf(SlidingPanelHeader)).call.apply(_ref2, [this].concat(args))), _this), _this.headerContainerStyle = {
      borderBottom: _this.props.showHeaderBorderBottom ? '1px solid #ebeef0' : 'none',
      height: _this.props.actionButtons.length > 0 || _this.props.tabs.length > 0 ? 100 : 50
    }, _this.renderAdditionalButton = function (button, index) {
      var _this$props = _this.props,
          closeButtonIndex = _this$props.closeButtonIndex,
          onCloseClick = _this$props.onCloseClick;


      if (closeButtonIndex === index) {
        return _react2.default.cloneElement(button, { key: index, onClick: onCloseClick });
      }

      return _react2.default.cloneElement(button, { key: index });
    }, _this.renderTab = function (tab, index) {
      var isSelected = typeof tab.selected === 'function' ? tab.selected() : tab.selected;
      var style = { color: isSelected ? 'rgb(64,192,240)' : 'rgba(0,0,0,.6)' };

      return _react2.default.createElement(_Tabs.Tab, {
        key: 'Tab' + index + '-' + tab.label,
        label: tab.label,
        onActive: tab.onClick,
        style: style
      });
    }, _this.renderTabSection = function () {
      var tabs = _this.props.tabs;


      if (!tabs || tabs.length === 0) return null;

      var width = 100 * tabs.length;
      var containerWidth = 1000;
      width = Math.min(width, containerWidth);

      var tabItemStyle = { width: width, background: '#FFF', height: 48 };

      return _react2.default.createElement(
        _Tabs.Tabs,
        {
          className: 'sovos-panel__header-tabs-section',
          style: { paddingLeft: 20, height: 42 },
          tabItemContainerStyle: tabItemStyle,
          inkBarStyle: { height: 4 }
        },
        tabs.map(_this.renderTab)
      );
    }, _this.renderCloseButton = function () {
      var _this$props2 = _this.props,
          showCloseButton = _this$props2.showCloseButton,
          onCloseClick = _this$props2.onCloseClick;


      return showCloseButton ? _react2.default.createElement(CloseIcon, {
        className: 'sliding-panel__header-icon',
        onClick: onCloseClick,
        hoverColor: _this.hoverColor
      }) : null;
    }, _this.renderActionButton = function (_ref3) {
      var label = _ref3.label,
          callback = _ref3.callback,
          buttonProps = _objectWithoutProperties(_ref3, ['label', 'callback']);

      return _react2.default.createElement(_sovosRaisedButton2.default, _extends({}, buttonProps, {
        key: label.replace(/ /g, ''),
        label: label,
        onClick: callback
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlidingPanelHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          titleStyle = _props.titleStyle,
          actionButtons = _props.actionButtons;

      return _react2.default.createElement(
        'div',
        { className: 'sliding-panel__header', style: this.headerContainerStyle },
        _react2.default.createElement(
          'div',
          { className: 'sliding-panel__header-row1' },
          _react2.default.createElement(
            'div',
            { className: 'sliding-panel__header-title', style: titleStyle },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'sliding-panel__header-icon-container' },
            this.props.additionalButtons.map(this.renderAdditionalButton)
          ),
          this.renderCloseButton()
        ),
        _react2.default.createElement(
          'div',
          { className: 'sliding-panel__header-row2' },
          this.renderTabSection(),
          _react2.default.createElement(
            'div',
            { className: 'sliding-panel__action-container' },
            actionButtons.map(this.renderActionButton)
          )
        )
      );
    }
  }]);

  return SlidingPanelHeader;
}(_react2.default.Component);

SlidingPanelHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object.isRequired,
  onCloseClick: _propTypes2.default.func.isRequired,
  additionalButtons: _propTypes2.default.array,
  closeButtonIndex: _propTypes2.default.number,
  showHeaderBorderBottom: _propTypes2.default.bool.isRequired,
  actionButtons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    callback: _propTypes2.default.func,
    style: _propTypes2.default.object
  })),
  showCloseButton: _propTypes2.default.bool,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }))
} : {};

SlidingPanelHeader.defaultProps = {
  title: '',
  additionalButtons: [],
  actionButtons: [],
  showCloseButton: true,
  closeButtonIndex: undefined,
  tabs: []
};

exports.default = SlidingPanelHeader;