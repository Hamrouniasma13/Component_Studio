import { useContext } from 'react'
/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, ThemeContext } from '@emotion/core'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

import { useMedia } from 'react-use'

import Logo from './Logo'

function Header(props) {
  const { breakpoints } = useContext(ThemeContext)
  const isBelowTablet = useMedia(`(max-width : ${breakpoints.tablet}px)`)

  return (
    <div
      css={{
        header: {
          position: 'relative',
        },
      }}
    >
      {!isBelowTablet ? (
        <DesktopHeader {...props} />
      ) : (
        <MobileHeader {...props} />
      )}
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.shape(Logo.propTypes),
  profil: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
  logout: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
  links: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
  ),
  menu: PropTypes.array,
  langs: PropTypes.object,
  entities: PropTypes.object,
}

Header.defaultProps = {
  logo: {},
  profil: {},
  logout: {},
  links: [],
  menu: [],
  langs: {},
  entities: {},
}

export default Header
