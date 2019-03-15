"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _reactHelpers = require("../utils/reactHelpers");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    backgroundColor: 'transparent',
    height: 50,
    padding: '0 5px'
  },
  tabsIndicator: {
    height: 4,
    backgroundColor: _sovosColors.buttonBlue
  },
  tabsScrollButtons: {
    flex: '0 0 24px',
    maxWidth: 24
  },
  tabRoot: {
    height: 50,
    minWidth: 50
  },
  tabTextColorPrimary: {
    '&.selected': {
      color: _sovosColors.buttonBlue
    }
  },
  tabLabelContainer: {
    padding: 0
  },
  tabLabel: {
    fontSize: 14
  },
  tabLabelIcon: {
    minHeight: 50
  },
  tabWrapper: {
    flexDirection: 'row',
    padding: '6px 15px'
  },
  tabIcon: {
    fontSize: 18,
    marginRight: 5
  }
};

function cloneIcon(icon, classes) {
  if (!icon) {
    return null;
  }

  return _react.default.cloneElement(icon, {
    classes: {
      root: classes.tabIcon
    }
  });
}

var SovosTabs = function SovosTabs(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      onChange = _ref.onChange,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ["children", "classes", "className", "onChange", "value"]);

  var tabs = (0, _reactHelpers.findChildrenByType)(children, _Tab.default);
  return _react.default.createElement(_Tabs.default, _extends({
    classes: {
      root: classes.root,
      indicator: classes.tabsIndicator,
      scrollButtons: classes.tabsScrollButtons
    },
    className: (0, _classnames.default)('sovosTabs', className),
    variant: "scrollable",
    onChange: onChange,
    value: value,
    textColor: "primary",
    TabIndicatorProps: {
      color: 'primary'
    }
  }, other), tabs.map(function (tab) {
    return _react.default.cloneElement(tab, {
      disableRipple: true,
      className: (0, _classnames.default)('sovosTabs__tab', {
        selected: value === tab.props.value
      }, tab.props.className),
      classes: {
        root: classes.tabRoot,
        textColorPrimary: classes.tabTextColorPrimary,
        label: classes.tabLabel,
        labelContainer: classes.tabLabelContainer,
        wrapper: classes.tabWrapper,
        labelIcon: classes.tabLabelIcon
      },
      icon: cloneIcon(tab.props.icon, classes)
    });
  }));
};

SovosTabs.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  value: _propTypes.default.any,
  onChange: _propTypes.default.func.isRequired
} : {};
SovosTabs.defaultProps = {
  value: undefined,
  className: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosTabs);

exports.default = _default;