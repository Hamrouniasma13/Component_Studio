"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _Menu = _interopRequireDefault(require("./Menu"));

var _TopMenu = _interopRequireDefault(require("./TopMenu"));

var _Logo = _interopRequireDefault(require("../Logo"));

var _Container = _interopRequireDefault(require("../../../components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function DesktopHeader(_ref) {
  var _ref$logo = _ref.logo,
      logo = _ref$logo === void 0 ? {} : _ref$logo,
      links = _ref.links,
      _ref$profil = _ref.profil,
      profil = _ref$profil === void 0 ? {} : _ref$profil,
      _ref$logout = _ref.logout,
      logout = _ref$logout === void 0 ? {} : _ref$logout,
      _ref$menu = _ref.menu,
      menu = _ref$menu === void 0 ? [] : _ref$menu,
      _ref$langs = _ref.langs,
      langs = _ref$langs === void 0 ? {} : _ref$langs,
      _ref$metaMenu = _ref.metaMenu,
      metaMenu = _ref$metaMenu === void 0 ? [] : _ref$metaMenu,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? {} : _ref$entities,
      notifications = _ref.notifications;
  var styles = {
    wrapper: {
      backgroundColor: '#fff',
      zIndex: 12,
      position: 'relative',
      boxShadow: '0 10px 8px -14px rgba(0,0,0,0.3)'
    },
    innerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    logoWrapper: {
      display: 'flex'
    }
  };
  var topMenu = [].concat(_toConsumableArray(metaMenu), [langs, entities], _toConsumableArray(links), [profil, logout]).filter(function (m) {
    return Object.keys(m).length;
  });
  return (0, _core.jsx)("header", null, topMenu && topMenu.length > 0 ? (0, _core.jsx)(_TopMenu["default"], {
    notifications: notifications,
    menus: topMenu
  }) : null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, logo ? (0, _core.jsx)("div", {
    css: styles.logoWrapper
  }, (0, _core.jsx)(_Logo["default"], logo)) : null, menu ? (0, _core.jsx)(_Menu["default"], {
    links: menu
  }) : null))));
}

var _default = DesktopHeader;
exports["default"] = _default;