"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableWrapper = (0, _styled["default"])('div')({
  width: '100%',
  overflowX: 'auto'
});
var TableBlock = (0, _styled["default"])('table')(function (_ref) {
  var colors = _ref.theme.colors;
  return {
    width: '100%',
    minWidth: '700px',
    background: colors.white,
    color: colors.text,
    fontWeight: 600
  };
});
var TableRow = (0, _styled["default"])('tr')(function (_ref2) {
  var colors = _ref2.theme.colors,
      onClick = _ref2.onClick;
  return {
    transition: 'background 0.2s',
    ':hover': {
      background: colors.lighterGray,
      cursor: onClick ? 'pointer' : 'default'
    }
  };
});
var TableHead = (0, _styled["default"])('thead')(function (_ref3) {
  var colors = _ref3.theme.colors;
  return {
    borderBottom: "1px solid ".concat(colors.lightGray)
  };
});
var TableHeadCell = (0, _styled["default"])('th')(function (_ref4) {
  var sorting = _ref4.sorting;
  return {
    padding: '20px 15px',
    fontSize: 14,
    textAlign: 'right',
    cursor: sorting && 'pointer',
    ':first-of-type': {
      textAlign: 'left'
    }
  };
});
var TableHeadCellInner = (0, _styled["default"])('span')({
  position: 'relative'
});
var SortIcon = (0, _styled["default"])(_Icon["default"])(function (_ref5) {
  var order = _ref5.order,
      index = _ref5.index,
      colors = _ref5.theme.colors;
  return {
    position: 'absolute',
    top: '2px',
    right: index === 0 ? '-25px' : 'inherit',
    left: index !== 0 ? '-25px' : 'inherit',
    color: colors.text,
    transform: order === 'ASC' ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.3s ease'
  };
});
var TableBody = (0, _styled["default"])('tbody')({});
var TableBodyCell = (0, _styled["default"])('td')(function (_ref6) {
  var colors = _ref6.theme.colors,
      canEdit = _ref6.canEdit;
  return {
    padding: '15px',
    fontSize: '14px',
    textAlign: 'right',
    verticalAlign: 'middle',
    borderBottom: "1px solid ".concat(colors.lightGray),
    lineHeight: '1.3em',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    ':first-of-type': {
      textAlign: canEdit ? 'center' : 'left'
    }
  };
});

function Table(_ref7) {
  var sorting = _ref7.sorting,
      body = _ref7.body,
      head = _ref7.head,
      sortingIndex = _ref7.sortingIndex,
      sortingBy = _ref7.sortingBy,
      sortingHandler = _ref7.sortingHandler,
      canEdit = _ref7.canEdit;

  var _useState = (0, _react.useState)(sortingIndex || 0),
      _useState2 = _slicedToArray(_useState, 2),
      sortIndex = _useState2[0],
      setSortIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(sortingBy || 'ASC'),
      _useState4 = _slicedToArray(_useState3, 2),
      sortBy = _useState4[0],
      setSortBy = _useState4[1];

  function sortData(data) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ASC';

    var sortedData = _toConsumableArray(data);

    sortedData.sort(function (a, b) {
      var leftValue = a.data[index].value || '';
      var rightValue = b.data[index].value || '';

      if (order === 'ASC') {
        if (typeof leftValue === 'string') {
          return leftValue.localeCompare(rightValue);
        }

        return leftValue > rightValue;
      }

      if (typeof leftValue === 'string') {
        return rightValue.localeCompare(leftValue);
      }

      return leftValue < rightValue;
    });
    return sortedData;
  }

  function handleSorting(sortBy, sortIndex) {
    setSortBy(sortBy);
    setSortIndex(sortIndex);
    sortingHandler && sortingHandler({
      sortIndex: sortIndex,
      sortBy: sortBy,
      label: head[sortIndex].label
    });
  }

  var datas = _toConsumableArray(body);

  if (sorting && !sortingHandler) datas = sortData(datas, sortIndex, sortBy);
  return _react["default"].createElement(TableWrapper, null, _react["default"].createElement(TableBlock, null, _react["default"].createElement(TableHead, null, _react["default"].createElement(TableRow, null, canEdit && _react["default"].createElement(TableHeadCell, null), head && head.map(function (data, index) {
    return _react["default"].createElement(TableHeadCell, {
      key: index,
      sorting: data.sorting,
      onClick: function onClick() {
        return data.sorting && handleSorting(sortBy === 'ASC' && index === sortIndex ? 'DESC' : 'ASC', index);
      }
    }, _react["default"].createElement(TableHeadCellInner, null, data.label, data.sorting && sortIndex === index && _react["default"].createElement(SortIcon, {
      index: index,
      order: sortBy,
      size: "15",
      name: "down"
    })));
  }))), _react["default"].createElement(TableBody, null, datas && datas.map(function (row) {
    return _react["default"].createElement(TableRow, {
      key: row.key,
      onClick: row.onClick ? function () {
        return row.onClick(row);
      } : null
    }, canEdit && row.href && _react["default"].createElement(TableBodyCell, {
      key: 'edit',
      canEdit: true
    }, _react["default"].createElement("a", {
      href: row.href
    }, _react["default"].createElement(_Icon["default"], {
      size: 20,
      name: "edit"
    }))), row.data && row.data.map(function (cell, index) {
      return _react["default"].createElement(TableBodyCell, {
        key: index
      }, cell && (cell.displayValue || cell.value) || '-');
    }));
  }))));
}

Table.propTypes = {
  /**
   * Array of objects for the table's header
   */
  head: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    label: _propTypes["default"].string.isRequired,
    sorting: _propTypes["default"].bool
  })).isRequired,

  /**
   * Array of objects {data, key}. data: {value, displayValue} for the table's body rows
   */
  body: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    data: _propTypes["default"].array.isRequired,
    key: _propTypes["default"].string.isRequired
  })).isRequired,

  /**
   * boolean for activate the sorting feature
   */
  sorting: _propTypes["default"].bool
};
Table.defaultProps = {
  head: [],
  body: [],
  sorting: false
};
var _default = Table;
exports["default"] = _default;