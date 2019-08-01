"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPowerbutton = function SvgPowerbutton(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 19 20"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "powerbutton_svg__a",
    d: "M9.13 20C4.096 20 0 15.904 0 10.87c0-3.277 1.75-6.304 4.568-7.9l.379-.215.428.757-.378.214C2.451 5.17.87 7.906.87 10.87c0 4.555 3.705 8.26 8.26 8.26 4.556 0 8.261-3.705 8.261-8.26 0-2.966-1.544-5.637-4.132-7.147l-.375-.219.438-.751.375.22c2.858 1.666 4.564 4.618 4.564 7.897 0 5.034-4.096 9.13-9.13 9.13zM8.696 6.957V0h.87v6.957h-.87z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#powerbutton_svg__a"
  }));
};

var _default = SvgPowerbutton;
exports["default"] = _default;