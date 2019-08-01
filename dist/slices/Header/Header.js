"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _DesktopHeader = _interopRequireDefault(require("./DesktopHeader"));

var _MobileHeader = _interopRequireDefault(require("./MobileHeader"));

var _reactUse = require("react-use");

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function Header(props) {
  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      breakpoints = _useContext.breakpoints;

  var isBelowTablet = (0, _reactUse.useMedia)("(max-width : ".concat(breakpoints.tablet, "px)"));
  return (0, _core.jsx)("div", {
    css: {
      header: {
        position: 'relative'
      }
    }
  }, !isBelowTablet ? (0, _core.jsx)(_DesktopHeader["default"], props) : (0, _core.jsx)(_MobileHeader["default"], props));
}

Header.propTypes = {
  logo: _propTypes["default"].shape(_Logo["default"].propTypes),
  profil: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }),
  logout: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }),
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })),
  menu: _propTypes["default"].array,
  langs: _propTypes["default"].object,
  entities: _propTypes["default"].object
};
Header.defaultProps = {
  logo: {},
  profil: {},
  logout: {},
  links: [],
  menu: [],
  langs: {},
  entities: {}
};
var _default = Header;
exports["default"] = _default;