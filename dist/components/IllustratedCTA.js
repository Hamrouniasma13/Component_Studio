"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _Text = _interopRequireDefault(require("./Text"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function IllustratedCTA(_ref) {
  var wording = _ref.wording,
      icon = _ref.icon,
      onClick = _ref.onClick,
      href = _ref.href;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    wrapper: {
      width: '100%',
      maxWidth: '500px',
      height: '270px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      backgroundColor: theme.colors.white,
      padding: '10px 25px',
      marginBottom: 20
    },
    title: {
      alignSelf: 'flex-start'
    },
    description: {
      textAlign: 'center'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "h3",
    css: styles.title
  }, wording.title), (0, _core.jsx)(_Icon["default"], {
    name: icon,
    size: 60
  }), (0, _core.jsx)(_Text["default"], {
    css: styles.description
  }, wording.description), (0, _core.jsx)(_Button["default"], {
    color: "secondary",
    onClick: onClick,
    href: href
  }, wording.button));
}

var _default = IllustratedCTA;
exports["default"] = _default;
IllustratedCTA.propTypes = {
  wording: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    description: _propTypes["default"].string,
    button: _propTypes["default"].string
  }),
  icon: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  href: _propTypes["default"].string
};