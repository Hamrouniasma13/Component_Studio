"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledContainer = function StyledContainer(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return (0, _core.jsx)(_Container["default"], _extends({
    css: {
      textAlign: 'center',
      padding: '70px 25px'
    }
  }, rest), children);
};

var Confirmation = function Confirmation(_ref2) {
  var image = _ref2.image,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      leftAction = _ref2.leftAction,
      rightAction = _ref2.rightAction;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var Image = _react["default"].isValidElement(image) ? image : undefined;
  return (0, _core.jsx)(StyledContainer, {
    theme: theme
  }, Image ? Image : (0, _core.jsx)("img", {
    css: _defineProperty({
      marginBottom: 40,
      width: 70,
      height: 70
    }, theme.media.tablet, {
      width: 120,
      height: 120
    }),
    src: image.url,
    alt: image.alt
  }), title && (0, _core.jsx)(_Text["default"].h2, {
    css: {
      marginBottom: 20
    }
  }, title), subtitle ? (0, _core.jsx)(_Text["default"].p, {
    css: {
      marginBottom: 50
    }
  }, subtitle) : null, (0, _core.jsx)("div", null, leftAction && (0, _core.jsx)(_Button["default"], {
    css: _defineProperty({
      marginRight: 20,
      marginBottom: 20
    }, theme.media.tablet, {
      marginBottom: 0
    }),
    href: leftAction.url && leftAction.url,
    onClick: leftAction.onClick
  }, leftAction.label), rightAction && (0, _core.jsx)(_Button["default"], {
    ghost: true,
    href: rightAction.url && rightAction.url,
    onClick: rightAction.onClick
  }, rightAction.label)));
};

Confirmation.propTypes = {
  image: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })]),
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  leftAction: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  }),
  rightAction: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })
};
Confirmation.defaultProps = {
  image: {
    url: '',
    alt: ''
  },
  title: '',
  subtitle: '',
  leftAction: null,
  rightAction: null
};
var _default = Confirmation;
exports["default"] = _default;