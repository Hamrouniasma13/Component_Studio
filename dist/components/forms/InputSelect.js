"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _emotionTheming = require("emotion-theming");

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customStyles = function customStyles(theme, error) {
  return {
    control: function control(provided) {
      return _objectSpread({}, provided, {
        height: '45px',
        borderColor: error ? theme.colors.error : theme.colors.lightGray,
        borderRadius: '3px',
        boxShadow: 'none',
        ':hover': {
          borderColor: error ? theme.colors.error : theme.colors.lightGray
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread({}, provided, {
        borderRadius: '3px'
      });
    },
    valueContainer: function valueContainer(provided) {
      return _objectSpread({}, provided, {
        padding: '0 15px',
        fontSize: '16px'
      });
    },
    input: function input(provided, state) {
      return _objectSpread({}, provided, {
        margin: '0',
        color: state.isDisabled ? theme.colors.gray : theme.colors.text
      });
    },
    placeholder: function placeholder(provided, state) {
      return _objectSpread({}, provided, {
        margin: '0',
        color: state.isDisabled ? theme.colors.gray : theme.colors.text
      });
    },
    option: function option(provided, state) {
      return _objectSpread({}, provided, {
        textAlign: 'left',
        fontSize: '16px',
        backgroundColor: state.isSelected ? theme.colors.primary : state.isFocused ? theme.colors.lightGray : 'none',
        color: state.isSelected ? theme.colors.white : theme.colors.text
      });
    }
  };
};

var InputWrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    display: 'inline-block',
    width: '100%',
    minWidth: '240px'
  }, theme.media.tablet, {
    maxWidth: '330px'
  });
});
var Label = (0, _styled["default"])('label')(function (_ref3) {
  var error = _ref3.error,
      colors = _ref3.theme.colors;
  return {
    display: 'block',
    margin: '0 0 15px 1px',
    fontSize: '15px',
    color: error ? colors.error : colors.text
  };
}); // we prevent sending the value from the rest obj to prevent conflit between studio & react-select

/* eslint-disable-next-line */

function InputSelect(_ref4) {
  var error = _ref4.error,
      id = _ref4.id,
      label = _ref4.label,
      theme = _ref4.theme,
      options = _ref4.options,
      value = _ref4.value,
      rest = _objectWithoutProperties(_ref4, ["error", "id", "label", "theme", "options", "value"]);

  return _react["default"].createElement(InputWrapper, null, label && _react["default"].createElement(Label, {
    error: error,
    htmlFor: id
  }, label), _react["default"].createElement(_reactSelect["default"], _extends({
    styles: customStyles(theme, error),
    options: options
  }, rest)));
}

InputSelect.propTypes = {
  /**
   * input value
   */
  label: _propTypes["default"].string,

  /**
   * input ID
   */
  id: _propTypes["default"].string,

  /**
   * error
   */
  error: _propTypes["default"].bool,

  /**
   * onChange function
   */
  onChange: _propTypes["default"].func,

  /**
   * placeholder
   */
  placeholder: _propTypes["default"].string,

  /**
   * label
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].object),

  /**
   * disabled input
   */
  isDisabled: _propTypes["default"].bool
};
InputSelect.defaultProps = {};

var _default = (0, _emotionTheming.withTheme)(InputSelect);

exports["default"] = _default;