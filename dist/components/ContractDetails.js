"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContractDetails;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Detail(_ref) {
  var _element;

  var label = _ref.label,
      value = _ref.value,
      info = _ref.info,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 25 : _ref$width;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    element: (_element = {
      "float": 'left',
      width: '50%',
      boxSizing: 'border-box',
      padding: '0 30px',
      marginBottom: 30
    }, _defineProperty(_element, theme.media.laptop, {
      width: "".concat(width, "%")
    }), _defineProperty(_element, theme.media.desktop, {
      padding: '0 20px'
    }), _element),
    label: {
      display: 'block'
    },
    value: {
      display: 'block',
      color: theme.colors[color] || color
    },
    info: {
      display: 'block'
    }
  };
  return (0, _core.jsx)("li", {
    css: styles.element
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.label,
    size: "typo5",
    mb: 10
  }, label), (0, _core.jsx)(_Text["default"], {
    css: styles.value,
    size: "typo3",
    mb: 10
  }, value), info && (0, _core.jsx)(_Text["default"], {
    css: styles.info,
    size: "typo6"
  }, info));
}

function ContractDetails(_ref2) {
  var _objectSpread2;

  var fullWidth = _ref2.fullWidth,
      details = _ref2.details;

  var theme = _react["default"].useContext(_core.ThemeContext);

  if (!details || details.length <= 0) return null;
  var styles = {
    wrapper: _defineProperty({
      display: 'flex',
      margin: 20
    }, theme.media.tablet, {
      margin: 0
    }),
    listWrapper: {
      flex: 1
    },
    list: _objectSpread({}, fullWidth ? {
      width: '100%'
    } : {
      minWidth: 500
    }, (_objectSpread2 = {
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      paddingTop: 19,
      backgroundColor: '#fff',
      // reset list
      boxSizing: 'border-box',
      listStyleType: 'none',
      paddingLeft: 0,
      margin: 0
    }, _defineProperty(_objectSpread2, theme.media.laptop, _objectSpread({
      height: 120
    }, fullWidth ? {
      width: '100%'
    } : {
      minWidth: 600
    })), _defineProperty(_objectSpread2, theme.media.desktop, _objectSpread({}, fullWidth ? {
      width: '100%'
    } : {
      minWidth: 700
    })), _objectSpread2))
  };
  var customWidth = 100 / details.length;
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("ul", {
    css: styles.list
  }, details.map(function (detail, key) {
    return (0, _core.jsx)(Detail, _extends({
      key: key
    }, detail, {
      width: customWidth
    }));
  })));
}

ContractDetails.defaultProps = {
  fullWidth: false
};
ContractDetails.propTypes = {
  fullWidth: _propTypes["default"].bool,

  /**
   * In order to respect the design, details length has to not exceed 5 elements.
   */
  details: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element]),
    color: _propTypes["default"].string,
    info: _propTypes["default"].any
  }))
};