"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PieChart;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _CustomTooltip = _interopRequireDefault(require("./CustomTooltip"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recharts = require("recharts");

var _useDimensions3 = _interopRequireDefault(require("../../hooks/useDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PieChart(_ref) {
  var width = _ref.width,
      height = _ref.height,
      value = _ref.value,
      info = _ref.info,
      values = _ref.values;

  var _useDimensions = (0, _useDimensions3["default"])(),
      _useDimensions2 = _slicedToArray(_useDimensions, 2),
      ref = _useDimensions2[0],
      dimensions = _useDimensions2[1];

  var theme = _react["default"].useContext(_core.ThemeContext);

  if (!values || !Array.isArray(values)) return null; // Center of each text

  var x = dimensions.width / 2,
      y = height / 2; // Font size of main text

  var valueSize = value ? value.length : 0;
  var fontSize = valueSize < 8 ? 48 : valueSize > 10 ? 34 : 38;
  var valueNode = value && (0, _core.jsx)("text", {
    x: x,
    y: y,
    dy: fontSize / 4,
    textAnchor: "middle",
    fill: "#333",
    fontSize: fontSize + 'px',
    fontWeight: "bold"
  }, value);
  var infoNode = info && (0, _core.jsx)("text", {
    x: x,
    y: y + 35,
    dy: 6,
    textAnchor: "middle",
    fill: "#999",
    fontSize: "13px"
  }, info);
  var cells = values.map(function (v, key) {
    return (0, _core.jsx)(_recharts.Cell, {
      key: key,
      fill: theme.colors.charts[key]
    });
  });
  return (0, _core.jsx)("div", {
    ref: ref
  }, (0, _core.jsx)(_recharts.ResponsiveContainer, {
    width: width,
    height: height
  }, (0, _core.jsx)(_recharts.PieChart, {
    margin: {
      top: 50,
      right: 50,
      left: 50,
      bottom: 50
    }
  }, valueNode, infoNode, (0, _core.jsx)(_recharts.Pie, {
    startAngle: -270,
    data: values,
    dataKey: "value",
    innerRadius: "85%",
    outerRadius: "100%",
    animationBegin: 500,
    animationDuration: 600,
    AnimationEasing: 'ease-out'
  }, cells), (0, _core.jsx)(_recharts.Tooltip, {
    cursor: false,
    content: (0, _core.jsx)(_CustomTooltip["default"], null)
  }))));
}

PieChart.propTypes = {
  value: _propTypes["default"].any,
  info: _propTypes["default"].string,
  values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    tooltip: _propTypes["default"].any,
    color: _propTypes["default"].string,
    value: _propTypes["default"].number
  })).isRequired
};
PieChart.defaultProps = {
  height: 320,
  width: '100%',
  values: []
};