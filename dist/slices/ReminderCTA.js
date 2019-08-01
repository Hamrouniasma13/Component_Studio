"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Image = (0, _styled["default"])('div')(function (_ref) {
  var background = _ref.background,
      theme = _ref.theme,
      colorIndex = _ref.colorIndex;
  return _defineProperty({
    borderRadius: '4px',
    padding: '30px 20px',
    backgroundImage: "url(".concat(background, ")"),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundOrigin: 'border-box',
    color: theme.colors[colorIndex]
  }, theme.media.tablet, {
    padding: '30px'
  });
});
var Title = (0, _styled["default"])(_Text["default"])({
  '&:not(:last-child)': {
    marginBottom: '15px'
  }
});
var Content = (0, _styled["default"])(_Text["default"])({
  maxWidth: '360px',
  lineHeight: '1.56em',
  '&:not(:last-child)': {
    marginBottom: '30px'
  }
});

function ReminderCTA(_ref3) {
  var background = _ref3.background,
      title = _ref3.title,
      content = _ref3.content,
      action = _ref3.action,
      dark = _ref3.dark;
  var colorIndex = dark ? 'white' : 'text';
  return _react["default"].createElement(_Container["default"], null, _react["default"].createElement(Image, {
    background: background,
    colorIndex: colorIndex
  }, title && _react["default"].createElement(Title, {
    size: "typo3",
    tag: "span"
  }, title), content && _react["default"].createElement(Content, null, content), action && _react["default"].createElement(_Button["default"], {
    href: action.url,
    color: "white"
  }, action.label)));
}

ReminderCTA.propTypes = {
  /**
   * Image, used as background
   */
  background: _propTypes["default"].string.isRequired,

  /**
   * Title
   */
  title: _propTypes["default"].string,

  /**
   * Content, can be element(s)
   */
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),

  /**
   * Button
   */
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),

  /**
   * Tell us if the image is dark or not
   */
  dark: _propTypes["default"].bool
};
ReminderCTA.defaultProps = {
  dark: false
};
var _default = ReminderCTA;
exports["default"] = _default;