import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '@emotion/core'
import { upperFirst, omit } from 'lodash'
import * as icons from '../icons/'

/**
 * Theses props may be passed by parents for styling reason, but we don't want them to be put in the HTML
 * because they throw a warning message.
 */
const PROPS_BLACKLIST = ['left', 'right', 'inline', 'big']

/**
 * List of available icons, based on our icons folder
 */
const AVAILABLES = Object.keys(icons).map(icon =>
  icon.replace('Eb', '').toLowerCase()
)

export default function Icon({ name, color, size = 40, ...props }) {
  const theme = React.useContext(ThemeContext)
  const Icon = icons[upperFirst(name)]
  if (!Icon) return null
  return (
    <Icon
      fill={color ? theme.colors[color] : 'currentColor'}
      width={size}
      height={size}
      {...omit(props, PROPS_BLACKLIST)}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(AVAILABLES).isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Icon.icons = AVAILABLES
