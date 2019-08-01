"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationContext = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _NotificationToast = _interopRequireDefault(require("./NotificationToast"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NotificationContext = (0, _react.createContext)({
  newNotification: function newNotification() {}
});
exports.NotificationContext = NotificationContext;

var Box = _reactPose["default"].li({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -50,
    opacity: 0
  }
});

var NotificationProvider = function NotificationProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      notificationList = _useState2[0],
      setNotificationList = _useState2[1];

  var styles = {
    wrapper: {
      position: 'fixed',
      width: '100%',
      pointerEvents: 'none',
      zIndex: 2147483647
    },
    li: {
      listStyle: 'none',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };

  var onUnmount = function onUnmount(uid) {
    var array = notificationList.filter(function (item) {
      return item.uid !== uid;
    });
    setNotificationList(array);
  };

  var newNotification = function newNotification(_ref2) {
    var type = _ref2.type,
        message = _ref2.message,
        _ref2$infinite = _ref2.infinite,
        infinite = _ref2$infinite === void 0 ? false : _ref2$infinite;
    setNotificationList([].concat(_toConsumableArray(notificationList), [{
      type: type,
      message: message,
      infinite: infinite,
      uid: new Date().getTime()
    }]));
  };

  return (0, _core.jsx)(NotificationContext.Provider, {
    value: {
      newNotification: newNotification
    }
  }, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_reactPose.PoseGroup, null, notificationList.map(function (item) {
    return (0, _core.jsx)(Box, {
      key: item.uid,
      css: styles.li
    }, (0, _core.jsx)(_NotificationToast["default"], {
      type: item.type,
      message: item.message,
      infinite: item.infinite,
      onUnmount: onUnmount,
      uid: item.uid
    }));
  }))), children);
};

var _default = NotificationProvider;
exports["default"] = _default;
NotificationProvider.propTypes = {
  children: _propTypes["default"].node.isRequired
};