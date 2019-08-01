"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _typos = _interopRequireDefault(require("../typos"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var offset = -20;

var Label = function Label(_ref) {
  var x = _ref.x,
      y = _ref.y,
      payload = _ref.payload;
  return (0, _core.jsx)("g", {
    transform: "translate(".concat(x, ",").concat(y, ")")
  }, (0, _core.jsx)("text", {
    x: offset,
    y: 0,
    textAnchor: "end",
    dominantBaseline: "middle",
    transform: "rotate(-90)",
    css: _objectSpread({}, _typos["default"].legend)
  }, payload.value));
};

var offsetBottom = 15;

var TopLabel = function TopLabel(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      value = _ref2.value;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isShown = _React$useState2[0],
      setIsShown = _React$useState2[1];

  _react["default"].useEffect(function () {
    return setIsShown(true);
  }, []);

  return (0, _core.jsx)("g", null, (0, _core.jsx)("text", {
    css: _objectSpread({
      transition: 'opacity 0.2s',
      opacity: isShown ? 1 : 0
    }, _typos["default"].legend),
    x: x + width / 2,
    y: y - offsetBottom,
    fill: "#000",
    textAnchor: "middle",
    dominantBaseline: "middle"
  }, value));
};

var Histogram = function Histogram(_ref3) {
  var className = _ref3.className,
      width = _ref3.width,
      height = _ref3.height,
      data = _ref3.data;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors;

  return (0, _core.jsx)("div", {
    className: className
  }, (0, _core.jsx)(_recharts.BarChart, {
    data: data,
    margin: {
      top: 30,
      right: 20,
      left: 20,
      bottom: 20
    }
  }, (0, _core.jsx)(_recharts.XAxis, {
    height: 100,
    dataKey: "label",
    interval: 0,
    axisLine: {
      stroke: colors.gray
    },
    tickLine: false,
    tick: (0, _core.jsx)(Label, null)
  }), (0, _core.jsx)(_recharts.Bar, {
    dataKey: "value",
    minPointSize: 10
  }, data.map(function (d, i) {
    return (0, _core.jsx)(_recharts.Cell, {
      key: "cell-".concat(i),
      fill: "".concat(colors.charts[i])
    });
  }), (0, _core.jsx)(_recharts.LabelList, {
    dataKey: "percent",
    content: (0, _core.jsx)(TopLabel, null)
  }))));
};

Histogram.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      percent: _propTypes["default"].string,
      label: _propTypes["default"].string,
      value: _propTypes["default"].number
    }))
  })),
  onChange: _propTypes["default"].func
};
Histogram.defaultProps = {
  data: [],
  onChange: function onChange() {}
};
var _default = Histogram;
exports["default"] = _default;