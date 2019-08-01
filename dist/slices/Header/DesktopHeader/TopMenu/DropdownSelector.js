"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUse = require("react-use");

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _SwitcherList = _interopRequireDefault(require("./SwitcherList"));

var _Icon = _interopRequireDefault(require("../../../../components/Icon"));

var _Chevron = _interopRequireDefault(require("../../../../components/AnimatedIcons/Chevron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropdownSelector(_ref) {
  var current = _ref.current,
      props = _objectWithoutProperties(_ref, ["current"]);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var ref = _react["default"].useRef(null);

  (0, _reactUse.useClickAway)(ref, function () {
    return setOpen(false);
  });
  var styles = {
    wrapper: {
      position: 'relative'
    },
    currentLangWrapper: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper,
    ref: ref
  }, (0, _core.jsx)(_NavItem["default"], {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, (0, _core.jsx)("div", {
    css: styles.currentLangWrapper
  }, props.icon ? (0, _core.jsx)(_Icon["default"], {
    css: {
      marginRight: 10
    },
    size: 16,
    name: props.icon
  }) : null, (0, _core.jsx)("span", null, current.label), (0, _core.jsx)(_Chevron["default"], {
    css: {
      marginLeft: 10
    },
    name: "up",
    size: 12,
    open: open
  })), (0, _core.jsx)(_SwitcherList["default"], _extends({}, props, {
    setOpen: setOpen,
    isOpen: open
  }))));
}

DropdownSelector.propsTypes = {
  /**
   * Current language
   */
  current: _propTypes["default"].shape({
    ID: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),

  /**
   * Array of available languages
   */
  available: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    ID: _propTypes["default"].string,
    label: _propTypes["default"].string
  })),

  /**
   * Function called when a lang is selected
   */
  onChange: _propTypes["default"].func
};
DropdownSelector.defaultProps = {
  current: {},
  available: [],
  onChange: function onChange() {}
};
var _default = DropdownSelector;
exports["default"] = _default;