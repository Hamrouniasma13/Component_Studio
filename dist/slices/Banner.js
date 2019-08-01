"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Banner;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var coverOpacity = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  background: '#fff',
  opacity: 0.2
};

function Banner(_ref) {
  var _objectSpread2, _wrapper, _separator;

  var background = _ref.background,
      cover = _ref.cover,
      title = _ref.title,
      category = _ref.category,
      subtitle = _ref.subtitle,
      action = _ref.action;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    cover: _objectSpread({
      position: 'relative',
      padding: '40px 0 35px',
      backgroundSize: 'cover'
    }, cover ? {
      backgroundImage: "url(".concat(cover, ")")
    } : {}, (_objectSpread2 = {
      backgroundColor: background || theme.colors.primary,
      backgroundPosition: 'center',
      textAlign: 'center',
      color: theme.colors.white,
      ':after': coverOpacity
    }, _defineProperty(_objectSpread2, theme.media.tablet, {
      padding: '70px 0'
    }), _defineProperty(_objectSpread2, theme.media.laptop, {
      textAlign: 'left'
    }), _objectSpread2)),
    wrapper: (_wrapper = {
      position: 'relative',
      zIndex: 1
    }, _defineProperty(_wrapper, theme.media.tablet, {
      margin: '0 30px'
    }), _defineProperty(_wrapper, theme.media.laptop, {
      margin: '0 130px'
    }), _defineProperty(_wrapper, theme.media.desktop, {
      margin: '0 95px'
    }), _wrapper),
    category: {
      textTransform: 'uppercase',
      color: 'white'
    },
    separator: (_separator = {
      width: '25px',
      height: '1px',
      margin: '15px auto 10px',
      background: 'white'
    }, _defineProperty(_separator, theme.media.tablet, {
      width: '40px',
      margin: '20px auto 15px'
    }), _defineProperty(_separator, theme.media.laptop, {
      margin: '20px 0 15px'
    }), _separator),
    title: _defineProperty({
      marginBottom: '40px'
    }, theme.media.tablet, {
      marginBottom: '30px'
    }),
    subtitle: _defineProperty({
      marginBottom: '35px'
    }, theme.media.tablet, {
      marginBottom: '45px'
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.cover
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, category && (0, _core.jsx)(_Text["default"], {
    size: "typo6",
    css: styles.category
  }, category), category && (0, _core.jsx)("div", {
    css: styles.separator
  }), (0, _core.jsx)(_Text["default"].h1, {
    css: styles.title
  }, title), subtitle && (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.subtitle
  }, subtitle), action && action.url && (0, _core.jsx)(_Button["default"], {
    size: "big",
    href: action.url
  }, action.label))));
}

Banner.propTypes = {
  background: _propTypes["default"].string,
  cover: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  category: _propTypes["default"].string,
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};