"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function Logo(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height,
      to = _ref.to;
  var styles = {
    link: {
      height: height,
      width: width,
      display: 'block'
    },
    img: {
      height: '100%',
      maxWidth: '100%'
    }
  };
  return (0, _core.jsx)(_Link["default"], {
    href: to,
    css: styles.link
  }, (0, _core.jsx)("img", {
    src: src,
    alt: alt,
    css: styles.img
  }));
}

Logo.propTypes = {
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  to: _propTypes["default"].string
};
Logo.defaultProps = {
  height: '60px',
  alt: 'Logo',
  to: '/'
};
var _default = Logo;
exports["default"] = _default;