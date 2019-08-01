"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Notification;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _utils = require("../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function Notification(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      color = _ref.color,
      onClose = _ref.onClose,
      children = _ref.children;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      backgroundColor: theme.colors[color] || color,
      color: (0, _utils.textColor)(theme.colors[color] || color, theme)
    },
    close: {
      color: (0, _utils.textColor)(theme.colors[color] || color, theme),
      position: 'absolute',
      top: 0,
      right: 10,
      cursor: 'pointer'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Slice["default"], {
    actions: actions
  }, title && (0, _core.jsx)(_Text["default"].h2, {
    mb: 15,
    size: "typo3"
  }, title), children, onClose && (0, _core.jsx)(_Icon["default"], {
    css: styles.close,
    onClick: onClose,
    name: "close",
    size: 20
  })));
}

Notification.propTypes = {
  title: _propTypes["default"].string,
  actions: _Slice["default"].propTypes.actions,
  color: _propTypes["default"].string,
  onClose: _propTypes["default"].func
};
Notification.defaultProps = {
  color: '#fff'
};