"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapPin = _interopRequireDefault(require("./MapPin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GoogleMaps = function GoogleMaps(_ref) {
  var apiKey = _ref.apiKey,
      positionOnMap = _ref.positionOnMap,
      userLocationPin = _ref.userLocationPin,
      zoomOnMap = _ref.zoomOnMap,
      places = _ref.places,
      selectedPlaceID = _ref.selectedPlaceID,
      onBoundsChange = _ref.onBoundsChange,
      onSelectItem = _ref.onSelectItem;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      google = _useState2[0],
      setGoogle = _useState2[1];

  var _useState3 = (0, _react.useState)({
    zoomOnMap: zoomOnMap,
    positionOnMap: positionOnMap
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      defaultValues = _useState4[0];

  var wrapper = {
    width: '100%',
    height: '100%'
  };

  var apiIsLoaded = function apiIsLoaded(map, maps) {
    setGoogle({
      map: map,
      maps: maps
    });
  }; // componentDidUpdate


  (0, _react.useEffect)(function () {
    if (google.map && google.maps && userLocationPin && userLocationPin.length === 2) {
      google.map.setCenter(new google.maps.LatLng(userLocationPin[0], userLocationPin[1]));
      google.map.setZoom(15);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userLocationPin]);
  return (0, _core.jsx)("div", {
    css: wrapper
  }, (0, _core.jsx)(_googleMapReact["default"], {
    bootstrapURLKeys: {
      key: apiKey,
      libraries: ['places']
    },
    defaultCenter: defaultValues.positionOnMap,
    defaultZoom: defaultValues.zoomOnMap,
    onChange: onBoundsChange,
    yesIWantToUseGoogleMapApiInternals: true,
    onGoogleApiLoaded: function onGoogleApiLoaded(_ref2) {
      var map = _ref2.map,
          maps = _ref2.maps;
      return apiIsLoaded(map, maps);
    }
  }, places.map(function (item) {
    return (0, _core.jsx)(_MapPin["default"], {
      key: item.id,
      id: item.id,
      lat: item.lat,
      lng: item.lng,
      type: "PIN",
      isSelected: item.id === selectedPlaceID,
      selectedPlaceID: selectedPlaceID,
      item: item,
      onSelectItem: onSelectItem
    });
  }), userLocationPin && userLocationPin.length === 2 && (0, _core.jsx)(_MapPin["default"], {
    key: "CURRENT_POSITION",
    lat: userLocationPin[0],
    lng: userLocationPin[1],
    type: "CURRENT_POSITION"
  })));
};

GoogleMaps.defaultProps = {
  apiKey: '',
  defaultZoom: 10,
  selectedPlaceID: null,
  onBoundsChange: function onBoundsChange() {},
  onSelectItem: function onSelectItem() {},
  userLocationPin: null,
  places: []
};
GoogleMaps.propTypes = {
  apiKey: _propTypes["default"].string,
  userLocationPin: _propTypes["default"].arrayOf(_propTypes["default"].number),
  zoomOnMap: _propTypes["default"].number,
  selectedPlaceID: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onSelectItem: _propTypes["default"].func,
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
var _default = GoogleMaps;
exports["default"] = _default;