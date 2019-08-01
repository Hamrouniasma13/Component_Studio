"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Checkboxes = function Checkboxes(_ref) {
  var color = _ref.color,
      name = _ref.name,
      big = _ref.big,
      options = _ref.options,
      onChange = _ref.onChange;
  if (!options || options.length < 1) return null;
  var defaultState = new Set((0, _lodash.compact)(options.map(function (o) {
    return o.checked === true ? o.value : null;
  })));

  var _useState = (0, _react.useState)(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  function onValueChange(value) {
    var newSet = new Set(values);
    if (value.checked && !newSet.has(value.name)) newSet.add(value.name);else newSet["delete"](value.name);
    setValues(newSet);
    onChange({
      name: name,
      value: _toConsumableArray(newSet)
    });
  }

  return options.map(function (_ref2, i) {
    var value = _ref2.value,
        label = _ref2.label;
    return _react["default"].createElement(_Checkbox["default"], {
      color: color,
      id: name,
      big: big,
      key: i + value,
      name: value,
      checked: values.has(value),
      label: label,
      onChange: onValueChange
    });
  });
};

Checkboxes.propTypes = {
  /**
   * Input name
   */
  name: _propTypes["default"].string,

  /**
   * checkbox size
   */
  big: _propTypes["default"].bool,

  /**
   * Array of value for each input
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].any,
    label: _propTypes["default"].string,
    checked: _propTypes["default"].bool
  })),

  /**
   * Function called each time the value change
   */
  onChange: _propTypes["default"].func
};
Checkboxes.defaultProps = {
  options: [],
  big: false,
  onChange: function onChange() {}
};
var _default = Checkboxes;
exports["default"] = _default;