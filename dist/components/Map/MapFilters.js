"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _Text = _interopRequireDefault(require("../Text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputSelect = _interopRequireDefault(require("../forms/InputSelect"));

var _InputAddress = _interopRequireDefault(require("../forms/InputAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var MapFilters = function MapFilters(_ref) {
  var apiKey = _ref.apiKey,
      addressValue = _ref.addressValue,
      selectedOption = _ref.selectedOption,
      wording = _ref.wording,
      selectOptions = _ref.selectOptions,
      onLocationChange = _ref.onLocationChange,
      onSelectChange = _ref.onSelectChange,
      doNotLoadGoogleMapsApi = _ref.doNotLoadGoogleMapsApi;
  var styles = {
    wrapper: {
      width: '100%',
      height: '100%'
    },
    selectWrapper: {
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputWrapper: {
      display: 'flex',
      flex: 1,
      marginLeft: '15px'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "h2",
    mb: 15
  }, wording.filter_title), (0, _core.jsx)(_InputAddress["default"], {
    autocompleteAPIKey: apiKey,
    label: wording.address_label,
    value: addressValue,
    onChangeLocation: onLocationChange,
    doNotLoadGoogleMapsApi: doNotLoadGoogleMapsApi
  }), (0, _core.jsx)("div", {
    css: styles.selectWrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "p"
  }, wording.select_label), (0, _core.jsx)("div", {
    css: styles.inputWrapper
  }, (0, _core.jsx)(_InputSelect["default"], {
    value: selectedOption,
    placeholder: wording.select_placeholder,
    options: selectOptions,
    onChange: onSelectChange
  }))));
};

MapFilters.defaultProps = {
  addressValue: '',
  selectOptions: [],
  selectedOption: null,
  onLocationChange: function onLocationChange() {},
  onSelectChange: function onSelectChange() {},
  wording: {
    filter_title: 'filter_title',
    address_label: 'address_label',
    select_label: 'select_label',
    select_placeholder: 'select_placeholder'
  }
};
MapFilters.propTypes = {
  apiKey: _propTypes["default"].string.isRequired,
  // Input state
  addressValue: _propTypes["default"].string,
  selectedOption: _propTypes["default"].shape({}),
  // Data
  selectOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    label: _propTypes["default"].string
  })),
  wording: _propTypes["default"].shape({}),
  // Methods
  onLocationChange: _propTypes["default"].func,
  onSelectChange: _propTypes["default"].func
};
var _default = MapFilters;
exports["default"] = _default;