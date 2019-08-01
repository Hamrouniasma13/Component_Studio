"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChange = function SvgChange(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 19"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "change_svg__a",
    d: "M8.545 15.364a.545.545 0 1 1 0-1.091H14c.155 0 .302.065.406.18l2.946 3.274a.546.546 0 0 1-.811.73l-2.784-3.093H8.545zm23.295-.932a.546.546 0 0 1 0 .772l-3.272 3.273a.544.544 0 0 1-.771 0 .545.545 0 0 1 0-.771l2.341-2.342h-6.077l-9.656 10.729a.544.544 0 0 1-.405.18H8.545a.545.545 0 1 1 0-1.09h5.212l9.656-10.73a.544.544 0 0 1 .406-.18h6.32l-2.342-2.342a.545.545 0 1 1 .771-.771l3.272 3.272zm.119 11.087a.546.546 0 0 1-.119.595l-3.272 3.272a.544.544 0 0 1-.771 0 .545.545 0 0 1 0-.771l2.341-2.342h-6.32a.546.546 0 0 1-.405-.18l-2.945-3.272a.546.546 0 0 1 .81-.73l2.783 3.091h6.077l-2.341-2.342a.545.545 0 1 1 .771-.771l3.272 3.272c.05.05.09.111.119.178z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -11)",
    xlinkHref: "#change_svg__a"
  }));
};

var _default = SvgChange;
exports["default"] = _default;