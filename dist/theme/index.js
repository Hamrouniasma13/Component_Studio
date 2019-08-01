"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _utils = require("./utils");

var _colors = _interopRequireDefault(require("./colors"));

var _eases = _interopRequireDefault(require("./eases"));

var _media = _interopRequireWildcard(require("./media"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var progress = (0, _core.keyframes)({
  '0%': {
    backgroundPosition: '200%'
  },
  '60%, 100%': {
    backgroundPosition: '0%'
  }
});
var baseColor = '#eee';
var animatedColor = (0, _utils.lighten)(baseColor, 2);
var theme = {
  colors: _colors["default"],
  media: _media["default"],
  breakpoints: _media.breakpoints,
  eases: _eases["default"],
  skeletonWave: {
    backgroundImage: "linear-gradient(90deg, ".concat(baseColor, " 80%, ").concat(animatedColor, " 90%, ").concat(baseColor, " 100%)"),
    backgroundSize: '800px',
    animation: "".concat(progress, " 3s ease-in-out infinite"),
    backgroundColor: baseColor,
    color: 'transparent',
    display: 'block'
  }
};
var _default = theme;
exports["default"] = _default;