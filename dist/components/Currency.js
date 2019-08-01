"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Currency;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Cast any as number, return defaultValue if it can't
 * @param {*} any
 * @param {*} defaultValue
 */
function toNumber(any) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  if (typeof any === 'string') return toNumber(Number(any), defaultValue);
  if (any === Number(any)) return any;
  return defaultValue;
}

function Currency(_ref) {
  var value = _ref.value,
      currency = _ref.currency,
      locale = _ref.locale;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2
  }).format(toNumber(value));
}

Currency.propTypes = {
  value: _propTypes["default"].number.isRequired,
  locale: _propTypes["default"].string.isRequired,

  /**
   * ISO 4217 devise (https://www.currency-iso.org/en/home/tables/table-a1.html)
   */
  currency: function currency(props, propName, componentName) {
    if (!/^[A-Z]{3}$/.test(props[propName])) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Validation failed."));
    }
  }
};
Currency.defaultProps = {
  value: 0,
  currency: 'USD',
  locale: 'en-US'
};