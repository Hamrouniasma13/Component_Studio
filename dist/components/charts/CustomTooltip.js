"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _get = _interopRequireDefault(require("lodash/get"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var CustomTooltip = function CustomTooltip(props) {
  var active = props.active,
      payload = props.payload;
  var tooltip = (0, _get["default"])(payload, '[0].payload.tooltip');

  if (active && tooltip) {
    return (0, _core.jsx)("div", {
      css: {
        border: '1px solid white',
        padding: 10,
        background: payload[0].payload.fill
      }
    }, (0, _core.jsx)(_Text["default"].p, {
      css: {
        color: 'white'
      }
    }, tooltip));
  }

  return null;
};

var _default = CustomTooltip;
exports["default"] = _default;