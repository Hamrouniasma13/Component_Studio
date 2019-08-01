"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCode = function SvgCode(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 20"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "code_svg__a",
    d: "M12.739 24.69l-4.571-4.572a.57.57 0 0 1 0-.808l4.57-4.572a.57.57 0 1 1 .809.808L9.38 19.714l4.167 4.167a.57.57 0 1 1-.808.808zm13.714 0a.57.57 0 0 1 0-.809l4.167-4.167-4.167-4.168a.57.57 0 1 1 .808-.808l4.571 4.572a.57.57 0 0 1 0 .808l-4.57 4.571a.57.57 0 0 1-.809 0zm-4.722-14.257a.571.571 0 0 1 1.109.277l-4.571 18.285a.571.571 0 1 1-1.109-.277l4.571-18.285z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -10)",
    xlinkHref: "#code_svg__a"
  }));
};

var _default = SvgCode;
exports["default"] = _default;