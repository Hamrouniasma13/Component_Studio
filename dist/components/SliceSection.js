"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled2 = _interopRequireDefault(require("@emotion/styled"));

var _media = _interopRequireDefault(require("../theme/media"));

var _SimpleButton = _interopRequireDefault(require("./SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled2["default"])('div')(_defineProperty({
  border: '1px solid #cccccc',
  borderRadius: 1,
  boxShadow: '#efefef 0px 1px 8px 0px',
  padding: 10,
  backgroundColor: '#fff',
  marginBottom: 20
}, _media["default"].tablet, {
  marginBottom: 40
}));
var Title = (0, _styled2["default"])('div')(function (_ref) {
  var colors = _ref.theme.colors;
  return _defineProperty({
    color: colors.primary,
    padding: '6px 10px 15px',
    borderBottom: '1px solid #e5e5e5',
    fontSize: '24px',
    fontWeight: 'bold'
  }, _media["default"].tablet, {
    fontWeight: 'normal'
  });
});
var ActionWrapper = (0, _styled2["default"])('div')({
  display: 'flex',
  justifyContent: 'space-around'
});

function SliceSection(_ref3) {
  var title = _ref3.title,
      actions = _ref3.actions,
      children = _ref3.children;
  return _react["default"].createElement(Wrapper, null, title ? _react["default"].createElement(Title, null, title) : null, _react["default"].createElement("div", null, children), actions.length > 0 ? _react["default"].createElement(ActionWrapper, null, actions.map(function (_ref4, i) {
    var url = _ref4.url,
        label = _ref4.label;
    return _react["default"].createElement(_SimpleButton["default"], {
      key: i,
      href: url
    }, label);
  })) : null);
}

SliceSection.propTypes = {
  /**
   * Title of the section (optionnal)
   */
  title: _propTypes["default"].string,

  /**
   * Whatever you want
   */
  children: _propTypes["default"].element,

  /**
   * Action are display at the bottom of the component, evenly dispersed
   */
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }))
};
SliceSection.defaultProps = {
  actions: []
};
var _default = SliceSection;
exports["default"] = _default;