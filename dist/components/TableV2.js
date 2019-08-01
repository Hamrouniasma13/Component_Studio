"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Table;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function RowItem(_ref) {
  var content = _ref.content,
      subContent = _ref.subContent;
  var styles = {
    wrapper: {
      flex: 1,
      textAlign: 'center',
      '&:first-of-type': {
        textAlign: 'left'
      }
    },
    content: {
      fontSize: 16,
      fontWeight: 600
    },
    subContent: {
      fontSize: 14,
      color: '#7F7F7F'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.content
  }, content), (0, _core.jsx)("div", {
    css: styles.subContent
  }, subContent));
}

RowItem.propTypes = {
  content: _propTypes["default"].any,
  subContent: _propTypes["default"].string
};

function Row(_ref2) {
  var items = _ref2.items;
  var styles = {
    rowWrapper: {
      borderBottom: '1px solid #e5e5e5'
    },
    row: {
      height: 90,
      display: 'flex',
      alignItems: 'center'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.rowWrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.row
  }, items.map(function (item, key) {
    return (0, _core.jsx)(RowItem, _extends({}, item, {
      key: key
    }));
  }))));
}

Row.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(RowItem.propTypes))
};

function HeadCell(_ref3) {
  var content = _ref3.content,
      subContent = _ref3.subContent;
  var styles = {
    wrapper: {
      flex: 1,
      textAlign: 'center',
      '&:first-of-type': {
        textAlign: 'left'
      }
    },
    content: {
      fontSize: 16,
      fontWeight: 600
    },
    subContent: {
      fontSize: 14,
      color: '#7F7F7F'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.content
  }, content), (0, _core.jsx)("div", {
    css: styles.subContent
  }, subContent));
}

HeadCell.propTypes = {
  content: _propTypes["default"].string,
  subContent: _propTypes["default"].string
};

function Table(_ref4) {
  var head = _ref4.head,
      rows = _ref4.rows;
  if (!head || rows && rows[0] && head.length !== rows[0].length) return null;
  var styles = {
    headRowWrapper: {
      backgroundColor: '#ebebeb'
    },
    headRow: {
      display: 'flex',
      alignItems: 'center',
      height: 70
    }
  };
  return (0, _core.jsx)("div", null, (0, _core.jsx)("div", {
    css: styles.headRowWrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.headRow
  }, head.map(function (headCell, key) {
    return (0, _core.jsx)(HeadCell, _extends({}, headCell, {
      key: key
    }));
  })))), Array.isArray(rows) && rows.map(function (row, key) {
    return (0, _core.jsx)(Row, {
      items: row,
      key: key
    });
  }));
}

Table.propTypes = {
  head: _propTypes["default"].arrayOf(_propTypes["default"].shape(HeadCell.propTypes)).isRequired,
  rows: _propTypes["default"].arrayOf(Row.propTypes.items)
};