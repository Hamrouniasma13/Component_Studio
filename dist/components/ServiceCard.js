"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ServiceCard;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpring = require("react-spring");

var _Text = _interopRequireDefault(require("./Text"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ServiceCard(_ref) {
  var _wrapper;

  var category = _ref.category,
      colorKey = _ref.colorKey,
      title = _ref.title,
      content = _ref.content,
      action = _ref.action,
      style = _ref.style;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      position: 'relative',
      borderTop: '1px solid #e5e5e5',
      color: theme.colors.text,
      padding: 30,
      paddingBottom: action && action.url ? 72 : 0,
      display: 'block',
      backgroundColor: '#fff'
    }, _defineProperty(_wrapper, theme.media.laptop, {
      borderRadius: 3,
      border: '1px solid #e5e5e5',
      width: 450,
      marginBottom: 30,
      marginRight: 30,
      '&:nth-of-type(2n)': {
        marginRight: 0
      }
    }), _defineProperty(_wrapper, theme.media.desktop, {
      width: 350,
      '&:nth-of-type(2n)': {
        marginRight: 30
      },
      '&:nth-of-type(3n)': {
        marginRight: 0
      }
    }), _wrapper),
    category: {
      display: 'block',
      marginBottom: 30,
      '&:after': {
        // eslint-disable-next-line quotes
        content: "''",
        display: 'block',
        height: 5,
        width: 40,
        backgroundColor: theme.colors[colorKey] || colorKey,
        position: 'relative',
        top: 12
      }
    },
    action: {
      position: 'absolute',
      bottom: 30,
      right: 30
    }
  };
  return (0, _core.jsx)(_reactSpring.animated.div, {
    style: style,
    css: styles.wrapper
  }, category ? (0, _core.jsx)(_Text["default"], {
    size: "typo6",
    css: styles.category
  }, category) : null, (0, _core.jsx)(_Text["default"].h3, {
    size: "typo2",
    mb: 30
  }, title), (0, _core.jsx)(_Text["default"], {
    tag: "div",
    mb: 30
  }, content), action && action.label && action.url ? (0, _core.jsx)("div", {
    css: styles.action
  }, (0, _core.jsx)(_Button["default"], {
    href: action.url
  }, action.label)) : null);
}

ServiceCard.propTypes = {
  category: _propTypes["default"].string,
  colorKey: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].any,
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};