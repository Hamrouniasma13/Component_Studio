"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _MapPinDetails = _interopRequireDefault(require("./MapPinDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var PIN = 'PIN';
var CURRENT_POSITION = 'CURRENT_POSITION';

var MapPin = function MapPin(_ref) {
  var id = _ref.id,
      type = _ref.type,
      isSelected = _ref.isSelected,
      onSelectItem = _ref.onSelectItem,
      selectedPlaceID = _ref.selectedPlaceID,
      item = _ref.item;
  var styles = {
    mapPinWrapper: {
      position: 'relative',
      zIndex: '2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translate(-50%, -100%)'
    },
    mapPinIconSelected: {
      width: '38px',
      height: '49px',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    mapPinIcon: {
      width: '23px',
      height: '28px',
      transform: 'translate(-50%, -100%)',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  };
  var selectItemCallback = (0, _react.useCallback)(function () {
    if (id === selectedPlaceID) {
      onSelectItem(null);
    } else {
      onSelectItem(id);
    }
  }, [id, onSelectItem, selectedPlaceID]);

  switch (type) {
    case PIN:
      if (isSelected) {
        return (0, _core.jsx)("div", {
          css: styles.mapPinWrapper
        }, (0, _core.jsx)(_MapPinDetails["default"], {
          title: item.title,
          subTitle: item.subTitle,
          description: item.description,
          phoneNumber: item.phoneNumber
        }), (0, _core.jsx)(_Icon["default"], {
          name: 'pinselected',
          css: styles.mapPinIconSelected,
          onClick: selectItemCallback
        }));
      }

      return (0, _core.jsx)(_Icon["default"], {
        name: 'pin',
        css: styles.mapPinIcon,
        onClick: selectItemCallback
      });

    case CURRENT_POSITION:
      return (0, _core.jsx)(_Icon["default"], {
        css: styles.mapPinIcon,
        name: 'pinuser'
      });

    default:
      return null;
  }
};

MapPin.defaultProps = {
  id: null,
  type: PIN,
  onSelectItem: function onSelectItem() {},
  isSelected: false,
  selectedPlaceID: null,
  item: {}
};
MapPin.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onSelectItem: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  selectedPlaceID: _propTypes["default"].number,
  type: _propTypes["default"].oneOf([PIN, CURRENT_POSITION]),
  item: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    subTitle: _propTypes["default"].string,
    description: _propTypes["default"].string,
    phoneNumber: _propTypes["default"].string
  })
};
var _default = MapPin;
exports["default"] = _default;