"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Line(_ref) {
  var open = _ref.open;

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      eases = _useContext.eases,
      colors = _useContext.colors;

  var styles = {
    display: 'block',
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: colors.primary,
    borderRadius: '2px',
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: "0.3s ".concat(eases.easeOutCirc),
    willChange: 'transform',
    '&:nth-of-type(1)': _objectSpread({
      top: 6
    }, open ? {
      transform: 'rotate(-135deg)',
      width: 10
    } : {}),
    '&:nth-of-type(2)': _objectSpread({
      top: 12
    }, open ? {
      left: 0,
      transform: 'rotate(135deg)'
    } : {}),
    '&:nth-of-type(3)': _objectSpread({
      top: 18
    }, open ? {
      transform: 'rotate(-135deg)',
      left: 12,
      width: 10
    } : {})
  };
  return (0, _core.jsx)("span", {
    css: styles
  });
}

function Hamburger(_ref2) {
  var css = _ref2.css,
      isOpen = _ref2.isOpen,
      onClick = _ref2.onClick,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 24 : _ref2$size;
  return (0, _core.jsx)("div", {
    css: _objectSpread({}, css, {
      width: size,
      height: size,
      position: 'relative',
      cursor: 'pointer'
    }),
    onClick: onClick
  }, (0, _core.jsx)(Line, {
    open: isOpen
  }), (0, _core.jsx)(Line, {
    open: isOpen
  }), (0, _core.jsx)(Line, {
    open: isOpen
  }));
}

Hamburger.propTypes = {
  /**
   * Boolean that display the burger open or closed
   * The burger display a close icon when it's open
   */
  open: _propTypes["default"].bool,

  /**
   * onClick listener
   */
  onClick: _propTypes["default"].func
};
Hamburger.defaultProps = {
  open: false,
  onClick: function onClick() {}
};
var _default = Hamburger;
exports["default"] = _default;