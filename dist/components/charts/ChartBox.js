"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMedia = _interopRequireDefault(require("react-use/lib/useMedia"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _SimpleButton = _interopRequireDefault(require("../../components/SimpleButton"));

var _useChartWidth = _interopRequireDefault(require("../../hooks/useChartWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ChartBox(_ref) {
  var _innerWrapper;

  var title = _ref.title,
      select = _ref.select,
      chart = _ref.chart,
      table = _ref.table,
      actions = _ref.actions,
      className = _ref.className;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      breakpoints = _React$useContext.breakpoints,
      media = _React$useContext.media,
      colors = _React$useContext.colors;

  var isLaptop = (0, _useMedia["default"])("(min-width : ".concat(breakpoints.laptop, "px)"));
  var width = (0, _useChartWidth["default"])();
  var styles = {
    wrapper: {
      backgroundColor: colors.white,
      marginBottom: 50,
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: "1px solid ".concat(colors.lighterGray),
      padding: '20px'
    },
    title: {
      borderBottom: "1px solid ".concat(colors.lightGray),
      paddingBottom: '24px'
    },
    innerWrapper: (_innerWrapper = {}, _defineProperty(_innerWrapper, media.tablet, {
      paddingBottom: '30px'
    }), _defineProperty(_innerWrapper, media.laptop, _objectSpread({}, isLaptop ? {
      display: 'flex'
    } : {}, {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    })), _innerWrapper),
    chart: _defineProperty({
      marginTop: '30px',
      marginBottom: '50px'
    }, media.laptop, {
      width: width,
      margin: '0 30px 0 0'
    }),
    tables: _defineProperty({}, media.laptop, {
      flex: 1
    }),
    table: {
      '&:not(:last-child)': _defineProperty({
        marginBottom: '20px'
      }, media.tablet, {
        marginBottom: '30px'
      })
    },
    actions: _defineProperty({}, media.tablet, {
      display: 'flex',
      justifyContent: 'space-between'
    })
  };
  return (0, _core.jsx)("div", {
    className: className,
    css: styles.wrapper
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    css: styles.title
  }, title), (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, (0, _core.jsx)("div", {
    css: styles.chart
  }, select ? select : null, chart), (0, _core.jsx)("div", {
    css: styles.tables
  }, (0, _core.jsx)("div", {
    css: styles.table
  }, table), actions && actions.length > 0 && (0, _core.jsx)("div", {
    css: styles.actions
  }, actions.map(function (_ref2, i) {
    var url = _ref2.url,
        label = _ref2.label;
    return (0, _core.jsx)(_SimpleButton["default"], {
      href: url,
      key: i
    }, label);
  })))));
}

ChartBox.propTypes = {
  title: _propTypes["default"].string
};
var _default = ChartBox;
exports["default"] = _default;