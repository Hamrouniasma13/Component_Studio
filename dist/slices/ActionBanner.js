"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActionBanner;
exports.ActionBannerSkeleton = ActionBannerSkeleton;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _SimpleButton = _interopRequireDefault(require("../components/SimpleButton"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _typos = _interopRequireDefault(require("../typos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Breadcumb(_ref) {
  var url = _ref.url,
      label = _ref.label;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      media = _React$useContext.media;

  return (0, _core.jsx)("div", {
    css: _defineProperty({
      margin: 20
    }, media.tablet, {
      margin: 0,
      marginBottom: 20
    })
  }, (0, _core.jsx)(_SimpleButton["default"], {
    href: url,
    icon: "left",
    iconPosition: "left"
  }, label));
}

Breadcumb.propTypes = {
  url: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired
};

function ActionBanner(_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      status = _ref3.status,
      children = _ref3.children,
      breadcumb = _ref3.breadcumb,
      action = _ref3.action;

  var _React$useContext2 = _react["default"].useContext(_core.ThemeContext),
      media = _React$useContext2.media,
      colors = _React$useContext2.colors;

  var styles = {
    wrapper: {
      backgroundColor: colors.smallLightGray,
      paddingTop: '45px',
      paddingBottom: '45px',
      '&:after': {
        display: 'block',
        content: '""',
        clear: 'both'
      }
    },
    container: _defineProperty({
      paddingLeft: 0,
      paddingRight: 0
    }, media.tablet, {
      paddingLeft: 15,
      paddingRight: 15
    }),
    heading: _defineProperty({
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      marginBottom: 30,
      paddingLeft: 15,
      paddingRight: 15,
      '&:last-child': {
        marginBottom: '0'
      }
    }, media.tablet, {
      paddingLeft: 0,
      paddingRight: 0
    }),
    actionButton: _defineProperty({
      label: 'actionButtonactionButtonactionButton'
    }, media.tablet, {
      position: 'absolute',
      top: '0',
      right: '0'
    }),
    statusWrapper: {
      marginLeft: 20
    },
    pill: {
      textTransform: 'upperCase',
      marginLeft: 20,
      lineHeight: '100%'
    },
    description: _objectSpread({}, _typos["default"].paragraph, _defineProperty({
      marginBottom: 40,
      ':last-child': {
        marginBottom: 0
      },
      paddingLeft: 15,
      paddingRight: 15
    }, media.tablet, {
      paddingLeft: 0,
      paddingRight: 0
    }))
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], {
    css: styles.container
  }, breadcumb && (0, _core.jsx)(Breadcumb, breadcumb), (0, _core.jsx)("div", {
    css: styles.heading
  }, (0, _core.jsx)(_Text["default"].h1, null, title), status && (0, _core.jsx)("div", {
    css: styles.statusWrapper
  }, status), action && action.url && action.label ? (0, _core.jsx)(_Button["default"], {
    css: styles.actionButton,
    href: action.url,
    size: "small"
  }, action.label) : null), description && (0, _core.jsx)("div", {
    css: styles.description
  }, description), children));
}

ActionBanner.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  status: _propTypes["default"].element,
  breadcumb: _propTypes["default"].shape(Breadcumb.propTypes),
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};

function ActionBannerSkeleton() {
  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      backgroundColor: theme.colors.smallLightGray,
      paddingTop: '45px',
      paddingBottom: '45px',
      '&:after': {
        display: 'block',
        content: '""',
        clear: 'both'
      }
    },
    container: _defineProperty({
      paddingLeft: 0,
      paddingRight: 0
    }, theme.media.tablet, {
      paddingLeft: 15,
      paddingRight: 15
    }),
    heading: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      '&:last-child': {
        marginBottom: '0'
      }
    }, theme.media.tablet, {
      paddingLeft: 0,
      paddingRight: 0
    }),
    skeletonText: _objectSpread({}, theme.skeletonWave, {
      width: 300
    }),
    skeletonContent: _objectSpread({}, theme.skeletonWave, {
      marginBottom: 15
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], {
    css: styles.container
  }, (0, _core.jsx)("div", {
    css: styles.heading
  }, (0, _core.jsx)(_Text["default"].h1, {
    css: styles.skeletonText
  }, "Lorem Ipsum")), (0, _core.jsx)(_Text["default"].p, {
    css: styles.skeletonContent
  }, "Pariatur excepteur ut ullamco mollit fugiat consequat ea excepteur"), (0, _core.jsx)(_Text["default"].p, {
    css: styles.skeletonContent
  }, "Pariatur excepteur ut ullamco mollit fugiat consequat ea excepteur")));
}