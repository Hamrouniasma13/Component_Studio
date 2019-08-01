import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import useMedia from 'react-use/lib/useMedia'

import typos from '../../typos'

import Icon from '../../components/Icon'
import Link from '../../components/Link'
import Container from '../../components/Container'

const Footer = ({ link, socials, copyright, className }) => {
  const { colors, breakpoints, media } = React.useContext(ThemeContext)

  const isMobile = useMedia(`(max-width: ${breakpoints.tablet}px)`)

  const styles = {
    footer: {
      padding: '22px 0',
      height: 85,
      width: '100%',
      backgroundColor: colors.darkerGray,
      color: colors.lighterGray,
      [media.tablet]: {
        padding: '0',
        height: 40,
      },
    },

    li: { ...typos.link, listStyle: 'none' },
    left: {},
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...(isMobile ? {} : { height: 40 }),
    },
  }

  const childs = isMobile ? (
    <>
      <div>
        {link && <FooterLeftLink isMobile={isMobile} link={link} />}
        {copyright && <li css={styles.li}>{copyright}</li>}
      </div>
      {socials && socials.length > 0 && <FooterSocials socials={socials} />}
    </>
  ) : (
    <>
      {link && <FooterLeftLink link={link} />}
      {copyright && (
        <li key={3} css={styles.li}>
          {copyright}
        </li>
      )}
      {socials && socials.length > 0 && <FooterSocials socials={socials} />}
    </>
  )

  return (
    <footer className={className} css={styles.footer}>
      <Container>
        <div css={styles.wrapper}>{childs}</div>
      </Container>
    </footer>
  )
}

const FooterLeftLink = ({ link, isMobile }) => {
  return (
    <Link
      css={{
        textDecoration: 'underline',
        display: 'block',
        ...(isMobile ? { marginBottom: 10 } : {}),
      }}
      href={link.url}
    >
      {link.label}
    </Link>
  )
}

const FooterSocials = ({ socials }) => {
  const styles = {
    socials: {},
    item: { display: 'block' },
    li: {
      ...typos.link,
      listStyle: 'none',
      float: 'right',
      marginRight: 10,
      '&:first-child': { marginRight: 0 },
    },
  }

  return (
    <nav css={styles.socials}>
      {socials.map((s, i) => (
        <Link key={i} href={s.url} css={styles.li}>
          <Icon css={styles.item} name={s.icon} size="20"></Icon>
        </Link>
      ))}
    </nav>
  )
}
export default Footer

Footer.propTypes = {
  legal: PropTypes.string,
  link: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),

  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  link: {},
  legal: '',
  socials: [
    {
      icon: 'adduser',
      url: 'http://wwww.twitter.com',
    },
    {
      icon: 'file',
      url: 'http://wwww.twitter.com',
    },
  ],
  copyright: '',
}
