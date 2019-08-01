"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClose = function SvgClose(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 16 16"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "close_svg__a",
    d: "M20.734 20L28 27.266l-.734.734L20 20.734 12.734 28 12 27.266 19.266 20 12 12.734l.734-.734L20 19.266 27.266 12l.734.734L20.734 20z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-12 -12)",
    xlinkHref: "#close_svg__a"
  }));
};

var _default = SvgClose;
exports["default"] = _default;