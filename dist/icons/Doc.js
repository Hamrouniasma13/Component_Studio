"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDoc = function SvgDoc(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 48 48"
  }, props), _react["default"].createElement("path", {
    d: "M44 27H4l-3-4 4-4h38l4 4z",
    fill: "#12376b"
  }), _react["default"].createElement("path", {
    d: "M41 47H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h24l12 12v32a2 2 0 0 1-2 2z",
    fill: "#e6e6e6"
  }), _react["default"].createElement("path", {
    d: "M31 1v10a2 2 0 0 0 2 2h10z",
    fill: "#b3b3b3"
  }), _react["default"].createElement("path", {
    d: "M45 41H3a2 2 0 0 1-2-2V23h46v16a2 2 0 0 1-2 2z",
    fill: "#27549b"
  }), _react["default"].createElement("g", {
    fill: "#fff"
  }, _react["default"].createElement("path", {
    d: "M19.525 31.907c0 1.311-.36 2.32-1.082 3.029-.72.71-1.735 1.064-3.043 1.064h-2.54v-7.853h2.718c1.26 0 2.233.322 2.919.967.687.645 1.028 1.575 1.028 2.793zm-2.201.075c0-.72-.143-1.253-.428-1.601-.284-.348-.717-.521-1.297-.521h-.617v4.398h.473c.645 0 1.117-.188 1.418-.562s.451-.944.451-1.714zM28.281 32.062c0 1.322-.324 2.326-.973 3.014s-1.598 1.031-2.847 1.031c-1.231 0-2.177-.346-2.833-1.037-.657-.69-.986-1.697-.986-3.018 0-1.308.327-2.306.98-2.995.654-.689 1.604-1.034 2.85-1.034 1.25 0 2.197.343 2.842 1.026s.967 1.689.967 3.013zm-5.404 0c0 1.519.529 2.277 1.585 2.277.537 0 .936-.184 1.194-.553.26-.369.391-.943.391-1.725 0-.783-.133-1.363-.395-1.737-.264-.374-.656-.562-1.18-.562-1.063.002-1.595.768-1.595 2.3zM33.195 29.775c-.505 0-.898.206-1.182.62-.283.413-.424.983-.424 1.71 0 1.512.574 2.268 1.724 2.268.347 0 .685-.049 1.01-.146s.653-.213.983-.349v1.793c-.656.291-1.396.436-2.225.436-1.185 0-2.094-.344-2.725-1.031-.633-.688-.949-1.682-.949-2.98 0-.813.154-1.527.459-2.144.307-.616.748-1.09 1.322-1.421s1.25-.496 2.027-.496c.849 0 1.66.184 2.434.553L35 30.258c-.29-.136-.58-.25-.87-.344a3.046 3.046 0 0 0-.935-.139z"
  })));
};

var _default = SvgDoc;
exports["default"] = _default;