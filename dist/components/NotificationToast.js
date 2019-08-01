"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUse = require("react-use");

var _Text = _interopRequireDefault(require("./Text"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toast = function Toast(_ref) {
  var type = _ref.type,
      message = _ref.message,
      onUnmount = _ref.onUnmount,
      uid = _ref.uid;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var toastBackgroundColor = type === 'success' ? 'toastSuccessBackground' : type === 'error' ? 'toastErrorBackground' : 'toastWarningBackground';
  var textAndIconColor = type === 'success' ? 'toastSuccessText' : type === 'error' ? 'toastErrorText' : 'toastWarningText';
  var styles = {
    wrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%',
      maxWidth: '540px',
      minHeight: '40px',
      padding: '5px 10px',
      backgroundColor: theme.colors[toastBackgroundColor],
      borderRadius: 8,
      marginTop: 10,
      pointerEvents: 'auto'
    }, theme.media.tablet, {
      padding: '5px 20px'
    }),
    message: {
      width: '70%',
      textAlign: 'center',
      fontWeight: 800,
      color: theme.colors[textAndIconColor]
    },
    icons: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Icon["default"], {
    name: type === 'success' ? 'check' : 'info',
    color: textAndIconColor,
    size: 20,
    css: styles.icons
  }), (0, _core.jsx)(_Text["default"], {
    tag: "p",
    css: styles.message
  }, message), (0, _core.jsx)(_Icon["default"], {
    name: "close",
    color: textAndIconColor,
    css: styles.icons,
    size: 15,
    onClick: function onClick() {
      onUnmount(uid);
    }
  }));
};

var NotificationToast = function NotificationToast(_ref2) {
  var infinite = _ref2.infinite,
      onUnmount = _ref2.onUnmount,
      uid = _ref2.uid,
      rest = _objectWithoutProperties(_ref2, ["infinite", "onUnmount", "uid"]);

  var endOfTimeout = (0, _reactUse.useTimeout)(5000);
  (0, _react.useEffect)(function () {
    if (endOfTimeout && !infinite) {
      onUnmount(uid);
    }
  }, [endOfTimeout, infinite, onUnmount, uid]);
  return (0, _core.jsx)(Toast, _extends({
    onUnmount: onUnmount,
    uid: uid
  }, rest));
};

Toast.propTypes = {
  onUnmount: _propTypes["default"].func.isRequired,
  uid: _propTypes["default"].number.isRequired,
  type: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].string.isRequired
};
NotificationToast.propTypes = {
  type: _propTypes["default"].oneOf(['success', 'warning', 'error']),
  message: _propTypes["default"].string,
  onUnmount: _propTypes["default"].func,
  uid: _propTypes["default"].number,
  infinite: _propTypes["default"].bool
};
NotificationToast.defaultProps = {
  type: 'success',
  message: '',
  infinite: false,
  onUnmount: function onUnmount() {},
  uid: ''
};
var _default = NotificationToast;
exports["default"] = _default;