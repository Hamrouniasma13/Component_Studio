"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _core = require("@emotion/core");

var _SideMenu = _interopRequireDefault(require("./SideMenu"));

var _Logo = _interopRequireDefault(require("../Logo"));

var _Hamburger = _interopRequireDefault(require("../../../components/AnimatedIcons/Hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnimatedBurger = function AnimatedBurger(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;
  return (0, _core.jsx)("div", {
    css: {
      marginRight: 10
    }
  }, (0, _core.jsx)(_Hamburger["default"], {
    isOpen: isOpen,
    onClick: onClick
  }));
};

function MobileHeader(_ref2) {
  var logo = _ref2.logo,
      _ref2$profil = _ref2.profil,
      profil = _ref2$profil === void 0 ? {} : _ref2$profil,
      _ref2$logout = _ref2.logout,
      logout = _ref2$logout === void 0 ? {} : _ref2$logout,
      _ref2$menu = _ref2.menu,
      menu = _ref2$menu === void 0 ? [] : _ref2$menu,
      _ref2$langs = _ref2.langs,
      langs = _ref2$langs === void 0 ? {} : _ref2$langs,
      _ref2$entities = _ref2.entities,
      entities = _ref2$entities === void 0 ? {} : _ref2$entities,
      _ref2$metaMenu = _ref2.metaMenu,
      metaMenu = _ref2$metaMenu === void 0 ? [] : _ref2$metaMenu;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  _react["default"].useEffect(function () {
    /**
     * Jeremy's solution to menu overflow.
     * body is not a solution, break on safari
     * use #root because we pretty sure it exists
     */
    var root = document.querySelector('#root');

    if (root) {
      root.style['overflow-x'] = 'hidden';
      root.style['min-height'] = '100vh';
    }
  }, []);

  var styles = {
    background: {
      position: 'fixed',
      transition: 'opacity 0.2s, visibility 0.3s',
      opacity: open ? 0.2 : 0,
      visibility: open ? 'visible' : 'hidden',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 20,
      backgroundColor: '#000'
    },
    innerHeader: {
      backgroundColor: '#fff',
      zIndex: 12,
      position: 'relative',
      boxShadow: '0 10px 8px -14px rgba(0,0,0,0.3)'
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  };
  var filteredMenu = [].concat(_toConsumableArray(menu), _toConsumableArray(metaMenu));
  if (Object.keys(entities).length > 0) filteredMenu.push(entities);
  if (Object.keys(langs).length > 0) filteredMenu.push(langs);
  if (Object.keys(logout).length > 0) filteredMenu.push(logout);
  return (0, _core.jsx)("header", null, (0, _core.jsx)("div", {
    css: styles.background,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }), (0, _core.jsx)("div", {
    css: styles.innerHeader
  }, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Logo["default"], logo), (0, _core.jsx)(AnimatedBurger, {
    isOpen: open,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }))), (0, _core.jsx)(_SideMenu["default"], {
    profil: profil,
    entities: entities,
    selectedEntity: (0, _get["default"])(entities, 'current.label'),
    menu: filteredMenu.filter(function (m) {
      return !!m;
    }),
    isOpen: open
  }));
}

var _default = MobileHeader;
exports["default"] = _default;