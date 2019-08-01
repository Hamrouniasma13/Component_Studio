"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUser = function SvgUser(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 12 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "user_svg__a",
    d: "M16.917 18.182c-.922.01-1.71.73-1.738 1.635-.047 1.493-.013 2.99-.013 4.516.59.158 1.133.349 1.693.44.514.085.687.314.724.835.114 1.566.305 3.126.438 4.691.036.424.212.545.614.535a44.87 44.87 0 0 1 2.695.002c.47.017.587-.182.623-.608a121.7 121.7 0 0 1 .478-4.762c.03-.234.307-.539.54-.627.575-.22 1.191-.333 1.83-.499 0-1.555.039-3.076-.017-4.594-.031-.856-.84-1.554-1.727-1.564h-6.14zM16.985 32c-.116-1.487-.19-2.98-.36-4.46-.196-1.713-.234-1.708-1.921-2.138-.216-.055-.43-.118-.682-.187 0-1.838-.06-3.659.018-5.475.066-1.524 1.345-2.683 2.879-2.704 2.046-.03 4.093-.039 6.139.004 1.223.026 2.121.644 2.642 1.772.091.197.19.392.285.588v5.85c-.243.052-.488.096-.729.156-1.677.41-1.713.407-1.913 2.14-.17 1.478-.243 2.969-.358 4.454h-6zm-.637-20.348A3.656 3.656 0 0 0 20 15.304a3.656 3.656 0 0 0 3.652-3.652A3.656 3.656 0 0 0 20 8a3.656 3.656 0 0 0-3.652 3.652zm6.26 0A2.612 2.612 0 0 1 20 14.261a2.612 2.612 0 0 1-2.609-2.609A2.612 2.612 0 0 1 20 9.043a2.612 2.612 0 0 1 2.609 2.61z"
  })), _react["default"].createElement("use", {
    transform: "translate(-14 -8)",
    xlinkHref: "#user_svg__a"
  }));
};

var _default = SvgUser;
exports["default"] = _default;