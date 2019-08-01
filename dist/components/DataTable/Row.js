"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Row;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("../Link"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Pill = _interopRequireDefault(require("../Pill"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Dot = function Dot(_ref) {
  var color = _ref.color;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors;

  var style = {
    backgroundColor: colors[color] ? colors[color] : color,
    width: 15,
    height: 15,
    marginRight: '10px',
    borderRadius: '50%'
  };
  return (0, _core.jsx)("div", {
    css: style
  });
};

function Row(_ref2) {
  var pill = _ref2.pill,
      dotColor = _ref2.dotColor,
      title = _ref2.title,
      value = _ref2.value,
      simulation = _ref2.simulation,
      link = _ref2.link;

  var _React$useContext2 = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext2.colors; // Displays border if a link is present


  var border = !!link;
  var styles = {
    wrapper: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15,
      paddingBottom: 15,
      // Row with link have border
      border: border ? '1px solid #ccc' : 0,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      transition: 'background-color 0.2s ease',
      '&:nth-of-type(odd)': {
        backgroundColor: colors.smallLightGray
      },
      '& svg': {
        transition: 'transform 0.15s',
        transform: 'translate3d(0, 0, 0)'
      },
      // When 2 links are one of top of the other, remove the top border of the second one
      '& + &': border ? {
        borderTop: 0
      } : {},
      // Hover state for link
      '&:hover': border ? {
        backgroundColor: '#F2F2F2',
        '& svg': {
          transform: 'translate3d(5px, 0, 0)'
        }
      } : {}
    },
    pill: {
      marginRight: 15
    },
    title: {
      flex: 1
    },
    simulation: {
      fontWeight: 600,
      textDecoration: 'line-through',
      marginLeft: 10
    },
    value: {
      fontWeight: 600,
      marginLeft: 10
    },
    icon: {
      paddingLeft: 10
    } // Choose between Link and simple div for the wrapper

  };
  var WrapperTag = link ? _Link["default"] : 'div';
  return (0, _core.jsx)(WrapperTag, _extends({
    css: styles.wrapper
  }, link ? {
    to: link
  } : {}), dotColor ? (0, _core.jsx)(Dot, {
    color: colors[dotColor] || dotColor
  }) : pill ? (0, _core.jsx)(_Pill["default"], {
    css: styles.pill,
    color: pill.color,
    large: true
  }, pill.value) : null, (0, _core.jsx)(_Text["default"], {
    css: styles.title
  }, title), simulation && (0, _core.jsx)("span", {
    css: styles.simulation
  }, simulation), value && (0, _core.jsx)("span", {
    css: styles.value
  }, value), !!link && (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: "right",
    size: "20"
  }));
}

Row.propTypes = {
  dotColor: _propTypes["default"].string,
  pill: _propTypes["default"].shape({
    color: _propTypes["default"].string,
    value: _propTypes["default"].string
  }),
  title: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any,
  simulation: _propTypes["default"].any,
  link: _propTypes["default"].string
};
Row.defaultProps = {
  dot: false
};