"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Input = _interopRequireDefault(require("./forms/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputWrapper = (0, _styled["default"])('div')({
  display: 'inline-block',
  width: '100%',
  minWidth: '240px',
  maxWidth: '300px'
});
var Label = (0, _styled["default"])('label')(function (_ref) {
  var error = _ref.error,
      colors = _ref.theme.colors;
  return {
    display: 'block',
    margin: '0 0 15px 1px',
    fontSize: '15px',
    color: error ? colors.error : colors.text
  };
});

var InputText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputText, _React$Component);

  function InputText(props) {
    var _this;

    _classCallCheck(this, InputText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputText).call(this, props));
    _this.state = {
      value: props.value || ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value === this.props.value) return false;
      this.setState({
        value: this.props.value
      }, function () {
        _this2.props.onChange && _this2.props.onChange(_this2.state.value);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this3 = this;

      this.setState({
        value: event.target.value
      }, function () {
        _this3.props.onChange && _this3.props.onChange(_this3.state.value);
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      var _this4 = this;

      this.setState({
        value: event.target.value
      }, function () {
        _this4.props.onFocus && _this4.props.onFocus(_this4.state.value);
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      var _this5 = this;

      this.setState({
        value: event.target.value
      }, function () {
        _this5.props.onBlur && _this5.props.onBlur(_this5.state.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          placeholder = _this$props.placeholder,
          id = _this$props.id,
          label = _this$props.label,
          disabled = _this$props.disabled,
          big = _this$props.big,
          step = _this$props.step,
          type = _this$props.type,
          className = _this$props.className;
      var value = this.state.value;
      return _react["default"].createElement(InputWrapper, {
        className: className
      }, label && _react["default"].createElement(Label, {
        htmlFor: id,
        error: error
      }, label), _react["default"].createElement(_Input["default"], {
        big: big,
        error: error,
        id: id,
        disabled: disabled,
        type: type,
        step: step,
        placeholder: placeholder,
        value: value,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }));
    }
  }]);

  return InputText;
}(_react["default"].Component);

InputText.propTypes = {
  /**
   * input value
   */
  value: _propTypes["default"].string,

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
  label: _propTypes["default"].string,

  /**
   * disabled input
   */
  disabled: _propTypes["default"].bool,

  /**
   * className
   */
  className: _propTypes["default"].string,

  /**
   * big
   */
  big: _propTypes["default"].bool
};
InputText.defaultProps = {
  big: false,
  type: 'text'
};
var _default = InputText;
exports["default"] = _default;