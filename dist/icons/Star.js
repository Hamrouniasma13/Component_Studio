"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 23"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "star_svg__a",
    d: "M12 0L8.292 7.512 0 8.717l6 5.849-1.416 8.258L12 18.926l7.416 3.898L18 14.565l6-5.848-8.292-1.205L12 0zM7.164 14.187L2.328 9.473l6.684-.97L12 2.447l2.988 6.054 6.683.971-4.836 4.714 1.142 6.656L12 17.702l-5.977 3.141 1.141-6.656z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#star_svg__a"
  }));
};

var _default = SvgStar;
exports["default"] = _default;