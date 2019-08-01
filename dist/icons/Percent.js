"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPercent = function SvgPercent(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "percent_svg__a",
    d: "M20 8c6.626 0 12 5.374 12 12s-5.374 12-12 12S8 26.626 8 20 13.374 8 20 8zm0 22.957c6.052 0 10.957-4.905 10.957-10.957 0-6.052-4.905-10.957-10.957-10.957-6.052 0-10.957 4.905-10.957 10.957 0 6.052 4.905 10.957 10.957 10.957zm-1.043-14.61a2.583 2.583 0 0 1-2.61 2.61 2.583 2.583 0 0 1-2.608-2.61 2.583 2.583 0 0 1 2.609-2.608 2.583 2.583 0 0 1 2.609 2.609zm-4.174 0c0 .888.678 1.566 1.565 1.566.887 0 1.565-.678 1.565-1.565 0-.887-.678-1.565-1.565-1.565-.887 0-1.565.678-1.565 1.565zm9.39 5.218a2.583 2.583 0 0 1 2.61 2.609 2.583 2.583 0 0 1-2.61 2.609 2.583 2.583 0 0 1-2.608-2.61 2.583 2.583 0 0 1 2.609-2.608zm0 4.174c.888 0 1.566-.678 1.566-1.565 0-.887-.678-1.565-1.565-1.565-.887 0-1.565.678-1.565 1.565 0 .887.678 1.565 1.565 1.565zm.366-10.278a.504.504 0 0 1 0 .73l-8.348 8.348a.564.564 0 0 1-.365.157.564.564 0 0 1-.365-.157.504.504 0 0 1 0-.73l8.348-8.348a.504.504 0 0 1 .73 0z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#percent_svg__a"
  }));
};

var _default = SvgPercent;
exports["default"] = _default;