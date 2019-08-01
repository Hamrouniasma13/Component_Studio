"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditPasswordForm = _interopRequireDefault(require("./EditPasswordForm"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EditPasswordModule = function EditPasswordModule(_ref) {
  var wording = _ref.wording,
      href = _ref.href,
      onRequestNewPassword = _ref.onRequestNewPassword;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_.IllustratedCTA, {
    wording: wording.edit_password,
    icon: wording.edit_password.icon,
    href: href,
    onClick: function onClick() {
      return !href && setModalOpen(true);
    }
  }), !href && (0, _core.jsx)(_.Modal, {
    isOpen: isModalOpen,
    noPadding: true,
    overflowVisible: true
  }, (0, _core.jsx)(_EditPasswordForm["default"], {
    onBackButton: function onBackButton(e) {
      e.preventDefault();
      setModalOpen(false);
    },
    onSubmitButton: onRequestNewPassword,
    wording: wording.edit_password_modal
  })));
};

var _default = EditPasswordModule;
exports["default"] = _default;
EditPasswordModule.propTypes = {
  wording: _propTypes["default"].shape({}).isRequired,
  href: _propTypes["default"].string,
  onRequestNewPassword: _propTypes["default"].func
};