"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDropdownItem = MenuDropdownItem;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _core = require("@emotion/core");

var _Chevron = _interopRequireDefault(require("../../../components/AnimatedIcons/Chevron"));

var _Icon = _interopRequireDefault(require("../../../components/Icon"));

var _Link = _interopRequireDefault(require("../../../components/Link"));

var _utils = require("../../../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Li = function Li(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return (0, _core.jsx)("li", _extends({}, props, {
    css: {
      display: 'block',
      lineHeight: 'normal',
      margin: '10px 0',
      padding: '0 10px',
      position: 'relative',
      cursor: 'pointer'
    }
  }), children);
};

var LiWrapper = function LiWrapper(_ref2) {
  var css = _ref2.css,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["css", "children"]);

  return (0, _core.jsx)(_Link["default"], _extends({
    css: _objectSpread({}, css, {
      color: 'inherit',
      textDecoration: 'none',
      display: 'table',
      paddingRight: 10
    })
  }, rest), children);
};

var IconRightWrapper = function IconRightWrapper(_ref3) {
  var children = _ref3.children;
  return (0, _core.jsx)("div", {
    css: {
      display: 'table-cell',
      textAlign: 'right',
      minHeight: '40px',
      minWidth: '40px'
    }
  }, children);
};

var IconRight = function IconRight(props) {
  return (0, _core.jsx)(_Icon["default"], _extends({
    css: {
      display: 'block',
      margin: '8px 20px 8px'
    }
  }, props));
};

var Label = function Label(_ref4) {
  var children = _ref4.children;
  return (0, _core.jsx)("span", {
    css: {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  }, children);
};

var Item = _reactPose["default"].div({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -10,
    opacity: 0
  }
});

var SubItem = _reactPose["default"].div({
  display: {
    y: 0,
    opacity: 1
  },
  hide: {
    y: -10,
    opacity: 0
  }
});

function MenuItem(_ref5) {
  var icon = _ref5.icon,
      label = _ref5.label,
      url = _ref5.url;
  return (0, _core.jsx)(Item, null, (0, _core.jsx)(Li, null, (0, _core.jsx)(LiWrapper, {
    href: url
  }, (0, _core.jsx)(IconRightWrapper, null, (0, _core.jsx)(IconRight, {
    size: 24,
    name: icon || 'star'
  })), (0, _core.jsx)(Label, null, label))));
}

var GroupList = _reactPose["default"].div({
  display: {
    opacity: 1,
    height: 'auto',
    delayChildren: 50,
    staggerChildren: 50
  },
  hide: {
    opacity: 0,
    height: '1px'
  }
});

function MenuDropdownItem(_ref6) {
  var icon = _ref6.icon,
      current = _ref6.current,
      available = _ref6.available,
      onChange = _ref6.onChange;

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return (0, _core.jsx)(Item, null, (0, _core.jsx)(Li, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, (0, _core.jsx)(LiWrapper, null, (0, _core.jsx)(IconRightWrapper, null, (0, _core.jsx)(IconRight, {
    size: 24,
    name: icon || 'star'
  })), (0, _core.jsx)(Label, null, current.label), (0, _core.jsx)("div", {
    css: {
      display: 'block',
      position: 'absolute',
      right: '0',
      top: '50%',
      marginTop: '-10px',
      width: 20,
      height: 20,
      marginRight: 20
    }
  }, (0, _core.jsx)(_Chevron["default"], {
    size: 16,
    open: open
  })))), (0, _core.jsx)(GroupList, {
    css: {
      paddingLeft: 75,
      background: (0, _utils.lighten)(colors.darkerGray, 40),
      overflow: 'hidden'
    },
    pose: open ? 'display' : 'hide'
  }, available && available.map(function (_ref7, i) {
    var label = _ref7.label,
        id = _ref7.id;
    return (0, _core.jsx)(SubItem, {
      onClick: function onClick() {
        return onChange(id);
      },
      css: {
        cursor: 'pointer',
        color: colors.lightGray,
        padding: '10px 20px'
      },
      key: i
    }, label);
  })));
}

MenuItem.propTypes = {
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  url: _propTypes["default"].string
};
var _default = MenuItem;
exports["default"] = _default;