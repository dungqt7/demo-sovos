"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

var _styles = require("@material-ui/core/styles");

var _SovosDrawer = _interopRequireDefault(require("../sovos-drawer/SovosDrawer"));

var _SovosIconButton = _interopRequireDefault(require("../sovos-icon-button/SovosIconButton"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '7px 0'
  },
  hiddenColumn: {
    color: _sovosColors.black,
    opacity: '.54'
  },
  visibleColumn: {
    color: _sovosColors.purple
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_Visibility.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Divider.default, {
  key: "divider"
});

var SovosColumnDrawer =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosColumnDrawer, _Component);

  function SovosColumnDrawer(props) {
    var _this;

    _classCallCheck(this, SovosColumnDrawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosColumnDrawer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getIncomingColumns", function () {
      var originalColumns = _this.props.columns.map(function (column) {
        return Object.assign({}, column);
      });

      _this.setState({
        columns: originalColumns
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function (columnToChange) {
      _this.setState(function (state) {
        var newColumns = Object.assign([], state.columns);
        newColumns.forEach(function (column) {
          if (column.id === columnToChange.id) {
            column.visible = !column.visible;
          }
        });
        return {
          columns: newColumns
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onApply", function () {
      _this.props.ApplyButtonProps.onClick(_this.state.columns);
    });

    _this.state = {
      columns: []
    };
    return _this;
  }

  _createClass(SovosColumnDrawer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.open && !prevProps.open) {
        this.getIncomingColumns();
      }
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      var _this2 = this;

      var classes = this.props.classes;
      var columns = this.state.columns;
      var visibleColumns = [];
      var hiddenColumns = [];

      if (this.state.columns) {
        var numberOfVisibleColumns = columns.filter(function (column) {
          return column.visible;
        }).length;
        columns.forEach(function (column) {
          if (column.visible) {
            visibleColumns.push(_react.default.createElement("div", {
              key: column.title,
              className: classes.row
            }, _react.default.createElement("div", {
              className: (0, _classnames.default)('sovosColumnDrawer__columnName--visible', classes.visibleColumn)
            }, column.title), numberOfVisibleColumns > 1 ? _react.default.createElement(_SovosIconButton.default, {
              className: "sovosColumnDrawer__columnToggle--visible",
              size: "extraSmall",
              onClick: function onClick() {
                return _this2.toggleVisibility(column);
              },
              color: _sovosColors.purple
            }, _ref) : null));
          } else {
            hiddenColumns.push(_react.default.createElement("div", {
              key: column.title,
              className: classes.row
            }, _react.default.createElement("div", {
              className: (0, _classnames.default)('sovosColumnDrawer__columnName--visible', classes.hiddenColumn)
            }, column.title), _react.default.createElement(_SovosIconButton.default, {
              className: "sovosColumnDrawer__columnToggle--hidden",
              size: "extraSmall",
              onClick: function onClick() {
                return _this2.toggleVisibility(column);
              },
              color: _sovosColors.purple
            }, _react.default.createElement(_VisibilityOff.default, {
              style: {
                color: _sovosColors.black,
                opacity: '.30'
              }
            }))));
          }
        });
      }

      return [visibleColumns, _ref2, hiddenColumns];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          CancelButtonProps = _this$props.CancelButtonProps,
          open = _this$props.open,
          className = _this$props.className,
          style = _this$props.style;
      var onCancel = CancelButtonProps.onClick;
      return _react.default.createElement(_SovosDrawer.default, {
        title: "Show/Hide Columns",
        PrimaryButtonProps: {
          backgroundColor: _sovosColors.purple,
          color: _sovosColors.neutralWhite,
          onClick: this.onApply,
          children: 'Apply',
          className: 'sovosColumnDrawer__applyButton'
        },
        SecondaryButtonProps: {
          backgroundColor: _sovosColors.neutralWhite,
          color: _sovosColors.purple,
          onClick: onCancel,
          children: 'Cancel',
          className: 'sovosColumnDrawer__cancelButton'
        },
        onClose: onCancel,
        open: open,
        className: (0, _classnames.default)('sovosColumnDrawer', className),
        style: style
      }, _react.default.createElement("div", {
        className: classes.root
      }, this.getColumns()));
    }
  }]);

  return SovosColumnDrawer;
}(_react.Component);

_defineProperty(SovosColumnDrawer, "defaultProps", {
  className: undefined,
  style: undefined
});

SovosColumnDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.default.bool.isRequired,
  columns: _propTypes.default.array.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  ApplyButtonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func.isRequired
  }).isRequired,
  CancelButtonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func.isRequired
  }).isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosColumnDrawer);

exports.default = _default;