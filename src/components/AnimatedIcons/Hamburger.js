import React, { useContext } from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

function Line({ open }) {
  const { eases, colors } = useContext(ThemeContext)

  const styles = {
    display: 'block',
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: colors.primary,
    borderRadius: '2px',
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: `0.3s ${eases.easeOutCirc}`,
    willChange: 'transform',

    '&:nth-of-type(1)': {
      top: 6,
      ...(open
        ? {
            transform: 'rotate(-135deg)',
            width: 10
          }
        : {})
    },

    '&:nth-of-type(2)': {
      top: 12,
      ...(open
        ? {
            left: 0,
            transform: 'rotate(135deg)'
          }
        : {})
    },

    '&:nth-of-type(3)': {
      top: 18,
      ...(open
        ? {
            transform: 'rotate(-135deg)',
            left: 12,
            width: 10
          }
        : {})
    }
  }
  return <span css={styles} />
}
function Hamburger({ css, isOpen, onClick, size = 24 }) {
  return (
    <div
      css={{
        ...css,
        width: size,
        height: size,
        position: 'relative',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <Line open={isOpen} />
      <Line open={isOpen} />
      <Line open={isOpen} />
    </div>
  )
}

Hamburger.propTypes = {
  /**
   * Boolean that display the burger open or closed
   * The burger display a close icon when it's open
   */
  open: PropTypes.bool,

  /**
   * onClick listener
   */
  onClick: PropTypes.func
}

Hamburger.defaultProps = {
  open: false,
  onClick: () => {}
}

export default Hamburger
