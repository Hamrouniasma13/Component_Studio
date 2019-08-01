"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ModalWrapper = (0, _styled["default"])('div')(function (_ref) {
  var isOpen = _ref.isOpen;
  return {
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? '1' : '0',
    zIndex: 1000,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0, 0.5)',
    transition: isOpen ? 'visibility 0s ease 0s, opacity 0.3s ease 0s' : 'visibility 0s ease 0.3s, opacity 0.3s ease 0s'
  };
});
var ModalInner = (0, _styled["default"])('div')(function (_ref2) {
  var isOpen = _ref2.isOpen,
      noOverlay = _ref2.noOverlay,
      noPadding = _ref2.noPadding,
      overflowVisible = _ref2.overflowVisible,
      _ref2$theme = _ref2.theme,
      colors = _ref2$theme.colors,
      media = _ref2$theme.media;
  return _defineProperty({
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? '1' : '0',
    boxShadow: noOverlay ? '0 5px 40px rgba(0,0,0,.16)' : 'none',
    zIndex: 2000,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    padding: noPadding ? 0 : '40px',
    overflow: overflowVisible ? 'visible' : 'auto',
    background: colors.white,
    transition: isOpen ? 'visibility 0s ease 0s, opacity 0.3s ease 0s' : 'visibility 0s ease 0.3s, opacity 0.3s ease 0s'
  }, media.tablet, {
    width: 'inherit',
    height: 'inherit',
    maxHeight: '600px',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px'
  });
});

var Modal = function Modal(_ref4) {
  var children = _ref4.children,
      isOpen = _ref4.isOpen,
      className = _ref4.className,
      noOverlay = _ref4.noOverlay,
      onOverlayClick = _ref4.onOverlayClick,
      noPadding = _ref4.noPadding,
      overflowVisible = _ref4.overflowVisible;
  var bodyOverflow = isOpen && !noOverlay ? 'hidden' : 'inherit';
  document.querySelector('body').style.overflow = bodyOverflow;
  return _react["default"].createElement(_react["default"].Fragment, null, !noOverlay && _react["default"].createElement(ModalWrapper, {
    onClick: onOverlayClick,
    isOpen: isOpen
  }), _react["default"].createElement(ModalInner, {
    className: className,
    isOpen: isOpen,
    noOverlay: noOverlay,
    noPadding: noPadding,
    overflowVisible: overflowVisible
  }, children));
};

Modal.propTypes = {
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
  children: _propTypes["default"].node,

  /**
   * Modal className for overwrite style
   */
  className: _propTypes["default"].string,

  /**
   * No padding on Modal
   */
  noPadding: _propTypes["default"].bool,

  /**
   * Overflow is visible
   */
  overflowVisible: _propTypes["default"].bool
};
Modal.defaultProps = {
  noOverlay: false,
  isOpen: false,
  noPadding: false,
  overflowVisible: false
};
var _default = Modal;
exports["default"] = _default;