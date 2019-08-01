"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactUse = require("react-use");

var _media = require("../../theme/media");

var _Icon = _interopRequireDefault(require("../../components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled["default"])('div')(function (_ref) {
  var inline = _ref.inline;
  return {
    display: 'flex',
    flexDirection: inline ? 'column' : 'row',
    marginBottom: 20
  };
});
var CellFix = (0, _styled["default"])('div')(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({
    width: '100%',
    minWidth: '240px'
  }, theme.media.tablet, {
    maxWidth: '330px'
  });
});
var LabelCell = (0, _styled["default"])('div')(function (_ref4) {
  var inline = _ref4.inline;
  return _objectSpread({
    width: 200,
    paddingRight: 40
  }, inline ? {
    textAlign: 'left',
    paddingBottom: 10
  } : {
    textAlign: 'right',
    paddingTop: 10
  });
});
var Label = (0, _styled["default"])('label')({
  width: 150
});
var ErrorCell = (0, _styled["default"])('div')(function (_ref5) {
  var theme = _ref5.theme,
      inline = _ref5.inline;
  return _objectSpread({
    paddingTop: inline ? 10 : 'inherit',
    color: theme.colors.error,
    display: 'flex',
    flexDirection: 'row'
  }, !inline && {
    paddingTop: 8
  });
});
var StyledIcon = (0, _styled["default"])(_Icon["default"])(function (_ref6) {
  var theme = _ref6.theme,
      inline = _ref6.inline;
  return {
    label: 'icon',
    display: 'block',
    margin: inline ? '0 10px 0 0' : '0 10px 0 20px',
    '> use': {
      fill: theme.colors.error // todo: remove t his line once <Icon /> can set stroke and fill color under <g/> and <use />

    }
  };
});

var ErrorMessage = function ErrorMessage(_ref7) {
  var message = _ref7.message,
      inline = _ref7.inline;
  return _react["default"].createElement(ErrorCell, {
    inline: inline
  }, _react["default"].createElement(StyledIcon, {
    inline: inline,
    color: "error",
    name: "info",
    size: "20"
  }), _react["default"].createElement("span", null, message));
};

var Field = function Field(props) {
  var inline = props.inline,
      property = props.property,
      name = props.name,
      required = props.required,
      error = props.error,
      children = props.children,
      onChange = props.onChange,
      onBlur = props.onBlur,
      value = props.value,
      childrenProps = props.childrenProps;

  var newProps = _objectSpread({
    name: name,
    error: !!error,
    value: value,
    onChange: onChange,
    onBlur: onBlur
  }, childrenProps ? childrenProps : {});

  var isMobile = (0, _reactUse.useMedia)("(max-width: ".concat(_media.breakpoints.tablet, "px)"));
  return _react["default"].createElement(Wrapper, {
    inline: inline || isMobile
  }, _react["default"].createElement(LabelCell, {
    inline: inline || isMobile,
    vertical_align: childrenProps.vertical_align
  }, _react["default"].createElement(Label, {
    htmlFor: name
  }, property.title, required ? '*' : '')), _react["default"].createElement(CellFix, null, _react["default"].Children.map(children, function (child) {
    return child && _react["default"].cloneElement(child, newProps);
  })), error ? _react["default"].createElement(ErrorMessage, {
    inline: inline || isMobile,
    message: error
  }) : null);
};

var _default = Field;
exports["default"] = _default;