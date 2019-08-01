"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _reactUse = require("react-use");

var _MapFilters = _interopRequireDefault(require("./MapFilters"));

var _GoogleMaps = _interopRequireDefault(require("./GoogleMaps"));

var _MapCard = _interopRequireDefault(require("./MapCard"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _media = require("../../theme/media");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddressListOnMap = function AddressListOnMap(_ref) {
  var publicApiKey = _ref.publicApiKey,
      positionOnMap = _ref.positionOnMap,
      zoomOnMap = _ref.zoomOnMap,
      userLocationPin = _ref.userLocationPin,
      userAddress = _ref.userAddress,
      selectedOption = _ref.selectedOption,
      selectOptionsList = _ref.selectOptionsList,
      onMapBoundsChange = _ref.onMapBoundsChange,
      onLocationChange = _ref.onLocationChange,
      onSelectOptionChange = _ref.onSelectOptionChange,
      wording = _ref.wording,
      places = _ref.places,
      wrapperCss = _ref.wrapperCss;
  var theme = (0, _react.useContext)(_core.ThemeContext);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPlaceID = _useState2[0],
      setSelectedPlaceID = _useState2[1];

  var isMobile = (0, _reactUse.useMedia)("(max-width: ".concat(_media.breakpoints.mobile, "px)"));
  var styles = {
    wrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 'auto'
    }, theme.media.mobile, {
      height: '700px'
    }),
    sideListWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '15px'
    }, theme.media.mobile, {
      width: '40%',
      maxWidth: '600px'
    }),
    filtersWrapper: {
      width: '100%',
      marginBottom: '20px'
    },
    mapCardsWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      overflowY: 'hidden'
    }, theme.media.mobile, {
      overflowY: 'scroll'
    }),
    noResultIconWrapper: {
      width: '100%',
      margin: '15px 0 15px 0'
    },
    googleMapWrapper: _defineProperty({
      display: 'none'
    }, theme.media.mobile, {
      display: 'flex',
      flex: '1',
      height: '100%'
    })
  };
  return (0, _core.jsx)("div", {
    css: (0, _merge["default"])(styles.wrapper, wrapperCss)
  }, (0, _core.jsx)("div", {
    css: styles.sideListWrapper
  }, (0, _core.jsx)("div", {
    css: styles.filtersWrapper
  }, (0, _core.jsx)(_MapFilters["default"], {
    apiKey: publicApiKey,
    wording: wording,
    addressValue: userAddress,
    selectedOption: selectedOption,
    selectOptions: selectOptionsList,
    onLocationChange: onLocationChange,
    onSelectChange: onSelectOptionChange,
    doNotLoadGoogleMapsApi: true
  })), (0, _core.jsx)("div", {
    css: styles.mapCardsWrapper
  }, places.length === 0 || isMobile && (!userLocationPin || !selectedOption) ? (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("div", {
    css: styles.noResultIconWrapper
  }, (0, _core.jsx)(_Icon["default"], {
    name: "doctors",
    size: "90%"
  })), (0, _core.jsx)(_Text["default"], {
    tag: "h3",
    css: {
      color: theme.colors.darkGrey,
      textAlign: 'center'
    }
  }, wording.no_result_msg)) : null, places.map(function (item) {
    return (0, _core.jsx)(_MapCard["default"], {
      key: "".concat(item.title).concat(item.id),
      id: item.id,
      title: item.title,
      subTitle: item.subTitle,
      description: item.description,
      phoneNumber: item.phoneNumber,
      isSelected: item.id === selectedPlaceID,
      onClick: setSelectedPlaceID
    });
  }))), (0, _core.jsx)("div", {
    css: styles.googleMapWrapper
  }, (0, _core.jsx)(_GoogleMaps["default"], {
    apiKey: publicApiKey,
    zoomOnMap: zoomOnMap,
    positionOnMap: positionOnMap,
    userLocationPin: userLocationPin,
    onBoundsChange: onMapBoundsChange,
    onSelectItem: setSelectedPlaceID,
    selectedPlaceID: selectedPlaceID,
    places: places
  })));
};

AddressListOnMap.defaultProps = {
  publicApiKey: '',
  userLocationPin: null,
  onMapBoundsChange: function onMapBoundsChange() {},
  onLocationChange: function onLocationChange() {},
  places: [],
  wrapperCss: {}
};
AddressListOnMap.propTypes = {
  publicApiKey: _propTypes["default"].string,
  positionOnMap: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  zoomOnMap: _propTypes["default"].number.isRequired,
  userLocationPin: _propTypes["default"].arrayOf(_propTypes["default"].number),
  onMapBoundsChange: _propTypes["default"].func,
  onLocationChange: _propTypes["default"].func,
  selectOptionsList: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
  wrapperCss: _propTypes["default"].shape({}),
  places: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
    lat: _propTypes["default"].number,
    lng: _propTypes["default"].number,
    title: _propTypes["default"].string,
    subTitle: _propTypes["default"].string,
    description: _propTypes["default"].string,
    phoneNumber: _propTypes["default"].string
  }))
};
var _default = AddressListOnMap;
exports["default"] = _default;