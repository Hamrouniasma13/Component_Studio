"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _reactProgressiveImage = _interopRequireDefault(require("react-progressive-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledInnerImage = (0, _styled["default"])('img')(function (_ref) {
  var loading = _ref.loading;
  return {
    maxWidth: '100%',
    minHeight: '200px',
    marginBottom: '30px',
    willChange: 'opacity',
    transition: 'opacity 0.5s',
    opacity: loading ? 0 : 1
  };
});

var StyledProgressiveImage = function StyledProgressiveImage(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt;
  return _react["default"].createElement(_reactProgressiveImage["default"], {
    src: src
  }, function (_src, loading) {
    return _react["default"].createElement(StyledInnerImage, {
      loading: loading,
      src: _src,
      alt: alt
    });
  });
};

var components = {
  Heading2: function Heading2(props) {
    return _react["default"].createElement(_Text["default"].h2, _extends({
      mb: 30
    }, props));
  },
  Heading3: function Heading3(props) {
    return _react["default"].createElement(_Text["default"].h3, _extends({
      mb: 30
    }, props));
  },
  Heading4: function Heading4(props) {
    return _react["default"].createElement(_Text["default"].h4, _extends({
      mb: 30
    }, props));
  },
  Heading5: function Heading5(props) {
    return _react["default"].createElement(_Text["default"].h5, _extends({
      mb: 30
    }, props));
  },
  Heading6: function Heading6(props) {
    return _react["default"].createElement(_Text["default"].h6, _extends({
      mb: 30
    }, props));
  },
  Paragraph: function Paragraph(props) {
    return _react["default"].createElement(_Text["default"].p, _extends({
      mb: 30
    }, props));
  },
  Image: StyledProgressiveImage,
  Strong: (0, _styled["default"])('span')({
    fontWeight: 'bold'
  }),
  Em: (0, _styled["default"])('span')({
    fontStyle: 'italic'
  }),
  ListItem: (0, _styled["default"])('li')({
    '&:not(:last-child)': {
      marginBottom: '5px'
    }
  }),
  List: (0, _styled["default"])('ul')({
    marginBottom: '30px',
    paddingLeft: '30px',
    listStyleType: 'circle'
  }),
  OList: (0, _styled["default"])('ol')({
    marginBottom: '30px',
    paddingLeft: '30px',
    listStyleType: 'decimal'
  }),
  Hyperlink: (0, _styled["default"])(_Link["default"])({
    color: 'blue',
    '&:hover': {
      textDecoration: 'underline'
    }
  })
};
var _default = components;
exports["default"] = _default;