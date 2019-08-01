"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _DataTable = _interopRequireDefault(require("../../components/DataTable"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _styled["default"])('div')({
  marginRight: 40,
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
  padding: 50,
  border: '1px solid #f3f3f3'
});
var Title = (0, _styled["default"])('div')({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.56,
  marginBottom: 30,
  color: '#333'
});
var Row = (0, _styled["default"])('div')({
  display: 'flex',
  alignItems: 'center'
});
var Left = (0, _styled["default"])('div')({
  marginRight: 60,
  flex: '1 1 30%'
});
var Label = (0, _styled["default"])('span')({
  display: 'block',
  fontSize: 16,
  lineHeight: 1.56,
  color: '#333'
});
var Value = (0, _styled["default"])('span')({
  display: 'block',
  fontSize: 36,
  fontWeight: 600,
  letterSpacing: '1.2px',
  whiteSpace: 'nowrap'
});
var Right = (0, _styled["default"])('div')({
  flex: '1 1 70%'
});
var LinkWrapper = (0, _styled["default"])('div')({
  marginTop: 40,
  textAlign: 'right'
});
var StyledLink = (0, _styled["default"])(_Link["default"])(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.colors.primary,
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 600
  };
});

function Pension(_ref2) {
  var title = _ref2.title,
      label = _ref2.label,
      value = _ref2.value,
      details = _ref2.details,
      link = _ref2.link;
  return _react["default"].createElement(Wrapper, null, title ? _react["default"].createElement(Title, null, title) : null, _react["default"].createElement(Row, null, value ? _react["default"].createElement(Left, null, _react["default"].createElement(Label, null, label), _react["default"].createElement(Value, null, value)) : null, details.length > 0 ? _react["default"].createElement(Right, null, _react["default"].createElement(_DataTable["default"], {
    rows: details
  })) : null), link ? _react["default"].createElement(LinkWrapper, null, _react["default"].createElement(StyledLink, {
    href: link.url
  }, link.label)) : null);
}

Pension.propTypes = {
  /**
   * Title
   */
  title: _propTypes["default"].string,

  /**
   * Label above the value
   */
  label: _propTypes["default"].string,

  /**
   * Main value, display on the left
   */
  value: _propTypes["default"].any,

  /**
   * Array of props to fill the table
   */
  details: _DataTable["default"].propTypes.rows,

  /**
   * props for the links
   */
  link: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })
};
Pension.defaultProps = {
  details: []
};
var _default = Pension;
exports["default"] = _default;