import PropTypes from 'prop-types'

/**
 * Cast any as number, return defaultValue if it can't
 * @param {*} any
 * @param {*} defaultValue
 */
function toNumber(any, defaultValue = '-') {
  if (typeof any === 'string') return toNumber(Number(any), defaultValue)
  if (any === Number(any)) return any
  return defaultValue
}

export default function Currency({ value, currency, locale }) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2
  }).format(toNumber(value))
}

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,

  /**
   * ISO 4217 devise (https://www.currency-iso.org/en/home/tables/table-a1.html)
   */
  currency: function(props, propName, componentName) {
    if (!/^[A-Z]{3}$/.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
      )
    }
  }
}

Currency.defaultProps = {
  value: 0,
  currency: 'USD',
  locale: 'en-US'
}
