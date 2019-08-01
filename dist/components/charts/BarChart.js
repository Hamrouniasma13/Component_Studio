"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _CustomTooltip = _interopRequireDefault(require("./CustomTooltip"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BarChart = function BarChart(_ref) {
  var className = _ref.className,
      values = _ref.values,
      width = _ref.width,
      height = _ref.height;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors;

  var newData = values.map(function (d, i) {
    return _objectSpread({}, d, {
      fill: colors.charts[i]
    });
  });
  return (0, _core.jsx)("div", {
    className: className
  }, (0, _core.jsx)(_recharts.ResponsiveContainer, {
    width: width,
    height: height
  }, (0, _core.jsx)(_recharts.BarChart, {
    data: newData,
    margin: {
      top: 0,
      right: 10,
      left: 10,
      bottom: 50
    }
  }, (0, _core.jsx)(_recharts.XAxis, {
    dataKey: "name",
    hide: true
  }), (0, _core.jsx)(_recharts.Bar, {
    dataKey: "value",
    minPointSize: 10
  }, newData.map(function (d, i) {
    return (0, _core.jsx)(_recharts.Cell, {
      key: "cell-".concat(i),
      fill: "".concat(colors.charts[i])
    });
  })), (0, _core.jsx)(_recharts.Tooltip, {
    cursor: false,
    content: (0, _core.jsx)(_CustomTooltip["default"], null)
  }))));
};

BarChart.propTypes = {
  values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      percent: _propTypes["default"].string,
      name: _propTypes["default"].string,
      value: _propTypes["default"].number
    }))
  }))
};
BarChart.defaultProps = {
  width: '100%',
  height: 320,
  values: []
};
var _default = BarChart;
exports["default"] = _default;