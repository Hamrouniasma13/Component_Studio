"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 23"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "check_svg__a",
    d: "M19.454 31.451C13.14 31.451 8 26.416 8 20.226 8 14.036 13.139 9 19.454 9a11.6 11.6 0 0 1 6.021 1.674.528.528 0 0 1 .177.736.552.552 0 0 1-.751.173 10.492 10.492 0 0 0-5.447-1.514c-5.714 0-10.363 4.556-10.363 10.157 0 5.6 4.649 10.156 10.363 10.156 5.715 0 10.364-4.556 10.364-10.156 0-.905-.122-1.803-.361-2.67a.533.533 0 0 1 .383-.655.548.548 0 0 1 .67.376c.265.958.399 1.95.399 2.949 0 6.19-5.139 11.225-11.455 11.225zM15.477 17.71l3.977 3.898L31.07 10.226a.553.553 0 0 1 .771 0 .526.526 0 0 1 0 .756l-12 11.76a.55.55 0 0 1-.771 0l-4.364-4.277a.526.526 0 0 1 0-.755.553.553 0 0 1 .772 0z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -9)",
    xlinkHref: "#check_svg__a"
  }));
};

var _default = SvgCheck;
exports["default"] = _default;