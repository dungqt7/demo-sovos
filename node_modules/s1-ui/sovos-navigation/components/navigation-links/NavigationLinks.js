"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavigationLinksUnstyled = exports.linkPropTypes = exports.nestedLinkPropsTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _styles = require("@material-ui/core/styles");

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _sovosColors = require("../../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    flexGrow: 1,
    marginTop: 5
  },
  link: {
    fontWeight: 400,
    fontSize: 14,
    opacity: '0.7',
    padding: '11px 12px 11px 16px',
    '&.active': {
      opacity: 1
    }
  },
  linkText: {
    color: _sovosColors.neutralWhite,
    lineHeight: '16px',
    fontSize: 14
  },
  icons: {
    width: 18,
    height: 18,
    marginleft: 7,
    color: _sovosColors.neutralWhite
  },
  nestedList: {
    padding: 0
  },
  nestedListToggle: {
    color: _sovosColors.neutralWhite
  }
};

var nestedLinkPropsTypes = _propTypes.default.shape({
  label: _propTypes.default.string.isRequired,
  action: _propTypes.default.func.isRequired
});

exports.nestedLinkPropsTypes = nestedLinkPropsTypes;

var linkPropTypes = _propTypes.default.shape({
  label: _propTypes.default.string.isRequired,
  icon: _propTypes.default.func.isRequired,
  action: _propTypes.default.func,
  nestedLinks: _propTypes.default.arrayOf(nestedLinkPropsTypes)
});

exports.linkPropTypes = linkPropTypes;

function hasNestedLinks(link) {
  return link.nestedLinks && link.nestedLinks.length > 0;
}

function expandSelectedLink(links, selectedLink) {
  var parentLink = links.find(function (element) {
    if (element.nestedLinks && element.nestedLinks.length > 0) {
      return element.nestedLinks.find(function (e) {
        return e.label === selectedLink;
      }) !== undefined;
    }

    return false;
  });

  if (parentLink) {
    return _defineProperty({}, parentLink.label, true);
  }

  return {};
}

var NavigationLinksUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationLinksUnstyled, _React$Component);

  function NavigationLinksUnstyled(props) {
    var _this;

    _classCallCheck(this, NavigationLinksUnstyled);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationLinksUnstyled).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onLinkClick", function (link) {
      if (hasNestedLinks(link)) {
        _this.setState(function (state) {
          var isOpen = state.expandedLinks[link.label] || false;
          var currentLinks = state.expandedLinks;

          var linksObject = _objectSpread({}, currentLinks, _defineProperty({}, link.label, !isOpen));

          return {
            expandedLinks: linksObject
          };
        });
      } else {
        _this.props.onLinkClick(link.label, link.action, hasNestedLinks);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderNestedLinkArrow", function (link, isNested) {
      if (!isNested && hasNestedLinks(link)) {
        var classes = _this.props.classes;
        return _react.default.createElement(_this.state.expandedLinks[link.label] ? _KeyboardArrowUp.default : _KeyboardArrowDown.default, {
          className: 'sovosNavigationLinks__nestedLinksToggle',
          classes: {
            root: classes.nestedListToggle
          }
        });
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function (link, isNested) {
      if (isNested || !link.icon) {
        return null;
      }

      var classes = _this.props.classes;
      return _react.default.createElement(link.icon, {
        classes: {
          root: classes.icons
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNestedList", function (link, isNested) {
      if (!isNested && hasNestedLinks(link)) {
        var classes = _this.props.classes;
        return _react.default.createElement(_Collapse.default, {
          in: _this.state.expandedLinks[link.label],
          timeout: "auto",
          unmountOnExit: true
        }, _react.default.createElement(_List.default, {
          disablePadding: true,
          className: classes.nestedList
        }, link.nestedLinks.map(function (nestedLink) {
          return _this.renderLinkItem(nestedLink, true);
        })));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderLinkItem", function (link, isNested) {
      var _classNames;

      var _this$props = _this.props,
          selectedLink = _this$props.selectedLink,
          classes = _this$props.classes;
      return _react.default.createElement(_react.default.Fragment, {
        key: link.label
      }, _react.default.createElement(_ListItem.default, {
        button: true,
        disableRipple: true,
        className: (0, _classnames.default)((_classNames = {
          'sovosNavigationLinks__link--nested': isNested,
          sovosNavigationLinks__link: !isNested
        }, _defineProperty(_classNames, classes.link, true), _defineProperty(_classNames, "active", selectedLink === link.label), _classNames)),
        onClick: function onClick() {
          return _this.onLinkClick(link);
        }
      }, _this.renderIcon(link, isNested), _react.default.createElement(_ListItemText.default, {
        inset: isNested,
        primary: link.label,
        classes: {
          primary: classes.linkText
        }
      }), _this.renderNestedLinkArrow(link, isNested)), _this.renderNestedList(link, isNested));
    });

    _this.state = {
      expandedLinks: expandSelectedLink(_this.props.links, _this.props.selectedLink)
    };
    return _this;
  }

  _createClass(NavigationLinksUnstyled, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          links = _this$props2.links,
          classes = _this$props2.classes;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosNavigationLinks', classes.root)
      }, _react.default.createElement(_List.default, {
        style: {
          paddingTop: 0
        }
      }, links.map(function (link) {
        return _this2.renderLinkItem(link);
      })));
    }
  }]);

  return NavigationLinksUnstyled;
}(_react.default.Component);

exports.NavigationLinksUnstyled = NavigationLinksUnstyled;
NavigationLinksUnstyled.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  selectedLink: _propTypes.default.string.isRequired,
  onLinkClick: _propTypes.default.func.isRequired,
  links: _propTypes.default.arrayOf(linkPropTypes).isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(NavigationLinksUnstyled);

exports.default = _default;