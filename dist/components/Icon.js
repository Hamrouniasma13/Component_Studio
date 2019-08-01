"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _lodash = require("lodash");

var icons = _interopRequireWildcard(require("../icons/"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Theses props may be passed by parents for styling reason, but we don't want them to be put in the HTML
 * because they throw a warning message.
 */
var PROPS_BLACKLIST = ['left', 'right', 'inline', 'big'];
/**
 * List of available icons, based on our icons folder
 */

var AVAILABLES = Object.keys(icons).map(function (icon) {
  return icon.replace('Eb', '').toLowerCase();
});

function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      props = _objectWithoutProperties(_ref, ["name", "color", "size"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var Icon = icons[(0, _lodash.upperFirst)(name)];
  if (!Icon) return null;
  return _react["default"].createElement(Icon, _extends({
    fill: color ? theme.colors[color] : 'currentColor',
    width: size,
    height: size
  }, (0, _lodash.omit)(props, PROPS_BLACKLIST)));
}

Icon.propTypes = {
  name: _propTypes["default"].oneOf(AVAILABLES).isRequired,
  color: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Icon.icons = AVAILABLES;