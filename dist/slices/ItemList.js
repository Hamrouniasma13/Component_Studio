"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemList;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function Item(_ref) {
  var label = _ref.label,
      url = _ref.url;
  var styles = {
    link: {
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.3)',
      padding: 20,
      '&:hover': {
        transform: 'scale(1.03)'
      }
    },
    label: {
      fontSize: 18,
      letterSpacing: 0.6,
      color: '#333'
    }
  };
  return (0, _core.jsx)(_Link["default"], {
    css: styles.link,
    href: url
  }, (0, _core.jsx)("span", {
    css: styles.label
  }, label), url && (0, _core.jsx)(_Icon["default"], {
    name: "right",
    size: 30
  }));
}

Item.propTypes = {
  label: _propTypes["default"].string.isRequired,
  url: _propTypes["default"].string
};

function ItemList(_ref2) {
  var title = _ref2.title,
      items = _ref2.items;
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, items && items.length > 1 && items.map(function (item, key) {
    return (0, _core.jsx)("div", {
      css: {
        '&:not(:last-of-type)': {
          marginBottom: 15
        }
      },
      key: key
    }, (0, _core.jsx)(Item, item));
  }));
}

ItemList.propTypes = {
  title: _Slice["default"].propTypes.title,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(Item.propTypes))
};