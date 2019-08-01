"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgServer = function SvgServer(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 20"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "server_svg__a",
    d: "M0 9.391V0h24v9.391H0zm1.043-1.043h21.914V1.043H1.043v7.305zM0 19.826v-9.391h24v9.391H0zm1.043-1.043h21.914v-7.305H1.043v7.305zm18.261-14.61a.522.522 0 1 0 .001 1.045.522.522 0 0 0 0-1.044zm0 2.088a1.567 1.567 0 0 1-1.565-1.565c0-.863.702-1.566 1.565-1.566s1.566.703 1.566 1.566c0 .863-.703 1.565-1.566 1.565zm0 8.348a.522.522 0 1 0 0 1.044.522.522 0 0 0 0-1.044zm0 2.087a1.567 1.567 0 0 1-1.565-1.566c0-.863.702-1.565 1.565-1.565s1.566.702 1.566 1.565-.703 1.566-1.566 1.566z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#server_svg__a"
  }));
};

var _default = SvgServer;
exports["default"] = _default;