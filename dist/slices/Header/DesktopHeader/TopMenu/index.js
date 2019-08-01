"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../../../../components/Container"));

var _Icon = _interopRequireDefault(require("../../../../components/Icon"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _DropdownSelector = _interopRequireDefault(require("./DropdownSelector"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TopMenu = function TopMenu(_ref) {
  var menus = _ref.menus;
  var styles = {
    wrapper: {
      backgroundColor: '#2a2a2a'
    },
    nav: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("nav", {
    css: styles.nav
  }, menus && menus.length > 0 && menus.map(function (m, i) {
    return m && (0, _get["default"])(m, 'available.length', 0) > 1 ? (0, _core.jsx)(_DropdownSelector["default"], _extends({
      key: i
    }, m)) : (0, _core.jsx)(_NavItem["default"], {
      key: i,
      href: m.url
    }, m && m.icon ? (0, _core.jsx)(_Icon["default"], {
      css: {
        marginRight: 10
      },
      size: 16,
      name: m.icon
    }) : null, m.label);
  }))));
};

TopMenu.propTypes = {
  menus: _propTypes["default"].array
};
var _default = TopMenu;
exports["default"] = _default;