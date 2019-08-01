"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _ChartBox = _interopRequireDefault(require("./ChartBox"));

var _DataTable = _interopRequireDefault(require("../DataTable"));

var _PieChart = _interopRequireDefault(require("./PieChart"));

var _InputSelect = _interopRequireDefault(require("../forms/InputSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PieChartBox = function PieChartBox(_ref) {
  var title = _ref.title,
      value = _ref.value,
      info = _ref.info,
      data = _ref.data,
      dataTable = _ref.dataTable,
      className = _ref.className;

  var _React$useState = _react["default"].useState(data[0].values),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentData = _React$useState2[0],
      setCurrentData = _React$useState2[1];

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors,
      media = _React$useContext.media;

  var hasMultipleLines = data && data.length > 1;
  var options = data.map(function (d) {
    return {
      label: d.label,
      value: d.label
    };
  });
  var defaultValue = options[0];

  var handleChange = function handleChange(value) {
    return setCurrentData(data.find(function (c) {
      return c.label === value.label;
    }).values);
  };

  var styles = {
    inputSelect: _defineProperty({
      marginBottom: '50px'
    }, media.laptop, {
      padding: '0 40px',
      marginBottom: 30
    })
  };
  return (0, _core.jsx)(_ChartBox["default"], {
    className: className,
    title: title,
    chart: (0, _core.jsx)(_PieChart["default"], {
      value: value,
      info: info,
      values: currentData,
      onChange: handleChange
    }),
    select: hasMultipleLines ? (0, _core.jsx)(_InputSelect["default"], {
      css: styles.inputSelect,
      defaultValue: defaultValue,
      options: options,
      onChange: handleChange
    }) : null,
    table: (0, _core.jsx)(_DataTable["default"], {
      title: dataTable.title,
      info: dataTable.info,
      rows: currentData.map(function (d, i) {
        return {
          dotColor: colors.charts[i],
          title: d.name,
          value: d.displayValue || d.value || d.tooltip
        };
      })
    }),
    actions: dataTable.actions
  });
};

PieChartBox.propTypes = {
  title: _propTypes["default"].string,
  value: _propTypes["default"].any,
  displayValue: _propTypes["default"].string,
  info: _propTypes["default"].string,
  data: _propTypes["default"].array,
  dataTable: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    info: _propTypes["default"].string,
    actions: _propTypes["default"].array
  })
};
PieChartBox.defaultProps = {
  title: '',
  value: '',
  displayValue: '',
  info: '',
  data: [],
  dataTable: {
    title: '',
    info: '',
    actions: []
  }
};
var _default = PieChartBox;
exports["default"] = _default;