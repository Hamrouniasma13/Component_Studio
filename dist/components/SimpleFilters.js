"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SimpleFilters;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkboxes = _interopRequireDefault(require("../components/forms/Checkboxes"));

var _Radios = _interopRequireDefault(require("../components/forms/Radios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FilterGroup(_ref) {
  var all = _ref.all,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      name = _ref.name,
      label = _ref.label,
      options = _ref.options,
      onFilter = _ref.onFilter;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    label: _defineProperty({
      margin: '0 10px 15px 0',
      display: 'block'
    }, theme.media.tablet, {
      display: 'inline'
    }) // Catch 'all' value, when the user want to remove his filters.

  };

  function onChange(_ref2) {
    var value = _ref2.value;
    var toPass = value === 'all' ? '' : {
      value: value
    };
    onFilter(toPass);
  } // Add 'all' filter, adding a possibility to reset all the filters


  var resetOption = {
    value: '',
    label: 'Tous'
  };

  var _options = all ? [resetOption].concat(_toConsumableArray(options)) : options;

  return (0, _core.jsx)("nav", {
    css: {
      marginBottom: 10
    }
  }, (0, _core.jsx)("span", {
    css: styles.label,
    "data-cy": "typeContract"
  }, label), (0, _core.jsx)("span", null, multiple ? (0, _core.jsx)(_Checkboxes["default"], {
    name: name,
    onChange: onChange,
    options: _options
  }) : (0, _core.jsx)(_Radios["default"], {
    name: name,
    onChange: onChange,
    options: _options
  })));
}

function SimpleFilters(_ref3) {
  var all = _ref3.all,
      filters = _ref3.filters,
      onFilter = _ref3.onFilter;
  if (!filters || filters.length < 1) return null;
  return (0, _core.jsx)("div", {
    css: {
      margin: '30px 0 10px'
    }
  }, filters.map(function (item, i) {
    return (0, _core.jsx)(FilterGroup, {
      all: all,
      key: i + item.id,
      multiple: item.multiple,
      name: item.id,
      label: item.label,
      options: item.filters,
      onFilter: onFilter
    });
  }));
}

SimpleFilters.propTypes = {
  filters: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string
  })),
  onFilter: _propTypes["default"].func
};
SimpleFilters.defaultProps = {
  filters: [],
  onFilter: function onFilter() {}
};