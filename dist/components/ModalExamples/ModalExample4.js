"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Modal = _interopRequireDefault(require("./../Modal"));

var _Button = _interopRequireDefault(require("./../Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var CustomModal = (0, _styled["default"])(_Modal["default"])({
  background: 'pink',
  position: 'relative',
  top: 'inherit!important',
  left: 'inherit!important',
  transform: 'none!important',
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '15px',
  margin: '0 0 0 50px',
  maxWidth: '100px'
});

var ModalExample4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalExample4, _React$Component);

  function ModalExample4(props) {
    var _this;

    _classCallCheck(this, ModalExample4);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalExample4).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalExample4, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState(function (prev) {
        return {
          isOpen: !prev.isOpen
        };
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isOpen = this.state.isOpen;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button["default"], {
        onClick: this.toggleModal
      }, "Click me"), _react["default"].createElement(CustomModal, {
        isOpen: isOpen,
        noOverlay: true
      }, _react["default"].createElement("span", {
        onClick: this.closeModal
      }, children)));
    }
  }]);

  return ModalExample4;
}(_react["default"].Component);

ModalExample4.propTypes = {
  /**
   * is the Modal open
   */
  isOpen: _propTypes["default"].bool,

  /**
   * remove the Modal's overlay
   */
  noOverlay: _propTypes["default"].bool,

  /**
   * Method fired on click on the overlay (same as close Modal normally)
   */
  onOverlayClick: _propTypes["default"].func,

  /**
   * the Modal's children
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),

  /**
   * Modal className for overwrite style
   */
  className: _propTypes["default"].string
};
ModalExample4.defaultProps = {
  noOverlay: false,
  isOpen: false
};
var _default = ModalExample4;
exports["default"] = _default;