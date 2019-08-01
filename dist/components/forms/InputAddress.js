"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _scriptjs = _interopRequireDefault(require("scriptjs"));

var _InputText = _interopRequireDefault(require("./InputText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=';
var MIN_STR_LENGTH_TO_AUTOCOMPLETE = 2;
var ENTER_KEY = 13;
var DOWN_KEY = 40;
var UP_KEY = 38;

var loadGoogleMapsApi = function loadGoogleMapsApi(API_KEY) {
  return new Promise(function (res, rej) {
    if (typeof window.google === 'undefined') {
      var url = "".concat(GOOGLE_MAPS_API_URL).concat(API_KEY);
      return (0, _scriptjs["default"])(url, function () {
        if (typeof window.google === 'undefined') {
          return rej('Failed loading google maps api');
        } else {
          return res({
            autoComplete: new window.google.maps.places.AutocompleteService(),
            geocoder: new window.google.maps.Geocoder()
          });
        }
      });
    } else {
      return res({
        autoComplete: new window.google.maps.places.AutocompleteService(),
        geocoder: new window.google.maps.Geocoder()
      });
    }
  });
};

var InputAddress = function InputAddress(_ref) {
  var autocompleteAPIKey = _ref.autocompleteAPIKey,
      label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChangeLocation = _ref.onChangeLocation,
      doNotLoadGoogleMapsApi = _ref.doNotLoadGoogleMapsApi;

  var _React$useState = _react["default"].useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showOptions = _React$useState4[0],
      setShowOptions = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      place_id = _React$useState8[0],
      setPlaceID = _React$useState8[1];

  var _React$useState9 = _react["default"].useState(-1),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      cursorIndexOnAutocompleteList = _React$useState10[0],
      setCursorIndex = _React$useState10[1];

  var _React$useState11 = _react["default"].useState({}),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      googleMapsApi = _React$useState12[0],
      setGoogleMapsApi = _React$useState12[1];

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors;

  var styles = {
    wrapper: {
      position: 'relative',
      width: '100%'
    },
    optionsWrapper: {
      position: 'absolute',
      width: '100%',
      minWidth: '240px',
      border: "1px solid ".concat(colors.lightGray),
      borderRadius: '3px',
      backgroundColor: colors.white,
      marginTop: '5px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      zIndex: 1
    },
    option: {
      width: '100%',
      height: '45px',
      padding: '2px 15px',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.lightGray
      }
    },
    selectedOption: {
      backgroundColor: colors.primary,
      color: colors.white
    },
    cursorHoverOption: {
      backgroundColor: colors.lightGray
    }
  };
  (0, _react.useEffect)(function () {
    // To prevent loading the googleMaps twice api on render
    // useful when GoogleMapReact is next to this component
    if (!doNotLoadGoogleMapsApi) {
      loadGoogleMapsApi(autocompleteAPIKey).then(function (googleApi) {
        return setGoogleMapsApi(googleApi);
      })["catch"](console.log);
    }
  }, [autocompleteAPIKey, doNotLoadGoogleMapsApi]);
  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);

  var getAutocompleteSuggestions = function getAutocompleteSuggestions(input) {
    return new Promise(function (res) {
      if (googleMapsApi.autoComplete) {
        return googleMapsApi.autoComplete.getPlacePredictions({
          input: input
        }, function (suggestions) {
          return res(suggestions);
        });
      }

      return res(null);
    });
  };

  var getPlaceDetailsFromAutocompleteResult = function getPlaceDetailsFromAutocompleteResult(placeId) {
    return new Promise(function (res) {
      return googleMapsApi.geocoder.geocode({
        placeId: placeId
      }, function (placeDetails) {
        return res(placeDetails[0]);
      });
    });
  };

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.value;
    setCursorIndex(-1);
    setValue(value);
    setPlaceID(null);

    if (value.length >= MIN_STR_LENGTH_TO_AUTOCOMPLETE) {
      getAutocompleteSuggestions(value).then(function (suggestions) {
        return setOptions(suggestions);
      });
    }
  };

  var onSelectAddress = function onSelectAddress(id) {
    return function () {
      setPlaceID(id);
      getPlaceDetailsFromAutocompleteResult(id).then(function (result) {
        setValue(result.formatted_address);
        onChangeLocation({
          location: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          },
          address: result.formatted_address
        });
      });
    };
  };

  var handleBlur = function handleBlur() {
    return setTimeout(function () {
      setShowOptions(false);
    }, 300);
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (options && options.length > 0) {
      if (event.keyCode === ENTER_KEY && cursorIndexOnAutocompleteList !== -1) {
        var selectedOption = options[cursorIndexOnAutocompleteList];
        onSelectAddress(selectedOption.place_id)();
      } else if (event.keyCode === DOWN_KEY && cursorIndexOnAutocompleteList !== options.length - 1) {
        event.preventDefault();
        setCursorIndex(cursorIndexOnAutocompleteList + 1);
      } else if (event.keyCode === UP_KEY && cursorIndexOnAutocompleteList > -1) {
        event.preventDefault();
        setCursorIndex(cursorIndexOnAutocompleteList - 1);
      }
    }
  };

  var handleFocus = function handleFocus() {
    // We load the GoogleMapsApi here because if we
    // load it right after render, it can load
    // the googleMapsApi twice (conflict with GoogleMapsReact)
    if (!googleMapsApi.autoComplete || !googleMapsApi.geocoder) {
      loadGoogleMapsApi(autocompleteAPIKey).then(function (googleApi) {
        return setGoogleMapsApi(googleApi);
      })["catch"](console.log);
    }

    setShowOptions(true);
  };

  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_InputText["default"], {
    label: label,
    value: inputValue,
    placeholder: placeholder,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: handleKeyPress,
    iconName: "position",
    iconPosition: "left",
    css: {
      maxWidth: 'none'
    }
  }), options && options.length > 0 && !place_id && inputValue.length >= MIN_STR_LENGTH_TO_AUTOCOMPLETE && showOptions && (0, _core.jsx)("div", {
    css: styles.optionsWrapper
  }, options.map(function (item, index) {
    return (0, _core.jsx)("div", {
      key: item.place_id,
      css: _objectSpread({}, styles.option, {}, place_id === item.place_id && styles.selectedOption, {}, cursorIndexOnAutocompleteList === index && styles.cursorHoverOption),
      onClick: onSelectAddress(item.place_id)
    }, (0, _core.jsx)("span", {
      alt: item.description
    }, item.description));
  })));
};

InputAddress.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  doNotLoadGoogleMapsApi: false
};
InputAddress.propTypes = {
  autocompleteAPIKey: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].string,
  doNotLoadGoogleMapsApi: _propTypes["default"].bool
};
var _default = InputAddress;
exports["default"] = _default;