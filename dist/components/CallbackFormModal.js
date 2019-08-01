"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _forms = _interopRequireDefault(require("./forms"));

var _Button = _interopRequireDefault(require("./Button"));

var _Text = _interopRequireDefault(require("./Text"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function CallbackFormModal(_ref) {
  var wording = _ref.wording,
      periodOptions = _ref.periodOptions,
      onBackButton = _ref.onBackButton,
      onSubmitButton = _ref.onSubmitButton;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var formSchema = {
    type: 'object',
    required: ['period', 'phone_number'],
    properties: {
      phone_number: {
        title: wording.phone_number_label,
        type: 'string'
      },
      period: {
        title: wording.period_label,
        "enum": periodOptions
      }
    }
  };
  var uiSchema = {
    phone_number: {
      placeholder: wording.phone_number_placeholder
    },
    period: {
      widget: 'select',
      placeholder: wording.topic_placeholder
    }
  };
  var styles = {
    wrapper: {
      width: '100%',
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 80,
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    },
    title: {
      color: theme.colors.white
    },
    formWrapper: {
      padding: 40
    },
    buttonWrapper: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.headerWrapper
  }, (0, _core.jsx)(_Icon["default"], {
    name: "call",
    color: "white",
    size: "30px",
    css: {
      marginRight: 20
    }
  }), (0, _core.jsx)(_Text["default"], {
    tag: "h3",
    css: styles.title
  }, wording.title)), (0, _core.jsx)("div", {
    css: styles.formWrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "div",
    mb: 25
  }, wording.description), (0, _core.jsx)(_forms["default"], {
    formSchema: formSchema,
    uiSchema: uiSchema,
    onSubmit: function onSubmit(values) {
      return onSubmitButton(values);
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
  })));
}

var _default = CallbackFormModal;
exports["default"] = _default;
CallbackFormModal.defaultProps = {
  wording: {
    title: '',
    description: '',
    phone_number_label: '',
    phone_number_placeholder: '',
    period_label: '',
    back_button_label: '',
    confirm_button_label: ''
  },
  periodOptions: [],
  onSubmitButton: function onSubmitButton() {},
  onBackButton: function onBackButton() {}
};
CallbackFormModal.propTypes = {
  wording: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    description: _propTypes["default"].node,
    description_bold: _propTypes["default"].string,
    phone_number_label: _propTypes["default"].string,
    phone_number_placeholder: _propTypes["default"].string,
    period_label: _propTypes["default"].string,
    back_button_label: _propTypes["default"].string,
    confirm_button_label: _propTypes["default"].string
  }),
  periodOptions: _propTypes["default"].array,
  onSubmitButton: _propTypes["default"].func,
  onBackButton: _propTypes["default"].func
};