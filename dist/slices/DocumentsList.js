"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DocumentsList;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Pill = _interopRequireDefault(require("../components/Pill"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DocumentActions(_ref) {
  var _wrapper, _status;

  var status = _ref.status,
      actions = _ref.actions,
      availability = _ref.availability;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      textAlign: 'right'
    }, _defineProperty(_wrapper, theme.media.tablet, {
      marginTop: 20,
      minWidth: '100%'
    }), _defineProperty(_wrapper, theme.media.desktop, {
      marginLeft: 0,
      minWidth: 'initial',
      marginTop: 0
    }), _wrapper),
    status: (_status = {
      textTransform: 'uppercase',
      position: 'absolute',
      top: 25,
      left: 25,
      margin: '0'
    }, _defineProperty(_status, theme.media.tablet, {
      marginLeft: 30,
      left: 'initial',
      top: 30,
      right: 20
    }), _defineProperty(_status, theme.media.desktop, {
      position: 'relative',
      top: 0,
      right: 0,
      marginRight: 30
    }), _status),
    action: {
      width: 'initial',
      marginLeft: 15
    },
    availability: {
      lineHeight: '40px'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, status && status.label ? (0, _core.jsx)(_Pill["default"], {
    css: styles.status,
    color: status.color
  }, status.label) : null, actions && actions.length > 0 ? actions.map(function (action, key) {
    return (0, _core.jsx)(_Button["default"], _extends({
      css: styles.action,
      key: key
    }, action, {
      ghost: true,
      size: "big"
    }));
  }) : (0, _core.jsx)(_Text["default"], {
    size: "typo6",
    css: styles.availability
  }, availability));
}

function Document(_ref2) {
  var _left;

  var title = _ref2.title,
      description = _ref2.description,
      status = _ref2.status,
      actionButtons = _ref2.actionButtons,
      availability = _ref2.availability;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var hasStatus = status && status.label;
  var hasLinks = actionButtons && actionButtons.length > 0;
  var styles = {
    wrapper: _defineProperty({
      padding: 20,
      background: 'white',
      margin: 0,
      minHeight: 82,
      position: 'relative',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.colors.smallLightGray
      }
    }, theme.media.laptop, {
      height: 85
    }),
    left: (_left = {
      marginTop: hasStatus ? 45 : 0,
      marginBottom: hasLinks ? 30 : 0
    }, _defineProperty(_left, theme.media.tablet, {
      minWidth: '50%',
      minHeight: 40,
      marginTop: 0,
      marginBottom: 0
    }), _defineProperty(_left, theme.media.desktop, {
      minHeight: 'initial',
      "float": 'left'
    }), _left),
    icon: _defineProperty({
      marginRight: 20,
      display: 'block',
      position: 'absolute',
      top: hasStatus ? 70 : 25,
      left: 25
    }, theme.media.tablet, {
      top: 25
    }),
    content: {
      marginLeft: 60
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
    css: styles.left
  }, (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: "file",
    size: 32
  }), (0, _core.jsx)("div", {
    css: styles.content
  }, (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.title
  }, title), description ? (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.description,
    size: "typo6"
  }, description) : null)), (0, _core.jsx)(DocumentActions, {
    status: status,
    actions: actionButtons,
    availability: availability
  }));
}

function Section(_ref3) {
  var _wrapper3;

  var title = _ref3.title,
      documents = _ref3.documents,
      sentenceOnEmpty = _ref3.sentenceOnEmpty;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper3 = {
      marginBottom: 30
    }, _defineProperty(_wrapper3, theme.media.laptop, {
      width: '78%'
    }), _defineProperty(_wrapper3, theme.media.desktop, {
      width: '82%',
      '&:last-child': {
        marginBottom: 0
      }
    }), _wrapper3),
    title: {
      marginTop: 40
    },
    documents: {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },
    emptySentence: {
      borderTop: '1px solid #eee',
      paddingTop: 20
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, title && (0, _core.jsx)(_Text["default"].h2, {
    mb: 20,
    css: styles.title
  }, title), documents && documents.length > 0 ? (0, _core.jsx)("ul", {
    css: styles.documents
  }, documents.map(function (document, key) {
    return (0, _core.jsx)(Document, _extends({}, document, {
      key: key
    }));
  })) : (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.emptySentence,
    mb: 20,
    size: "typo6"
  }, sentenceOnEmpty));
}

function DocumentsList(_ref4) {
  var title = _ref4.title,
      _ref4$sections = _ref4.sections,
      sections = _ref4$sections === void 0 ? [] : _ref4$sections,
      sentenceOnEmpty = _ref4.sentenceOnEmpty;
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, sections && sections.length > 0 ? (0, _core.jsx)("div", null, sections.map(function (section, key) {
    return (0, _core.jsx)(Section, _extends({
      key: key
    }, section, {
      sentenceOnEmpty: sentenceOnEmpty
    }));
  })) : null);
}