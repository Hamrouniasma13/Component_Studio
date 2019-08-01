"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListFilters;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function ListFilters(_ref) {
  var label = _ref.label,
      children = _ref.children;
  var styles = {
    wrapper: {
      marginTop: 20,
      marginBottom: 20
    },
    innerWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      "float": 'left',
      marginRight: 30
    },
    filters: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      overflow: 'visible'
    },
    filter: {
      "float": 'left',
      marginRight: 10
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, label && (0, _core.jsx)("span", {
    css: styles.label
  }, label), (0, _core.jsx)("ul", {
    css: styles.filters
  }, _react["default"].Children.map(children, function (child, key) {
    return (0, _core.jsx)("li", {
      key: key,
      css: styles.filter
    }, child);
  })))));
}

ListFilters.propTypes = {
  label: _propTypes["default"].string
};