import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import get from 'lodash/get'

import Link from '../../../components/Link'

const Stroke = ({ hasStroke, strokeLeft = 0, strokeWidth = 0 }) => {
  const { colors, eases } = useContext(ThemeContext)
  return (
    <div
      css={{
        position: 'absolute',
        backgroundColor: colors.secondary,
        height: hasStroke ? '4px' : '0px',
        left: `${strokeLeft}px`,
        width: `${strokeWidth}px`,
        bottom: 0,
        transition: `left 0.2s ${eases.easeOutQuart}, width 0.1s, height 0.1s`,
      }}
    />
  )
}

function Menu({ links }) {
  const [hasStroke, setHasStroke] = useState(false)
  const [strokeWidth, setStrokeWidth] = useState(0)
  const [strokeLeft, setStrokeLeft] = useState(0)

  const onMouseLeave = () => setHasStroke(false)

  const onMouseEnter = e => {
    const offsetLeft = get(e, 'currentTarget.offsetLeft')
    const offsetWidth = get(e, 'currentTarget.offsetWidth')
    setHasStroke(true)
    setStrokeLeft(offsetLeft)
    setStrokeWidth(offsetWidth)
  }

  return (
    <nav css={{ position: 'relative' }}>
      <MenuLinks
        links={links}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Stroke
        hasStroke={hasStroke}
        strokeLeft={strokeLeft}
        strokeWidth={strokeWidth}
      />
    </nav>
  )
}

const MenuLinks = ({ links, onMouseEnter, onMouseLeave }) => {
  const { colors } = useContext(ThemeContext)
  const styles = {
    ul: { height: '80px' },
    li: {
      float: 'left',
      display: 'table',
      height: '100%',
      marginLeft: '20px',
      marginRight: '20px',
      marginBottom: '0px',
      '&:first-of-type': {
        marginLeft: 0,
      },
      '&:last-of-type': {
        marginRight: 0,
      },
    },
    link: {
      display: 'table-cell',
      verticalAlign: 'middle',
      fontWeight: 600,
      letterSpacing: '0.2px',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textTransform: 'uppercase',
      fontSize: 14,
      color: colors.text,
      textDecoration: 'none',
    },
  }
  return (
    <ul css={styles.ul} onMouseLeave={onMouseLeave}>
      {links.map((link, i) => (
        <li css={styles.li} key={i} onMouseEnter={onMouseEnter}>
          <Link css={styles.link} href={link.url}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Menu
