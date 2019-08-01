"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPeople = function SvgPeople(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 22"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "people_svg__a",
    d: "M9.043 29.345H22.61V27.38a1.05 1.05 0 0 0-.744-1l-3.463-1.038a1.572 1.572 0 0 1-1.1-1.278l-.294-2.06.74.168c1.417.323 2.446.22 3.03.093a10.467 10.467 0 0 1-1.299-4.361v-.937a3.764 3.764 0 0 0-3.42-3.788 3.653 3.653 0 0 0-3.885 3.646v1.043a10.5 10.5 0 0 1-1.3 4.398c.583.126 1.613.229 3.03-.094l.74-.167-.294 2.059a1.57 1.57 0 0 1-1.096 1.277l-3.467 1.04a1.037 1.037 0 0 0-.744.999v1.966zm14.61 1.044H8v-3.01c0-.928.598-1.732 1.487-1.999l3.466-1.039a.522.522 0 0 0 .364-.425l.084-.587c-2.234.339-3.49-.271-3.547-.3l-.521-.26.316-.49a9.406 9.406 0 0 0 1.482-4.448v-1.007a4.664 4.664 0 0 1 1.604-3.534 4.66 4.66 0 0 1 3.404-1.152c2.495.218 4.415 2.342 4.383 4.835v.894a9.389 9.389 0 0 0 1.481 4.412l.317.49-.522.26c-.057.029-1.313.639-3.547.3l.084.586c.029.2.173.368.367.426l3.463 1.04a2.075 2.075 0 0 1 1.487 1.998v3.01zm8.347 0h-6.26v-1.044h5.217v-3.078c0-.437-.276-.831-.687-.98l-4.122-1.499a1.56 1.56 0 0 1-1.017-1.252l-.318-2.234.354-.162a3.658 3.658 0 0 0 2.137-3.317v-3.092a1.76 1.76 0 0 0-1.755-1.755h-.322l-.696-1.392-2.732.975c-.268.1-.52.248-.739.44l-.393.343-.686-.785.393-.344c.315-.275.675-.49 1.069-.635l2.816-1.006a.963.963 0 0 1 1.162.459l.46.921a2.805 2.805 0 0 1 2.467 2.779v3.093a4.707 4.707 0 0 1-2.395 4.086l.211 1.479a.52.52 0 0 0 .34.418l4.122 1.5A2.092 2.092 0 0 1 32 26.266v4.122z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-8 -9)",
    xlinkHref: "#people_svg__a"
  }));
};

var _default = SvgPeople;
exports["default"] = _default;