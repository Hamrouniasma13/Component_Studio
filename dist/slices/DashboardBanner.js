"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _color = _interopRequireDefault(require("color"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavWrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme,
      background = _ref.background;
  return {
    label: 'DashboardBanner',
    backgroundColor: background ? background : theme.colors.primary,
    paddingTop: 40,
    paddingBottom: 50
  };
});
var Title = (0, _styled["default"])(_Text["default"].h1)(function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return {
    color: theme.colors[color] || color,
    textAlign: 'center',
    marginBottom: '40px',
    textTransform: 'uppercase'
  };
});

var DashboardBanner = function DashboardBanner(_ref3) {
  var backgroundColor = _ref3.backgroundColor,
      colorIndex = _ref3.colorIndex,
      title = _ref3.title,
      children = _ref3.children,
      className = _ref3.className;
  var color = colorIndex ? colorIndex : backgroundColor && backgroundColor.length > 3 && (0, _color["default"])(backgroundColor).isDark() ? 'white' : 'text';
  return _react["default"].createElement(NavWrapper, {
    className: className,
    background: backgroundColor
  }, _react["default"].createElement(_Container["default"], null, _react["default"].createElement(Title, {
    color: color
  }, title), children));
};

DashboardBanner.propTypes = {
  /**
   * Set a color for the Background color. By default, the color is light gray.
   */
  backgroundColor: _propTypes["default"].string,

  /**
   * Title, can be a string or a React Element.
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
};
DashboardBanner.defaultProps = {};
var _default = DashboardBanner;
exports["default"] = _default;