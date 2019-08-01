import { useContext } from 'react'
/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

import { lighten } from '../../../../theme/utils'
import Link from '../../../../components/Link'

function NavItem({ children, ...rest }) {
  const { colors } = useContext(ThemeContext)

  return (
    <Link
      css={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      <div
        css={{
          height: 40,
          lineHeight: '40px',
          color: '#d8d8d8',
          alignItems: 'center',
          position: 'relative',
          paddingLeft: 20,
          paddingRight: 20,
          transition: 'background-color 0.2s',
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: lighten(colors.darkerGray, 40),
            color: colors.lighterGray,
          },
        }}
      >
        {children}
      </div>
    </Link>
  )
}

export default NavItem
