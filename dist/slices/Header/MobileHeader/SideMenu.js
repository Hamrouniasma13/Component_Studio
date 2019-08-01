"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _get = _interopRequireDefault(require("lodash/get"));

var _utils = require("../../../theme/utils");

var _Text = _interopRequireDefault(require("../../../components/Text"));

var _Link = _interopRequireDefault(require("../../../components/Link"));

var _Icon = _interopRequireDefault(require("../../../components/Icon"));

var _MenuItem = _interopRequireWildcard(require("./MenuItem"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Sidebar = _reactPose["default"].div({
  open: {
    opacity: 1,
    delayChildren: 50,
    staggerChildren: 50
  },
  closed: {
    opacity: 0
  }
});

var BigItem = _reactPose["default"].div({
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
});

function SideMenu(_ref) {
  var isOpen = _ref.isOpen,
      menu = _ref.menu,
      selectedEntity = _ref.selectedEntity,
      profil = _ref.profil,
      entities = _ref.entities;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      background: theme.colors.darkerGray,
      color: 'white',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 50,
      zIndex: 21,
      overflow: 'scroll',
      transform: isOpen ? 'translateX(0)' : 'translateX(110%)',
      // 110% to account for usecases where the menu is embeded in a frame. ex: MirrorView
      transition: 'transform 0.3s ease'
    },
    menuList: {
      padding: '20px 0',
      margin: 0,
      listStyle: 'none'
    }
  };
  return (0, _core.jsx)(Sidebar, {
    css: styles.wrapper,
    pose: isOpen ? 'open' : 'closed'
  }, (0, _core.jsx)(UserInfos, {
    profil: profil,
    selectedEntity: selectedEntity,
    entities: entities
  }), (0, _core.jsx)("nav", null, (0, _core.jsx)("div", {
    css: styles.menuList
  }, menu && menu.map(function (m, i) {
    return (0, _get["default"])(m, 'available.length') ? (0, _core.jsx)(_MenuItem.MenuDropdownItem, _extends({
      key: i
    }, m)) : (0, _core.jsx)(_MenuItem["default"], _extends({
      key: i
    }, m));
  }))));
}

var UserInfos = function UserInfos(_ref2) {
  var profil = _ref2.profil,
      selectedEntity = _ref2.selectedEntity;

  var theme = _react["default"].useContext(_core.ThemeContext);

  return (0, _core.jsx)(BigItem, {
    css: {
      backgroundColor: theme.colors.darkerGray,
      color: theme.colors.lightGray,
      display: 'flex',
      padding: 20
    }
  }, (0, _core.jsx)(_Link["default"], {
    to: profil.url
  }, (0, _core.jsx)(_Text["default"], {
    size: "typo3",
    css: {
      backgroundColor: generateColorFromName(profil.label) || theme.colors.primary,
      borderRadius: '50%',
      width: 50,
      height: 50,
      marginRight: 20,
      lineHeight: '50px',
      textAlign: 'center',
      display: 'block',
      zIndex: 20,
      color: (0, _utils.textColor)(theme.colors.primary, theme)
    }
  }, getFirstLetters(profil.label))), (0, _core.jsx)("div", null, (0, _core.jsx)(_Link["default"], {
    css: {
      textDecoration: 'none'
    },
    href: profil.url
  }, (0, _core.jsx)(_Text["default"], null, profil.label)), (0, _core.jsx)(_Text["default"].p, {
    size: "smallText"
  }, selectedEntity), (0, _core.jsx)(_Link["default"], {
    css: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    href: profil.url
  }, (0, _core.jsx)(_Icon["default"], {
    css: {
      marginRight: 10
    },
    size: "18",
    name: "cog"
  }), (0, _core.jsx)(_Text["default"], {
    size: "smallText"
  }, "Mon profil"))));
}; // TODO: Generate color from chars. See with louis which color we can use


function generateColorFromName(name) {
  return '';
}

function getFirstLetters() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (typeof name !== 'string') return 'ANONYME';
  return name.split(' ').map(function (n) {
    return n[0];
  }).splice(0, 2).join('');
}

var _default = SideMenu;
exports["default"] = _default;