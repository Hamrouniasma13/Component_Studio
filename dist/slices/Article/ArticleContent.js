"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ArticleContent;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../../components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ArticleContent(_ref) {
  var children = _ref.children;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    article: _defineProperty({
      marginBottom: 50,
      fontSize: 16,
      lineHeight: 1.5,
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      color: theme.colors.text
    }, theme.media.tablet, {
      fontSize: 18,
      lineHeight: 1.67
    })
  };
  return (0, _core.jsx)(_Container["default"], {
    article: true,
    css: styles.article
  }, children);
}