"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterLang;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactUse = require("react-use");

var _Icon = _interopRequireDefault(require("../../components/Icon"));

var _AnimatedIcons = _interopRequireDefault(require("../../components/AnimatedIcons"));

var _utils = require("../../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LangLabel = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.colors.darkGray,
    textTransform: 'capitalize'
  };
});
var LangList = (0, _styled["default"])('div')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    border: "1px solid ".concat(theme.colors.gray),
    marginTop: '10px'
  };
});
var LangListItem = (0, _styled["default"])('div')(function (_ref3) {
  var theme = _ref3.theme;
  return {
    listStyle: 'none',
    padding: '15px',
    color: theme.colors.darkGray,
    fontWeight: 600,
    borderBottom: "1px solid ".concat(theme.colors.gray),
    backgroundColor: 'white',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.lightGray
    },
    '&:last-child': {
      borderBottom: '0'
    }
  };
});
var LangListItemSelected = (0, _styled["default"])('div')(function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return {
    color: selected ? theme.colors.primary : 'inherit'
  };
});
var FooterLangList = (0, _styled["default"])('div')(function (_ref5) {
  var theme = _ref5.theme,
      isOpen = _ref5.isOpen;
  return _defineProperty({
    background: 'white',
    padding: '20px',
    color: theme.colors.gray,
    userSelect: 'none',
    display: isOpen ? 'block' : 'none'
  }, theme.media.tablet, {
    boxShadow: 'rgba(0,0,0,0.3) 1px 1px 15px 0px',
    position: 'absolute',
    bottom: '100%',
    left: 0,
    right: 0,
    display: 'block',
    transition: isOpen ? 'transform 0.3s, opacity 0.1s ease 0.1s' : 'transform 0.1s ease 0.1s, opacity 0.3s',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(5px)',
    pointerEvents: isOpen ? 'auto' : 'none'
  });
});

function LangSwitcherList(_ref7) {
  var lang = _ref7.lang,
      langs = _ref7.langs,
      title = _ref7.title,
      onLangChange = _ref7.onLangChange,
      isOpen = _ref7.isOpen;
  return (0, _core.jsx)(FooterLangList, {
    isOpen: isOpen
  }, (0, _core.jsx)(LangLabel, null, title), (0, _core.jsx)(LangList, null, langs.map(function (_lang, i) {
    return (0, _core.jsx)(LangListItem, {
      key: i,
      onClick: function onClick() {
        return onLangChange(_lang.id);
      }
    }, (0, _core.jsx)(LangListItemSelected, {
      selected: _lang.id === lang.id
    }, _lang.label));
  })));
}

var FooterLangInner = (0, _styled["default"])('div')(function (_ref8) {
  var theme = _ref8.theme;
  return _defineProperty({
    label: 'FooterLang',
    borderBottom: "1px solid ".concat((0, _utils.lighten)(theme.colors.primary, 15)),
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '.6px',
    cursor: 'pointer'
  }, theme.media.tablet, {
    minWidth: '320px',
    margin: 0,
    borderBottom: 0,
    borderRight: "1px solid ".concat((0, _utils.lighten)(theme.colors.primary, 15)),
    transition: 'background-color 0.2s',
    position: 'relative',
    left: '-15px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.3)'
    }
  });
});
var SelectedLangWrapper = (0, _styled["default"])('div')({
  position: 'relative'
});
var SelectedLang = (0, _styled["default"])('div')({
  paddingLeft: '15px',
  height: '55px',
  display: 'flex',
  alignItems: 'center'
});
var StyledAnimatedIcon = (0, _styled["default"])(_AnimatedIcons["default"].chevron)(function (_ref10) {
  var _ref10$size = _ref10.size,
      size = _ref10$size === void 0 ? 20 : _ref10$size;
  return {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transformOrigin: 'center',
    marginTop: -size / 2
  };
});

function FooterLang(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var ref = _react["default"].useRef(null);

  (0, _reactUse.useClickAway)(ref, function () {
    return setOpen(false);
  });
  return (0, _core.jsx)(FooterLangInner, {
    ref: ref
  }, (0, _core.jsx)(SelectedLangWrapper, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, (0, _core.jsx)(SelectedLang, null, (0, _core.jsx)(_Icon["default"], {
    css: {
      marginRight: '10px',
      verticalAlign: 'sub'
    },
    name: "globe",
    size: 20
  }), (0, _core.jsx)("span", null, props.lang.label || 'Français')), (0, _core.jsx)(StyledAnimatedIcon, {
    size: 20,
    open: open
  })), (0, _core.jsx)(LangSwitcherList, _extends({}, props, {
    isOpen: open
  })));
}

FooterLang.propTypes = {
  lang: _propTypes["default"].shape({
    ID: _propTypes["default"].string,
    label: _propTypes["default"].string
  }).isRequired,
  langs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    ID: _propTypes["default"].string,
    label: _propTypes["default"].string
  })).isRequired,
  title: _propTypes["default"].string,
  onLangChange: _propTypes["default"].func.isRequired
};