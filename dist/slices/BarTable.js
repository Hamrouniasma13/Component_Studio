"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUse = require("react-use");

var _InputSelect = _interopRequireDefault(require("../components/forms/InputSelect"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Histogram = _interopRequireDefault(require("../components/Histogram"));

var _DataTable = _interopRequireDefault(require("../components/DataTable"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Slice = _interopRequireDefault(require("../slices/Slice"));

var _useChartWidth = _interopRequireDefault(require("../hooks/useChartWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BarTable(_ref) {
  var title = _ref.title,
      tableTitle = _ref.tableTitle,
      data = _ref.data;

  var _React$useState = _react["default"].useState(data[0].values),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentData = _React$useState2[0],
      setCurrentData = _React$useState2[1];

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      breakpoints = _React$useContext.breakpoints,
      colors = _React$useContext.colors,
      media = _React$useContext.media;

  var isLaptop = (0, _reactUse.useMedia)("(min-width : ".concat(breakpoints.laptop, "px)"));
  var hasMultipleLines = data && data.length > 1;
  var options = data.map(function (d) {
    return {
      label: d.label,
      value: d.label
    };
  });
  var defaultValue = options[0];
  var width = (0, _useChartWidth["default"])();

  var handleChange = function handleChange(value) {
    return setCurrentData(data.find(function (c) {
      return c.label === value.label;
    }).values);
  };

  var styles = {
    title: {
      marginBottom: '50px',
      borderBottom: "1px solid ".concat(colors.lightGray),
      paddingBottom: '30px'
    },
    wrapper: _objectSpread({
      label: 'TableWrapper'
    }, isLaptop ? {
      display: 'flex'
    } : {}),
    histogram: _objectSpread(_defineProperty({}, media.desktop, {
      marginRight: 30,
      paddingRight: 30
    }), isLaptop ? {
      borderRight: "1px solid ".concat(colors.lightGray)
    } : {}),
    inputSelect: _defineProperty({
      marginBottom: '50px'
    }, media.laptop, {
      padding: '0 40px',
      marginBottom: 30
    })
  };
  return (0, _core.jsx)(_Slice["default"], null, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)(_Text["default"].h2, {
    css: styles.title
  }, title), (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.histogram
  }, hasMultipleLines ? (0, _core.jsx)(_InputSelect["default"], {
    css: styles.inputSelect,
    defaultValue: defaultValue,
    options: options,
    onChange: handleChange
  }) : null, (0, _core.jsx)(_Histogram["default"], {
    data: currentData,
    width: width
  })), (0, _core.jsx)(_DataTable["default"], {
    css: isLaptop ? {
      flexGrow: 2
    } : {},
    title: tableTitle,
    rows: currentData.map(function (d, i) {
      return {
        dotColor: colors.charts[i],
        title: d.label,
        value: d.value
      };
    })
  }))));
}

BarTable.propTypes = {
  title: _propTypes["default"].string,
  tableTitle: _propTypes["default"].string,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    percent: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].number
  }))
};
BarTable.defaultProps = {
  title: '',
  tableTitle: '',
  data: []
};
var _default = BarTable;
exports["default"] = _default;