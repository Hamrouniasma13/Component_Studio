"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactDayPicker = require("react-day-picker");

var _format = _interopRequireDefault(require("date-fns/format"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _emotionTheming = require("emotion-theming");

var _DayPickerWrapper = _interopRequireDefault(require("./DayPickerWrapper"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Input from '../Input'
var Wrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    label: 'Wrapper',
    position: 'relative',
    width: '100%',
    minWidth: '240px'
  }, theme.media.tablet, {
    maxWidth: '330px'
  });
});
var StyledIcon = (0, _styled["default"])(_Icon["default"])(function (_ref3) {
  var theme = _ref3.theme,
      disabled = _ref3.disabled;
  return _objectSpread({}, disabled ? {
    color: theme.colors.lightGray
  } : {}, {
    display: 'block',
    position: 'absolute',
    top: '10px',
    right: '15px',
    cursor: 'pointer'
  });
}); // from example http://react-day-picker.js.org/examples/elements-year-navigation

var currentYear = new Date().getFullYear();
var fromMonth = new Date(currentYear, 0);
var toMonth = new Date(currentYear + 10, 11);

function YearMonthForm(_ref4) {
  var date = _ref4.date,
      localeUtils = _ref4.localeUtils,
      onChange = _ref4.onChange;
  var months = localeUtils.getMonths();
  var years = [];

  for (var i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  var handleChange = function handleChange(e) {
    var _e$target$form = e.target.form,
        year = _e$target$form.year,
        month = _e$target$form.month;
    onChange(new Date(year.value, month.value));
  };

  return (0, _core.jsx)("div", {
    className: "DayPicker-Caption"
  }, (0, _core.jsx)("select", {
    name: "month",
    onChange: handleChange,
    value: date.getMonth()
  }, months.map(function (month, i) {
    return (0, _core.jsx)("option", {
      key: month,
      value: i
    }, month);
  })), (0, _core.jsx)("select", {
    name: "year",
    onChange: handleChange,
    value: date.getFullYear()
  }, years.map(function (year) {
    return (0, _core.jsx)("option", {
      key: year,
      value: year
    }, year);
  })));
}

function parseDate(str, format, locale) {
  var parsed = (0, _parse["default"])(str, format, {
    locale: locale
  });

  if (_reactDayPicker.DateUtils.isDate(parsed)) {
    return parsed;
  }

  return undefined;
}

function formatDate(date, format, locale) {
  return (0, _format["default"])(date, format, {
    locale: locale
  });
}

function InputDate(_ref5) {
  var theme = _ref5.theme,
      _ref5$format = _ref5.format,
      format = _ref5$format === void 0 ? 'DD/MM/YYYY' : _ref5$format,
      name = _ref5.name,
      onChange = _ref5.onChange,
      onBlur = _ref5.onBlur,
      error = _ref5.error,
      disabled = _ref5.disabled,
      big = _ref5.big,
      _ref5$placeholder = _ref5.placeholder,
      placeholder = _ref5$placeholder === void 0 ? format : _ref5$placeholder,
      rest = _objectWithoutProperties(_ref5, ["theme", "format", "name", "onChange", "onBlur", "error", "disabled", "big", "placeholder"]);

  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var inputStyle = _defineProperty({
    width: '100%',
    height: '45px',
    border: "1px solid ".concat(error ? theme.colors.error : theme.colors.lightGray),
    borderRadius: '3px',
    padding: '0 15px',
    fontSize: '16px',
    color: disabled ? theme.colors.darkGray : theme.colors.text,
    outline: 'none',
    '::placeholder': {
      color: theme.colors.darkGray
    },
    '&[disabled]': {
      backgroundColor: theme.colors.lighterGray,
      color: theme.colors.gray
    }
  }, theme.media.tablet, {
    height: big ? '60px' : '45px'
  }); // We declare the css here because its not possible to stack withTheme and forwardRef
  // https://emotion.sh/docs/class-names


  var containerStyle = {
    display: 'block',
    '[class="DayPickerInput-Overlay"]': {
      left: 'inherit',
      right: 0
    }
  };
  var pickerRef = (0, _react.useRef)();

  var handleClick = function handleClick() {
    return !disabled && pickerRef.current.display();
  };

  var inputProps = {
    disabled: disabled
  };
  return (0, _core.jsx)(Wrapper, null, (0, _core.jsx)(_core.ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        cx = _ref6.cx;
    var cssInput = css(inputStyle);
    var cssContainer = css(containerStyle);
    return (0, _core.jsx)(_DayPickerWrapper["default"], _extends({
      wrapperClassName: cssContainer
    }, rest, {
      ref: pickerRef,
      format: format,
      formatDate: formatDate,
      parseDate: parseDate,
      placeholder: placeholder,
      inputProps: _objectSpread({
        className: cssInput
      }, inputProps),
      dayPickerProps: {
        selectedDays: day,
        placeholder: "".concat((0, _format["default"])(new Date(), format)),
        fromMonth: fromMonth,
        toMonth: toMonth,
        month: month,
        onDayClick: function onDayClick(v) {
          setDay(v);
          onChange && onChange({
            type: 'date',
            name: name,
            value: v
          });
        },
        captionElement: function captionElement(_ref7) {
          var date = _ref7.date,
              localeUtils = _ref7.localeUtils;
          return (0, _core.jsx)(YearMonthForm, {
            date: date,
            localeUtils: localeUtils,
            onChange: setMonth
          });
        }
      }
    }));
  }), (0, _core.jsx)(StyledIcon, {
    size: 24,
    name: "calendar",
    disabled: disabled,
    onClick: handleClick
  }));
}

var _default = (0, _emotionTheming.withTheme)(InputDate);

exports["default"] = _default;