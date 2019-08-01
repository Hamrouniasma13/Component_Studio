"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _get = _interopRequireDefault(require("lodash/get"));

var _Link = _interopRequireDefault(require("../../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Stroke = function Stroke(_ref) {
  var hasStroke = _ref.hasStroke,
      _ref$strokeLeft = _ref.strokeLeft,
      strokeLeft = _ref$strokeLeft === void 0 ? 0 : _ref$strokeLeft,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 0 : _ref$strokeWidth;

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors,
      eases = _useContext.eases;

  return (0, _core.jsx)("div", {
    css: {
      position: 'absolute',
      backgroundColor: colors.secondary,
      height: hasStroke ? '4px' : '0px',
      left: "".concat(strokeLeft, "px"),
      width: "".concat(strokeWidth, "px"),
      bottom: 0,
      transition: "left 0.2s ".concat(eases.easeOutQuart, ", width 0.1s, height 0.1s")
    }
  });
};

function Menu(_ref2) {
  var links = _ref2.links;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasStroke = _useState2[0],
      setHasStroke = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      strokeWidth = _useState4[0],
      setStrokeWidth = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      strokeLeft = _useState6[0],
      setStrokeLeft = _useState6[1];

  var onMouseLeave = function onMouseLeave() {
    return setHasStroke(false);
  };

  var onMouseEnter = function onMouseEnter(e) {
    var offsetLeft = (0, _get["default"])(e, 'currentTarget.offsetLeft');
    var offsetWidth = (0, _get["default"])(e, 'currentTarget.offsetWidth');
    setHasStroke(true);
    setStrokeLeft(offsetLeft);
    setStrokeWidth(offsetWidth);
  };

  return (0, _core.jsx)("nav", {
    css: {
      position: 'relative'
    }
  }, (0, _core.jsx)(MenuLinks, {
    links: links,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }), (0, _core.jsx)(Stroke, {
    hasStroke: hasStroke,
    strokeLeft: strokeLeft,
    strokeWidth: strokeWidth
  }));
}

var MenuLinks = function MenuLinks(_ref3) {
  var links = _ref3.links,
      onMouseEnter = _ref3.onMouseEnter,
      onMouseLeave = _ref3.onMouseLeave;

  var _useContext2 = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext2.colors;

  var styles = {
    ul: {
      height: '80px'
    },
    li: {
      "float": 'left',
      display: 'table',
      height: '100%',
      marginLeft: '20px',
      marginRight: '20px',
      marginBottom: '0px',
      '&:first-of-type': {
        marginLeft: 0
      },
      '&:last-of-type': {
        marginRight: 0
      }
    },
    link: {
      display: 'table-cell',
      verticalAlign: 'middle',
      fontWeight: 600,
      letterSpacing: '0.2px',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textTransform: 'uppercase',
      fontSize: 14,
      color: colors.text,
      textDecoration: 'none'
    }
  };
  return (0, _core.jsx)("ul", {
    css: styles.ul,
    onMouseLeave: onMouseLeave
  }, links.map(function (link, i) {
    return (0, _core.jsx)("li", {
      css: styles.li,
      key: i,
      onMouseEnter: onMouseEnter
    }, (0, _core.jsx)(_Link["default"], {
      css: styles.link,
      href: link.url
    }, link.label));
  }));
};

Menu.propTypes = {
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }))
};
var _default = Menu;
exports["default"] = _default;