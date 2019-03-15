"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.treeListItemPropTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../../themes/sovos-colors");

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

var treeListItemShape = {
  content: _propTypes.default.node.isRequired,
  id: _propTypes.default.string.isRequired,
  isExpandOnly: _propTypes.default.bool
};
treeListItemShape.nestedItems = _propTypes.default.arrayOf(_propTypes.default.shape(treeListItemShape));

var treeListItemPropTypes = _propTypes.default.shape(treeListItemShape);

exports.treeListItemPropTypes = treeListItemPropTypes;
var styles = {
  root: {
    minWidth: 250,
    fontSize: 14,
    cursor: 'pointer'
  },
  item: {
    display: 'flex',
    padding: '8px 10px 3px 8px',
    height: 20,
    '&:hover': {
      backgroundColor: _sovosColors.grayLight,
      color: _sovosColors.black
    }
  },
  toggleIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
    '&:hover': {
      color: _sovosColors.black
    }
  },
  itemText: {
    flexGrow: 1,
    minWidth: 0
  },
  nestedItem: {
    paddingLeft: 20
  }
};

var TreeListItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeListItem, _PureComponent);

  function TreeListItem(props) {
    var _this;

    _classCallCheck(this, TreeListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeListItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onNotSelectableItemClick", function () {
      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function () {
      return _this.props.onClick(_this.props.item);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function () {
      return _this.props.onExpand(_this.id, _this.props.item);
    });

    _defineProperty(_assertThisInitialized(_this), "isExpanded", function () {
      return _this.props.expandedItems[_this.id];
    });

    var parent = props.parentId ? "".concat(props.parentId, "_") : '';
    _this.id = "".concat(parent).concat(props.item.id);
    return _this;
  }

  _createClass(TreeListItem, [{
    key: "renderToggle",
    value: function renderToggle() {
      var _this$props = this.props,
          item = _this$props.item,
          classes = _this$props.classes;

      if (item.nestedItems) {
        return _react.default.createElement("div", {
          onClick: this.toggleExpand
        }, _react.default.createElement(this.isExpanded() ? _KeyboardArrowDown.default : _KeyboardArrowRight.default, {
          classes: {
            root: classes.toggleIcon
          },
          className: 'sovosTreeListItem__toggle'
        }));
      }

      return null;
    }
  }, {
    key: "renderNestedItems",
    value: function renderNestedItems() {
      var _this2 = this;

      var _this$props2 = this.props,
          item = _this$props2.item,
          classes = _this$props2.classes,
          onClick = _this$props2.onClick,
          onExpand = _this$props2.onExpand,
          expandedItems = _this$props2.expandedItems;

      if (item.nestedItems && this.isExpanded()) {
        return _react.default.createElement("div", {
          className: classes.nestedItem
        }, item.nestedItems.map(function (cc) {
          return _react.default.createElement(TreeListItem, {
            key: cc.id,
            item: cc,
            onClick: onClick,
            onExpand: onExpand,
            parentId: _this2.id,
            expandedItems: expandedItems,
            classes: classes
          });
        }));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          item = _this$props3.item,
          classes = _this$props3.classes;
      var onClick = this.onNotSelectableItemClick;

      if (!item.isExpandOnly) {
        onClick = this.onItemClick;
      } else if (item.nestedItems) {
        onClick = this.toggleExpand;
      }

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosTreeListItem', classes.root)
      }, _react.default.createElement("div", {
        className: classes.item
      }, this.renderToggle(), _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosTreeListItem__text', classes.itemText),
        onClick: onClick
      }, item.content)), this.renderNestedItems());
    }
  }]);

  return TreeListItem;
}(_react.PureComponent);

_defineProperty(TreeListItem, "defaultProps", {
  parentId: ''
});

TreeListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  item: treeListItemPropTypes.isRequired,
  onClick: _propTypes.default.func.isRequired,
  onExpand: _propTypes.default.func.isRequired,
  expandedItems: _propTypes.default.object.isRequired,
  parentId: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(TreeListItem);

exports.default = _default;