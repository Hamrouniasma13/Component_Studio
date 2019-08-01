"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Radios = function Radios(_ref) {
  var name = _ref.name,
      color = _ref.color,
      big = _ref.big,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  if (!options || options.length < 1) return null;

  function onValueChange(result) {
    var value = result.checked === true ? result.name : '';
    setSelected(value);
    onChange({
      name: name,
      value: value
    });
  }

  return options.map(function (opt, i) {
    return _react["default"].createElement(_Checkbox["default"], {
      color: color,
      id: name,
      big: big,
      key: i + opt.value,
      name: opt.value,
      checked: selected === opt.value,
      label: opt.label,
      onChange: onValueChange
    });
  });
};

Radios.propTypes = {
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
    label: _propTypes["default"].string
  })),

  /**
   * Function called each time the value change
   */
  onChange: _propTypes["default"].func
};
Radios.defaultProps = {
  options: [],
  big: false,
  onChange: function onChange() {}
};
var _default = Radios;
exports["default"] = _default;