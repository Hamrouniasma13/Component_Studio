import React from 'react'
import get from 'lodash/get'
/** @jsx jsx */
import { jsx } from '@emotion/core'

// Header only components
import SideMenu from './SideMenu'
import Logo from '../Logo'

import Hamburger from '../../../components/AnimatedIcons/Hamburger'

const AnimatedBurger = ({ isOpen, onClick }) => (
  <div css={{ marginRight: 10 }}>
    <Hamburger isOpen={isOpen} onClick={onClick} />
  </div>
)

function MobileHeader({
  logo,
  profil = {},
  logout = {},
  menu = [],
  langs = {},
  entities = {},
  metaMenu = [],
}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    /**
     * Jeremy's solution to menu overflow.
     * body is not a solution, break on safari
     * use #root because we pretty sure it exists
     */
    const root = document.querySelector('#root')
    if (root) {
      root.style['overflow-x'] = 'hidden'
      root.style['min-height'] = '100vh'
    }
  }, [])

  const styles = {
    background: {
      position: 'fixed',
      transition: 'opacity 0.2s, visibility 0.3s',
      opacity: open ? 0.2 : 0,
      visibility: open ? 'visible' : 'hidden',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 20,
      backgroundColor: '#000',
    },
    innerHeader: {
      backgroundColor: '#fff',
      zIndex: 12,
      position: 'relative',
      boxShadow: '0 10px 8px -14px rgba(0,0,0,0.3)',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  }

  const filteredMenu = [...menu, ...metaMenu]

  if (Object.keys(entities).length > 0) filteredMenu.push(entities)
  if (Object.keys(langs).length > 0) filteredMenu.push(langs)
  if (Object.keys(logout).length > 0) filteredMenu.push(logout)

  return (
    <header>
      <div css={styles.background} onClick={() => setOpen(!open)} />
      <div css={styles.innerHeader}>
        <div css={styles.wrapper}>
          <Logo {...logo} />
          <AnimatedBurger isOpen={open} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <SideMenu
        profil={profil}
        entities={entities}
        selectedEntity={get(entities, 'current.label')}
        menu={filteredMenu.filter(m => !!m)}
        isOpen={open}
      />
    </header>
  )
}

export default MobileHeader
