"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tip;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

var _utils = require("../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function Tip(_ref) {
  var title = _ref.title,
      children = _ref.children,
      color = _ref.color;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var background = theme.colors[color] || color;
  var styles = {
    wrapper: {
      backgroundColor: background,
      color: (0, _utils.textColor)(background, theme),
      padding: 20
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, title && (0, _core.jsx)(_Text["default"], {
    mb: 10,
    size: "typo4",
    tag: "div"
  }, title), children);
}

Tip.propTypes = {
  title: _propTypes["default"].string,
  color: _propTypes["default"].string
};
Tip.defaultProps = {
  color: 'smallLightGray'
};