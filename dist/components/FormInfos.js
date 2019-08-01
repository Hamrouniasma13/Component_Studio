"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

var _Button = _interopRequireDefault(require("./Button"));

var _SimpleButton = _interopRequireDefault(require("./SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Actions(_ref) {
  var actions = _ref.actions;
  var styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    item: {
      marginLeft: 10,
      display: 'inline-block'
    }
  };
  return (0, _core.jsx)("ul", {
    css: styles.list
  }, actions.map(function (_ref2, key) {
    var label = _ref2.label,
        rest = _objectWithoutProperties(_ref2, ["label"]);

    return (0, _core.jsx)("li", {
      key: key,
      css: styles.item
    }, (0, _core.jsx)(_Button["default"], _extends({}, rest, {
      ghost: true
    }), label));
  }));
}

function FormInfos(_ref3) {
  var _wrapper;

  var className = _ref3.className,
      title = _ref3.title,
      infos = _ref3.infos,
      actions = _ref3.actions,
      enableShrank = _ref3.enableShrank,
      shrankCount = _ref3.shrankCount,
      shrankLabel = _ref3.shrankLabel;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors,
      media = _React$useContext.media;

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shrank = _React$useState2[0],
      setShrank = _React$useState2[1];

  if (infos && infos.length <= shrankCount) {
    enableShrank = false;
  }

  var shrankInfos = enableShrank && shrank ? infos.slice(0, shrankCount) : infos;
  var styles = {
    wrapper: (_wrapper = {
      maxWidth: '600px',
      textAlign: 'left',
      backgroundColor: 'white',
      marginBottom: '20px'
    }, _defineProperty(_wrapper, media.tablet, {
      padding: '20px 30px 15px',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)'
    }), _defineProperty(_wrapper, media.laptop, {
      padding: '30px',
      boxSizing: 'border-box'
    }), _wrapper),
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px'
    },
    title: {
      marginTop: 7
    },
    list: {
      padding: 0,
      margin: 0,
      listStyleType: 'none'
    },
    item: _defineProperty({
      padding: '15px 0',
      borderTop: "1px solid ".concat(colors.lightGray)
    }, media.tablet, {
      display: 'flex'
    }),
    label: _defineProperty({
      display: 'block',
      marginBottom: 5
    }, media.tablet, {
      marginBottom: 0,
      flex: '0 0 45%'
    }),
    buttonWrapper: {
      textAlign: 'center',
      marginTop: 20
    }
  };

  var shrankLabelFn = function shrankLabelFn() {
    if (typeof shrankLabel === 'function') {
      return shrankLabel({
        isOpen: !shrank
      });
    } else {
      return shrankLabel;
    }
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setShrank(!shrank);
  };

  return (0, _core.jsx)("div", {
    className: className,
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.head
  }, title ? (0, _core.jsx)(_Text["default"].h2, {
    css: styles.title
  }, title) : null, actions && actions.length > 0 ? (0, _core.jsx)(Actions, {
    actions: actions
  }) : null), (0, _core.jsx)("ul", {
    css: styles.list
  }, shrankInfos.map(function (_ref4, key) {
    var label = _ref4.label,
        value = _ref4.value;
    return (0, _core.jsx)("li", {
      css: styles.item,
      key: key
    }, (0, _core.jsx)(_Text["default"], {
      css: styles.label,
      size: "typo4"
    }, label), (0, _core.jsx)(_Text["default"], {
      size: "typo5"
    }, value));
  })), enableShrank ? (0, _core.jsx)("div", {
    css: styles.buttonWrapper
  }, (0, _core.jsx)(_SimpleButton["default"], {
    onClick: handleClick
  }, shrankLabelFn())) : null);
}

FormInfos.propTypes = {
  title: _propTypes["default"].string,
  infos: _propTypes["default"].array,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape(_Button["default"].propTypes)),
  enableShrank: _propTypes["default"].bool,
  shrankCount: _propTypes["default"].number,
  shrankLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func])
};
FormInfos.defaultProps = {
  title: '',
  infos: [],
  actions: [],
  enableShrank: false,
  shrankCount: 2,
  shrankLabel: function shrankLabel(isOpen) {
    return isOpen ? 'See more' : 'See less';
  }
};
var _default = FormInfos;
exports["default"] = _default;