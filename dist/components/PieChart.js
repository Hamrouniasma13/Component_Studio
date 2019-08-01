"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PieChart;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function PieChart(_ref) {
  var size = _ref.size,
      label = _ref.label,
      value = _ref.value,
      info = _ref.info,
      values = _ref.values;

  var theme = _react["default"].useContext(_core.ThemeContext);

  if (!values || !Array.isArray(values)) return null; // Center of each text

  var x = size / 2,
      y = size / 2; // Font size of main text

  var valueSize = value ? value.length : 0;
  var fontSize = valueSize < 8 ? 48 : valueSize > 10 ? 34 : 38;
  var labelNode = label && (0, _core.jsx)("text", {
    x: x,
    y: y - 45,
    dy: 6,
    textAnchor: "middle",
    fill: "#999",
    fontSize: "13px"
  }, label);
  var valueNode = value && (0, _core.jsx)("text", {
    "data-cy": label,
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
  var cells = values.map(function (_ref2, key) {
    var color = _ref2.color;
    return (0, _core.jsx)(_recharts.Cell, {
      key: key,
      fill: theme.colors[color] || color
    });
  });
  return (0, _core.jsx)(_recharts.PieChart, {
    width: size,
    height: size
  }, labelNode, valueNode, infoNode, (0, _core.jsx)(_recharts.Pie, {
    startAngle: -270,
    data: values,
    dataKey: "value",
    innerRadius: "90%",
    outerRadius: "100%",
    animationBegin: 500,
    animationDuration: 600,
    AnimationEasing: 'ease-out'
  }, cells));
}

PieChart.propTypes = {
  size: _propTypes["default"].number,
  label: _propTypes["default"].string,
  value: _propTypes["default"].any,
  info: _propTypes["default"].string,
  values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    color: _propTypes["default"].string,
    value: _propTypes["default"].number
  })).isRequired
};
PieChart.defaultProps = {
  size: 200,
  values: []
};