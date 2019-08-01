"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FILE_TYPES = ['url', 'csv', 'doc', 'docx', 'pdf', 'pptx', 'txt', 'xlsx', 'zip'];

var DocumentItem = function DocumentItem(_ref) {
  var title = _ref.title,
      description = _ref.description,
      uri = _ref.uri,
      fileType = _ref.fileType;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      position: 'relative',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.colors.smallLightGray
      }
    },
    leftWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 10,
      padding: '0 15px'
    },
    title: {
      '&:last-child': {
        lineHeight: '40px'
      }
    },
    description: {
      marginTop: 5
    }
  };
  return (0, _core.jsx)("li", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.leftWrapper
  }, (0, _core.jsx)(_Icon["default"], {
    name: FILE_TYPES.indexOf(fileType) > -1 ? fileType : 'file',
    size: 32
  })), (0, _core.jsx)("div", {
    css: styles.contentWrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.title
  }, title), description && (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.description,
    size: "typo6"
  }, description)), (0, _core.jsx)("div", {
    css: styles.rightWrapper
  }, (0, _core.jsx)(_Button["default"], {
    href: uri,
    icon: fileType === 'url' ? 'right' : 'download',
    color: "white",
    ghost: true
  })));
};

var _default = DocumentItem;
exports["default"] = _default;
DocumentItem.propTypes = {
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  uri: _propTypes["default"].string.isRequired,
  fileType: _propTypes["default"].oneOf(FILE_TYPES)
};
DocumentItem.defaultProps = {
  description: '',
  fileType: ''
};