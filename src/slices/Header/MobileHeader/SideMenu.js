/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'

import posed from 'react-pose'
import get from 'lodash/get'

import { textColor } from '../../../theme/utils'
import Text from '../../../components/Text'
import Link from '../../../components/Link'
import Icon from '../../../components/Icon'

import MenuItem, { MenuDropdownItem } from './MenuItem'

const Sidebar = posed.div({
  open: {
    opacity: 1,
    delayChildren: 50,
    staggerChildren: 50,
  },
  closed: { opacity: 0 },
})

const BigItem = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 },
})

function SideMenu({ isOpen, menu, selectedEntity, profil, entities }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      background: theme.colors.darkerGray,
      color: 'white',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 50,
      zIndex: 21,
      overflow: 'scroll',
      transform: isOpen ? 'translateX(0)' : 'translateX(110%)', // 110% to account for usecases where the menu is embeded in a frame. ex: MirrorView
      transition: 'transform 0.3s ease',
    },
    menuList: {
      padding: '20px 0',
      margin: 0,
      listStyle: 'none',
    },
  }

  return (
    <Sidebar css={styles.wrapper} pose={isOpen ? 'open' : 'closed'}>
      <UserInfos
        profil={profil}
        selectedEntity={selectedEntity}
        entities={entities}
      />
      <nav>
        <div css={styles.menuList}>
          {menu &&
            menu.map((m, i) =>
              get(m, 'available.length') ? (
                <MenuDropdownItem key={i} {...m} />
              ) : (
                <MenuItem key={i} {...m} />
              )
            )}
        </div>
      </nav>
    </Sidebar>
  )
}

const UserInfos = ({ profil, selectedEntity }) => {
  const theme = React.useContext(ThemeContext)

  return (
    <BigItem
      css={{
        backgroundColor: theme.colors.darkerGray,
        color: theme.colors.lightGray,
        display: 'flex',
        padding: 20,
      }}
    >
      <Link to={profil.url}>
        <Text
          size="typo3"
          css={{
            backgroundColor:
              generateColorFromName(profil.label) || theme.colors.primary,
            borderRadius: '50%',
            width: 50,
            height: 50,
            marginRight: 20,
            lineHeight: '50px',
            textAlign: 'center',
            display: 'block',
            zIndex: 20,
            color: textColor(theme.colors.primary, theme),
          }}
        >
          {getFirstLetters(profil.label)}
        </Text>
      </Link>
      <div>
        <Link css={{ textDecoration: 'none' }} href={profil.url}>
          <Text>{profil.label}</Text>
        </Link>
        <Text.p size="smallText">{selectedEntity}</Text.p>

        <Link
          css={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          href={profil.url}
        >
          <Icon css={{ marginRight: 10 }} size="18" name="cog"></Icon>
          <Text size="smallText">Mon profil</Text>
        </Link>
      </div>
    </BigItem>
  )
}

// TODO: Generate color from chars. See with louis which color we can use
function generateColorFromName(name) {
  return ''
}
function getFirstLetters(name = '') {
  if (typeof name !== 'string') return 'ANONYME'
  return name
    .split(' ')
    .map(n => n[0])
    .splice(0, 2)
    .join('')
}

export default SideMenu
