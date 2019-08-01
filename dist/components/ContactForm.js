"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("../slices/Slice"));

var _forms = _interopRequireDefault(require("./forms"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function ContactForm(_ref) {
  var title = _ref.title,
      wording = _ref.wording,
      onSendMessage = _ref.onSendMessage,
      topicOptions = _ref.topicOptions;
  var formSchema = {
    type: 'object',
    required: ['topic_type', 'message'],
    properties: {
      topic_type: {
        title: wording.topic_label,
        "enum": topicOptions
      },
      message: {
        title: wording.message_label,
        type: 'string'
      }
    }
  };
  var uiSchema = {
    topic_type: {
      widget: 'select',
      placeholder: wording.topic_placeholder
    },
    message: {
      widget: 'textarea',
      placeholder: wording.message_placeholder
    }
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)(_forms["default"], {
    formSchema: formSchema,
    uiSchema: uiSchema,
    onSubmit: onSendMessage,
    submitButton: function submitButton() {
      return (0, _core.jsx)("div", {
        css: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }
      }, (0, _core.jsx)(_Button["default"], {
        type: "submit"
      }, wording.button_label));
    }
  }));
}

var _default = ContactForm;
exports["default"] = _default;
ContactForm.defaultProps = {
  wording: {
    topic_label: '',
    message_label: '',
    message_placeholder: '',
    button_label: ''
  },
  onSendMessage: function onSendMessage() {},
  topicOptions: []
};
ContactForm.propTypes = {
  title: _propTypes["default"].string.isRequired,
  wording: _propTypes["default"].shape({
    topic_label: _propTypes["default"].string,
    topic_placeholder: _propTypes["default"].string,
    message_label: _propTypes["default"].string,
    message_placeholder: _propTypes["default"].string,
    button_label: _propTypes["default"].string
  }),
  onSendMessage: _propTypes["default"].func,
  topicOptions: _propTypes["default"].array
};