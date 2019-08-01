"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _forms = _interopRequireDefault(require("../forms"));

var _Button = _interopRequireDefault(require("../Button"));

var _ColoredHeaderContainer = _interopRequireDefault(require("../ColoredHeaderContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function EditPasswordForm(_ref) {
  var wording = _ref.wording,
      onBackButton = _ref.onBackButton,
      onSubmitButton = _ref.onSubmitButton;
  var formSchema = {
    type: 'object',
    required: ['current_password', 'new_password', 'new_password_confirmation'],
    properties: {
      current_password: {
        title: wording.current_password_label,
        type: 'password'
      },
      new_password: {
        title: wording.new_password_label,
        type: 'password'
      },
      new_password_confirmation: {
        title: wording.new_password_confirmation_label,
        type: 'password'
      }
    }
  };
  var uiSchema = {
    current_password: {
      placeholder: wording.current_password_placeholder
    },
    new_password: {
      placeholder: wording.new_password_placeholder
    },
    new_password_confirmation: {
      placeholder: wording.new_password_confirmation_placeholder
    }
  };
  var styles = {
    buttonWrapper: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
  return (0, _core.jsx)(_ColoredHeaderContainer["default"], {
    title: wording.title,
    icon: wording.icon
  }, (0, _core.jsx)(_forms["default"], {
    formSchema: formSchema,
    uiSchema: uiSchema,
    onSubmit: function onSubmit(values, errors) {
      return onSubmitButton(values, errors);
    },
    submitButton: function submitButton() {
      return (0, _core.jsx)("div", {
        css: styles.buttonWrapper
      }, (0, _core.jsx)(_Button["default"], {
        ghost: true,
        onClick: onBackButton
      }, wording.back_button_label), (0, _core.jsx)(_Button["default"], {
        type: "submit",
        color: "secondary"
      }, wording.confirm_button_label));
    },
    inline: true
  }));
}

var _default = EditPasswordForm;
exports["default"] = _default;
EditPasswordForm.propTypes = {
  wording: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    back_button_label: _propTypes["default"].string,
    confirm_button_label: _propTypes["default"].string
  }),
  periodOptions: _propTypes["default"].array,
  onSubmitButton: _propTypes["default"].func,
  onBackButton: _propTypes["default"].func
};