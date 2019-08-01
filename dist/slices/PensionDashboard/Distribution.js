"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _styled["default"])('div')({
  flex: '1 1 25%',
  backgroundColor: '#fff',
  padding: 40,
  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
  border: '1px solid #f3f3f3'
});
var Title = (0, _styled["default"])('div')({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.56,
  marginBottom: 48
});
var Items = (0, _styled["default"])('ul')({
  marginBottom: 0,
  listStyleType: 'none',
  paddingLeft: 0
});
var Item = (0, _styled["default"])('li')({
  '&:not(:last-child)': {
    marginBottom: 20
  }
});
var Label = (0, _styled["default"])('span')({
  display: 'block',
  fontSize: 16,
  lineHeight: 1.56,
  marginBottom: 10
});
var Value = (0, _styled["default"])('span')(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return {
    color: theme.colors[color] || '#333',
    display: 'block',
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: '1.2px'
  };
});

function Distribution(_ref2) {
  var title = _ref2.title,
      items = _ref2.items;
  return _react["default"].createElement(Wrapper, null, title ? _react["default"].createElement(Title, null, title) : null, items.length > 0 ? _react["default"].createElement(Items, null, items.map(function (_ref3, i) {
    var value = _ref3.value,
        label = _ref3.label,
        color = _ref3.color;
    return _react["default"].createElement(Item, {
      key: i
    }, _react["default"].createElement(Label, null, label), _react["default"].createElement(Value, {
      color: color
    }, value));
  })) : null);
}

Distribution.propTypes = {
  /**
   * Title
   */
  title: _propTypes["default"].string,

  /**
   * Array of props used for each items
   */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    color: _propTypes["default"].string
  }))
};
Distribution.defaultProps = {
  items: []
};
var _default = Distribution;
exports["default"] = _default;