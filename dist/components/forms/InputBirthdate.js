"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var range = function range(number, min, max) {
  return Math.min(Math.max(parseInt(number), min), max);
};

var Wrapper = (0, _styled["default"])('div')({
  display: 'flex',
  justifyContent: 'left'
});
var OuterInput = (0, _styled["default"])('div')({
  width: 80,
  marginRight: 20
});
var StyledInput = (0, _styled["default"])(_Input["default"])({
  '-moz-appearance': 'textfield',
  textAlign: 'center',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0'
  }
});

var InputField = function InputField(props) {
  return _react["default"].createElement(OuterInput, null, _react["default"].createElement(StyledInput, props));
};

var formatType = function formatType(val, type) {
  if (type === 'day') return range(val, 0, 31);
  if (type === 'month') return range(val, 0, 12);
  if (type === 'year') return range(val, 0, new Date().getFullYear());
};

function InputBirthdate(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      name = _ref.name,
      error = _ref.error,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["value", "onChange", "onBlur", "name", "error", "disabled"]);

  var _useState = (0, _react.useState)({
    day: value && value.getDate() || '',
    month: value && value.getMonth() + 1 || '',
    year: value && value.getFullYear()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1]; // Check if values are filled then trigger the onChange based on the given value


  var updateThenChange = function updateThenChange(values) {
    var valuesKeys = Object.keys(date);
    var length = valuesKeys.map(function (d) {
      return date[d];
    }).filter(function (d) {
      return d;
    }).length;

    if (length === valuesKeys.length) {
      var newDate = new Date(values.year, values.month, values.day);
      onChange({
        type: 'birthdate',
        name: name,
        value: newDate
      });
    }
  };

  var handleChange = function handleChange(type) {
    return function (e) {
      var val = e.target.value || '0';
      setDate(_objectSpread({}, date, _defineProperty({}, type, formatType(val, type)))); // update the date with the new value and reuse it instead of using the date state

      var values = _objectSpread({}, date, _defineProperty({}, type, val));

      updateThenChange(values);
    };
  };

  var handleBlur = function handleBlur() {
    updateThenChange(date);
    onBlur({
      type: 'birthdate',
      name: name
    });
  };

  return _react["default"].createElement(Wrapper, rest, _react["default"].createElement(InputField, {
    error: error,
    disabled: disabled,
    name: name + '--day',
    onBlur: handleBlur,
    onChange: handleChange('day'),
    value: date.day,
    type: "number",
    placeholder: 'day'
  }), _react["default"].createElement(InputField, {
    error: error,
    disabled: disabled,
    name: name + '--month',
    onBlur: handleBlur,
    onChange: handleChange('month'),
    value: date.month,
    type: "number",
    placeholder: 'month'
  }), _react["default"].createElement(InputField, {
    error: error,
    disabled: disabled,
    name: name + '--year',
    onBlur: handleBlur,
    onChange: handleChange('year'),
    value: date.year,
    type: "number",
    placeholder: 'year'
  }));
}

var _default = InputBirthdate;
exports["default"] = _default;