"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabsContent;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUse = require("react-use");

var _Slice = _interopRequireDefault(require("./Slice"));

var _Chevron = _interopRequireDefault(require("../components/AnimatedIcons/Chevron"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TabElement(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onSelect = _ref.onSelect,
      active = _ref.active;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    titleWrapper: _defineProperty({
      position: 'relative',
      label: 'TabItemTitle',
      userSelect: 'none',
      width: '100%',
      textTransform: 'uppercase',
      color: theme.colors.primary,
      display: 'table',
      borderBottom: '1px solid #e5e5e5',
      height: '61px',
      textDecoration: 'none'
    }, theme.media.tablet, {
      color: theme.colors.black,
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      display: 'block',
      textTransform: 'none',
      textDecoration: active ? 'underline' : 'none',
      fontWeight: active ? '700' : '300',
      height: 'auto',
      borderBottom: 0,
      paddingBottom: '30px'
    }),
    title: {
      display: 'table-cell',
      verticalAlign: 'middle',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontSize: '14px',
      fontWeight: '700',
      cursor: 'pointer'
    },
    chevron: _defineProperty({
      color: theme.colors.primary,
      position: 'absolute',
      top: '30px',
      right: '0',
      marginTop: -8
    }, theme.media.tablet, {
      display: 'none !important'
    }),
    content: _defineProperty({
      margin: '20px auto',
      display: active ? 'block' : 'none'
    }, theme.media.tablet, {
      display: 'none'
    })
  };
  return (0, _core.jsx)("div", null, (0, _core.jsx)("div", {
    css: styles.titleWrapper,
    onClick: onSelect
  }, (0, _core.jsx)("div", {
    css: styles.title
  }, title), (0, _core.jsx)(_Chevron["default"], {
    css: styles.chevron,
    size: 16,
    open: active
  })), (0, _core.jsx)("div", {
    css: styles.content
  }, content));
}

function TabContent(_ref2) {
  var title = _ref2.title,
      content = _ref2.content;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      display: 'none'
    }, theme.media.tablet, {
      display: 'block',
      width: '80%',
      "float": 'right',
      background: 'white'
    }),
    innerWrapper: {
      padding: 20,
      border: "1px solid ".concat(theme.colors.lightGray),
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      borderRadius: 3
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, (0, _core.jsx)(_Text["default"].h3, null, title), (0, _core.jsx)("div", {
    css: {
      marginTop: 20
    }
  }, content)));
}

function TabsContent(_ref3) {
  var title = _ref3.title,
      items = _ref3.items,
      defaultIndex = _ref3.defaultIndex;

  var _React$useState = _react["default"].useState(defaultIndex),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentItem = _React$useState2[0],
      setCurrentItem = _React$useState2[1];

  var theme = _react["default"].useContext(_core.ThemeContext);

  var aboveTablet = (0, _reactUse.useMedia)("(min-width : ".concat(theme.breakpoints.tablet, "px)"));
  var styles = {
    list: _defineProperty({}, theme.media.tablet, {
      marginTop: 15,
      width: '20%',
      "float": 'left'
    })
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.list
  }, items && items.map(function (tab, key) {
    return (0, _core.jsx)(TabElement, _extends({}, tab, {
      key: key,
      active: key === currentItem,
      onSelect: function onSelect() {
        return setCurrentItem(key === currentItem ? aboveTablet ? key : -1 : key);
      }
    }));
  })), (0, _core.jsx)(TabContent, items[Math.max(currentItem, 0)]));
}

TabsContent.propTypes = {
  title: _Slice["default"].propTypes.title,
  items: _propTypes["default"].arrayOf(_propTypes["default"].object),
  defaultIndex: _propTypes["default"].number
};