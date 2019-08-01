"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ColoredHeaderContainer = _interopRequireDefault(require("../ColoredHeaderContainer"));

var _forms = _interopRequireDefault(require("../forms"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function AddContributorForm(_ref) {
  var wording = _ref.wording,
      onBackButton = _ref.onBackButton,
      onSubmitButton = _ref.onSubmitButton;
  var formSchema = {
    type: 'object',
    required: ['firstName', 'surname', 'emailAddress', 'role'],
    properties: {
      firstName: {
        title: wording.firstname_label,
        type: 'string'
      },
      surname: {
        title: wording.surname_label,
        type: 'string'
      },
      emailAddress: {
        title: wording.email_label,
        type: 'string'
      },
      role: {
        title: wording.role_label,
        "enum": ['Admin', 'Viewer', 'Super admin']
      }
    }
  };
  var uiSchema = {
    firstName: {
      placeholder: wording.firstname_placeholder
    },
    surname: {
      placeholder: wording.surname_placeholder
    },
    emailAddress: {
      placeholder: wording.email_placeholder
    },
    role: {
      placeholder: wording.role_placeholder,
      widget: 'select',
      "enum": [{
        label: 'Admin',
        value: '1'
      }, {
        label: 'Viewer',
        value: '2'
      }, {
        label: 'Super user',
        value: '3'
      }]
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
    icon: wording.icon,
    title: wording.title
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
    }
  }));
}

var _default = AddContributorForm;
exports["default"] = _default;
AddContributorForm.propTypes = {
  wording: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    back_button_label: _propTypes["default"].string,
    confirm_button_label: _propTypes["default"].string
  }),
  periodOptions: _propTypes["default"].array,
  onSubmitButton: _propTypes["default"].func,
  onBackButton: _propTypes["default"].func
};