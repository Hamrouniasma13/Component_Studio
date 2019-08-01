"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContactCTA;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ContactCTA(_ref) {
  var title = _ref.title,
      content = _ref.content,
      image = _ref.image,
      action = _ref.action;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    box: _defineProperty({
      minHeight: 140,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: 3
    }, theme.media.laptop, {
      display: 'flex',
      alignItems: 'center'
    }),
    image: _defineProperty({
      display: 'none',
      maxWidth: 80,
      maxHeight: 80
    }, theme.media.laptop, {
      display: 'inline-block',
      marginRight: 40
    }),
    content: _defineProperty({}, theme.media.laptop, {
      flex: 1,
      alignSelf: 'flex-start'
    }),
    action: _defineProperty({
      marginTop: 15
    }, theme.media.laptop, {
      marginTop: 0,
      marginLeft: 40
    })
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.box
  }, image && (0, _core.jsx)("img", {
    css: styles.image,
    src: image,
    alt: "contact logo"
  }), (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.content
  }, content), action && (0, _core.jsx)("div", {
    css: styles.action
  }, action)));
}

ContactCTA.propTypes = {
  title: _Slice["default"].propTypes.title,
  content: _propTypes["default"].any,
  image: _propTypes["default"].string,
  action: _propTypes["default"].element
};