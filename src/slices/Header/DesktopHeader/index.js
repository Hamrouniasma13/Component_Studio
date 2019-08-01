/** @jsx jsx */
import { jsx } from '@emotion/core'

// Header only components
import Menu from './Menu'
import TopMenu from './TopMenu'
import Logo from '../Logo'

// Common components
import Container from '../../../components/Container'

function DesktopHeader({
  logo = {},
  links,
  profil = {},
  logout = {},
  menu = [],
  langs = {},
  metaMenu = [],
  entities = {},
  notifications,
}) {
  const styles = {
    wrapper: {
      backgroundColor: '#fff',
      zIndex: 12,
      position: 'relative',
      boxShadow: '0 10px 8px -14px rgba(0,0,0,0.3)',
    },
    innerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    logoWrapper: { display: 'flex' },
  }

  const topMenu = [
    ...metaMenu,
    langs,
    entities,
    ...links,
    profil,
    logout,
  ].filter(m => Object.keys(m).length)

  return (
    <header>
      {topMenu && topMenu.length > 0 ? (
        <TopMenu notifications={notifications} menus={topMenu} />
      ) : null}
      <div css={styles.wrapper}>
        <Container>
          <div css={styles.innerWrapper}>
            {logo ? (
              <div css={styles.logoWrapper}>
                <Logo {...logo} />
              </div>
            ) : null}
            {menu ? <Menu links={menu} /> : null}
          </div>
        </Container>
      </div>
    </header>
  )
}

export default DesktopHeader
