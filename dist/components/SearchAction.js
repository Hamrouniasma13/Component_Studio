"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _color = _interopRequireDefault(require("color"));

var _useMedia = _interopRequireDefault(require("react-use/lib/useMedia"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Input = _interopRequireDefault(require("../components/forms/Input"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchAction = function SearchAction(_ref) {
  var _input, _button;

  var label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      submitLabel = _ref.submitLabel,
      onSubmit = _ref.onSubmit,
      style = _ref.style,
      className = _ref.className;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors,
      media = _useContext.media,
      breakpoints = _useContext.breakpoints;

  var isTablet = (0, _useMedia["default"])("(max-width : ".concat(breakpoints.tablet, "px)"));
  var styles = {
    wrapper: _defineProperty({
      padding: '15px',
      width: '100%',
      borderRadius: '4px'
    }, media.tablet, {
      padding: '15px 0px',
      maxWidth: '800px'
    }),
    title: {
      marginBottom: '10px',
      color: 'black'
    },
    inputWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'row',
      position: 'relative'
    }, media.tablet, {
      height: '45px',
      flexDirection: 'row'
    }),
    input: (_input = {
      marginBottom: '10px',
      paddingRight: '10px',
      width: '80%',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px'
    }, _defineProperty(_input, media.tablet, {
      paddingRight: '15px',
      paddingLeft: '40px',
      borderRight: '0',
      width: '68%'
    }), _defineProperty(_input, media.desktop, {
      width: '80%'
    }), _input),
    button: (_button = {
      fontWeight: '400',
      flexBasis: 'auto',
      flexGrow: 1,
      minWidth: 45,
      width: '20%',
      height: 45,
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px'
    }, _defineProperty(_button, media.tablet, {
      width: '32%'
    }), _defineProperty(_button, media.desktop, {
      width: '20%'
    }), _button),
    icon: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      color: colors.text
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper,
    style: style,
    className: className
  }, (0, _core.jsx)(_Text["default"].h4, {
    css: styles.title
  }, label), (0, _core.jsx)("div", {
    css: styles.inputWrapper
  }, !isTablet && (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    size: "17",
    name: "search"
  }), (0, _core.jsx)(_Input["default"], {
    css: styles.input,
    value: inputValue,
    placeholder: placeholder,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    onKeyPress: function onKeyPress(event) {
      return event.key === 'Enter' && onSubmit(inputValue);
    },
    iconPosition: isTablet ? null : 'left'
  }), (0, _core.jsx)(_Button["default"], {
    css: styles.button,
    color: "secondary",
    type: "submit",
    onClick: function onClick() {
      return onSubmit(inputValue);
    },
    icon: isTablet ? 'search' : null
  }, isTablet ? '' : submitLabel)));
};

SearchAction.propTypes = {
  /**
   * label
   */
  label: _propTypes["default"].string,

  /**
   * placeholder
   */
  placeholder: _propTypes["default"].string,

  /**
   * value
   */
  value: _propTypes["default"].string,

  /**
   * submit label
   */
  submitLabel: _propTypes["default"].string,

  /**
   * on submit callback
   */
  onSubmit: _propTypes["default"].func
};
SearchAction.defaultProps = {
  label: '',
  placeholder: '',
  submitLabel: '',
  onSubmit: function onSubmit() {}
};
var _default = SearchAction;
exports["default"] = _default;