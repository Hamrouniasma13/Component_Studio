"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _utils = require("../../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled["default"])('div')(function (_ref) {
  var check = _ref.check,
      color = _ref.color,
      theme = _ref.theme;
  return _objectSpread({
    display: 'inline-block',
    borderRadius: 4,
    border: "1px solid ".concat(theme.colors.lightGray),
    position: 'relative',
    backgroundColor: 'white',
    color: theme.colors.text,
    userSelect: 'none',
    transition: 'background-color 0.2s, color 0.2s',
    borderStyle: 'solid',
    marginRight: '10px'
  }, check ? {
    backgroundColor: color ? theme.colors[color] || color : theme.colors.primary,
    color: 'white',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: (0, _utils.darken)(color ? theme.colors[color] || color : theme.colors.primary, 15)
    }
  } : {
    borderColor: theme.colors.lightGray,
    '&:hover': {
      backgroundColor: (0, _utils.darken)('white', 5),
      color: theme.colors.text
    }
  });
});
var Input = (0, _styled["default"])('input')({
  visibility: 'hidden',
  display: 'none',
  zIndex: -1,
  opacity: 0
});
var Label = (0, _styled["default"])('label')(function (_ref2) {
  var big = _ref2.big;
  return {
    display: 'block',
    paddingTop: big ? 15 : 8,
    paddingBottom: big ? 15 : 8,
    paddingRight: big ? 20 : 15,
    paddingLeft: big ? 20 : 15,
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '1.1px',
    fontSize: '15px',
    cursor: 'pointer'
  };
});

function Checkbox(_ref3) {
  var id = _ref3.id,
      color = _ref3.color,
      checked = _ref3.checked,
      _onChange = _ref3.onChange,
      name = _ref3.name,
      label = _ref3.label,
      big = _ref3.big;

  var _useState = (0, _react.useState)(checked),
      _useState2 = _slicedToArray(_useState, 2),
      check = _useState2[0],
      setCheck = _useState2[1];

  (0, _react.useEffect)(function () {
    return setCheck(checked);
  }, [checked]);
  return _react["default"].createElement(Wrapper, {
    check: check,
    color: color
  }, _react["default"].createElement(Label, {
    htmlFor: id + name,
    big: big
  }, label), _react["default"].createElement(Input, {
    id: id + name,
    name: name,
    defaultChecked: check,
    type: "checkbox",
    onChange: function onChange() {
      setCheck(!check);

      _onChange({
        name: name,
        checked: !check
      });
    }
  }));
}

Checkbox.propTypes = {
  /**
   * Change the display of the button, actif or  not
   */
  checked: _propTypes["default"].bool,

  /**
   * Function called when the button is clicked
   */
  onChange: _propTypes["default"].func,

  /**
   * Input name
   */
  name: _propTypes["default"].string.isRequired
};
Checkbox.defaultProps = {
  id: '',
  checked: false,
  onChange: function onChange() {}
};
var _default = Checkbox;
exports["default"] = _default;