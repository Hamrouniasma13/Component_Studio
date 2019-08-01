/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'
import { textColor, darken } from '../theme/utils'

/**
 * Calculate padding from size
 * @param {string} size
 */
const getPadding = size => (size === 'big' ? 15 : size === 'small' ? 7 : 10)

function StyledButton({
  button,
  color = 'primary',
  padding,
  ghost,
  css,
  ...props
}) {
  const theme = React.useContext(ThemeContext)
  const mainColor = theme.colors[color]
  const Tag = button ? 'button' : Link

  return (
    <Tag
      {...props}
      css={{
        // Block
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle',
        maxWidth: '700px',
        overflow: 'hidden',
        backgroundColor: ghost ? 'white' : mainColor,
        boxSizing: 'border-box',

        // Border
        padding,
        borderRadius: '4px',
        borderColor: ghost ? '#f3f3f3' : 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',

        // Text
        textAlign: 'center',
        fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
        fontWeight: '600',
        fontSize: '14px',
        letterSpacing: '1.1px',
        lineHeight: 1,
        color: ghost ? 'black' : textColor(darken(mainColor, 50), theme),

        // Reset
        outline: 'none',
        textDecoration: 'none',
        zIndex: 0,

        // Optimisation
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',

        // Other
        cursor: 'pointer',

        // Animation
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
        '&:hover': {
          backgroundColor: ghost ? darken('white', 5) : darken(mainColor, 10),
          color: ghost ? '#555555' : textColor(darken(mainColor, 50), theme),
        },

        // Responsive
        [theme.media.tablet]: {
          width: 'auto',
        },

        ...css,
      }}
    />
  )
}

function StyledIcon({ name, left, right }) {
  return (
    <Icon
      name={name}
      size={20}
      css={{
        verticalAlign: 'bottom',
        marginLeft: right ? 15 : 0,
        marginRight: left ? 15 : 0,
      }}
    />
  )
}

function Label({ children }) {
  return <span css={{ lineHeight: '20px' }}>{children}</span>
}

export default function Button({
  label,
  children,
  icon,
  iconPosition,
  size,
  ...props
}) {
  // deprecate label prop
  const iconOnly = !(children || label)

  // Get content order from icon, children, iconPosition
  const content = [
    icon && iconPosition === 'left' ? (
      <StyledIcon name={icon} left={!iconOnly} key="left-icon" />
    ) : null,
    !iconOnly ? <Label key="label">{children || label}</Label> : null,
    icon && iconPosition !== 'left' ? (
      <StyledIcon name={icon} right={!iconOnly} key="right-icon" />
    ) : null,
  ]

  // Calculate padding from size
  const padding = !iconOnly ? `${getPadding(size)}px 20px` : getPadding(size)

  return (
    <StyledButton button={!props.href} padding={padding} {...props}>
      {content}
    </StyledButton>
  )
}

Button.defaultProps = {
  iconPosition: 'right',
  size: 'normal',
}
Button.propTypes = {
  /** salut descrip */
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['right', 'left']),
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
}
