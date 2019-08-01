/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Container from '../../../../components/Container'
import Icon from '../../../../components/Icon'

import NavItem from './NavItem'
import DropdownSelector from './DropdownSelector'

import get from 'lodash/get'

const TopMenu = ({ menus }) => {
  const styles = {
    wrapper: {
      backgroundColor: '#2a2a2a',
    },
    nav: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  }

  return (
    <div css={styles.wrapper}>
      <Container>
        <nav css={styles.nav}>
          {menus &&
            menus.length > 0 &&
            menus.map((m, i) =>
              m && get(m, 'available.length', 0) > 1 ? (
                <DropdownSelector key={i} {...m} />
              ) : (
                <NavItem key={i} href={m.url}>
                  {m && m.icon ? (
                    <Icon css={{ marginRight: 10 }} size={16} name={m.icon} />
                  ) : null}
                  {m.label}
                </NavItem>
              )
            )}
        </nav>
      </Container>
    </div>
  )
}

TopMenu.propTypes = {
  menus: PropTypes.array,
}

export default TopMenu
