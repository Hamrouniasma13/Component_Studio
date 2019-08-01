"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuttingTitle = CuttingTitle;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      background = _ref.background;
  return _ref2 = {
    paddingTop: '20px',
    paddingBottom: '20px',
    background: background || theme.colors.primary
  }, _defineProperty(_ref2, theme.media.tablet, {
    paddingTop: '80px',
    paddingBottom: '80px'
  }), _defineProperty(_ref2, theme.media.laptop, {
    paddingTop: '60px',
    paddingBottom: '60px'
  }), _ref2;
});
var ContentContainer = (0, _styled["default"])('div')(function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({
    textAlign: 'center'
  }, theme.media.tablet, {
    padding: '0 30px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  });
});
var Image = (0, _styled["default"])('img')(function (_ref5) {
  var _ref6;

  var theme = _ref5.theme;
  return _ref6 = {
    width: '100%',
    maxWidth: '320px',
    marginBottom: '30px'
  }, _defineProperty(_ref6, theme.media.tablet, {
    marginBottom: 0 // width: 'auto'

  }), _defineProperty(_ref6, theme.media.laptop, {
    marginLeft: '20px'
  }), _defineProperty(_ref6, theme.media.desktop, {
    marginLeft: '40px'
  }), _ref6;
});
var Title = (0, _styled["default"])(_Text["default"])(function (_ref7) {
  var theme = _ref7.theme;
  return _defineProperty({
    color: '#fff',
    marginBottom: '40px'
  }, theme.media.desktop, {
    marginBottom: '50px'
  });
});
var StyledButton = (0, _styled["default"])(_Button["default"])(function (_ref9) {
  var theme = _ref9.theme;
  return _defineProperty({
    width: '100%'
  }, theme.media.tablet, {
    width: 'auto'
  });
});

function CuttingTitle(_ref11) {
  var title = _ref11.title,
      background = _ref11.background,
      image = _ref11.image,
      action = _ref11.action;
  return _react["default"].createElement(Wrapper, {
    background: background
  }, _react["default"].createElement(_Container["default"], null, _react["default"].createElement(ContentContainer, null, image ? _react["default"].createElement(Image, image) : null, _react["default"].createElement("div", null, _react["default"].createElement(Title, {
    size: "typo1",
    tag: "h1"
  }, title), action ? _react["default"].createElement("div", null, _react["default"].createElement(StyledButton, {
    ghost: true,
    href: action.url
  }, action.label)) : null))));
}

CuttingTitle.propTypes = {
  /**
   * Title
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * Background color, default to theme.colors.primary
   */
  background: _propTypes["default"].string,

  /**
   * Image on the right of the component
   */
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string.isRequired
  }),

  /**
   * Action at the bottom of the component
   */
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};
var _default = CuttingTitle;
exports["default"] = _default;