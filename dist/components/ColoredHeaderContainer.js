"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function ColoredHeaderContainer(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      title = _ref.title;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    wrapper: {
      width: '100%',
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '80px',
      padding: '10px 20px',
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    },
    title: {
      color: theme.colors.white
    },
    formWrapper: {
      padding: 40
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.headerWrapper
  }, icon && (0, _core.jsx)(_Icon["default"], {
    name: icon,
    color: "white",
    size: "30px",
    css: {
      marginRight: 20
    }
  }), (0, _core.jsx)(_Text["default"], {
    tag: "h3",
    css: styles.title
  }, title)), (0, _core.jsx)("div", {
    css: styles.formWrapper
  }, children));
}

var _default = ColoredHeaderContainer;
exports["default"] = _default;
ColoredHeaderContainer.propTypes = {
  children: _propTypes["default"].node.isRequired,
  title: _propTypes["default"].string.isRequired,
  icon: _propTypes["default"].string
};