"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _Text = _interopRequireDefault(require("../Text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var MapPinDetails = function MapPinDetails(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      description = _ref.description,
      phoneNumber = _ref.phoneNumber;

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors;

  var styles = {
    wrapper: {
      width: '250px',
      padding: '15px',
      backgroundColor: colors.white,
      marginBottom: '5px',
      borderRadius: '5px',
      boxShadow: "0 2px 4px ".concat(colors.black)
    },
    label: {
      color: colors.label
    },
    phoneNumber: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.3px',
      lineHeight: '1.4em',
      textDecoration: 'underline'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "h3"
  }, title), (0, _core.jsx)(_Text["default"], {
    tag: "h5",
    css: styles.label
  }, subTitle), (0, _core.jsx)(_Text["default"], {
    tag: "h5"
  }, description), (0, _core.jsx)("a", {
    href: "tel:".concat(phoneNumber),
    css: styles.phoneNumber
  }, phoneNumber));
};

MapPinDetails.defaultProps = {
  subTitle: _propTypes["default"].string,
  description: _propTypes["default"].string,
  phoneNumber: _propTypes["default"].string
};
MapPinDetails.propTypes = {
  title: _propTypes["default"].string.isRequired,
  subTitle: _propTypes["default"].string,
  description: _propTypes["default"].string,
  phoneNumber: _propTypes["default"].string
};
var _default = MapPinDetails;
exports["default"] = _default;