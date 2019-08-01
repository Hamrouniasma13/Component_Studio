"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Notification;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Notification(_ref) {
  var content = _ref.content,
      color = _ref.color,
      action = _ref.action;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      backgroundColor: color,
      padding: 20
    }, theme.media.desktop, {
      padding: '35px 40px',
      display: 'flex',
      alignItems: 'center'
    }),
    content: {
      flex: 1
    },
    action: _defineProperty({
      marginTop: 20
    }, theme.media.desktop, {
      marginTop: 0,
      marginLeft: 30
    })
  };
  return (0, _core.jsx)(_Slice["default"], null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.content
  }, content), action && action.url && (0, _core.jsx)("div", {
    css: styles.action
  }, (0, _core.jsx)(_Button["default"], {
    href: action.url
  }, action.label))));
}

Notification.propTypes = {
  content: _propTypes["default"].any,
  backgroundColor: _propTypes["default"].string,
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};