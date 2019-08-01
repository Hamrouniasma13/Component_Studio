/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Button from '../components/Button'
import Container from '../components/Container'
import Text from '../components/Text'
import FormInfos from '../components/FormInfos'

function Wrapper({ slice, children, ...props }) {
  const style = {
    padding: 0,
    marginTop: 30,
    marginBottom: 50,
  }
  if (slice) return <Slice {...props}>{children}</Slice>

  return (
    <Container css={style} {...props}>
      {children}
    </Container>
  )
}

function Infos({ infos }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    list: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
    },
    item: {
      padding: '15px 0',
      borderTop: `1px solid ${theme.colors.lightGray}`,

      [theme.media.tablet]: {
        display: 'flex',
      },
    },
    label: {
      display: 'block',
      marginBottom: 5,

      [theme.media.tablet]: {
        marginBottom: 0,
        flex: '0 0 45%',
      },
    },
  }

  return (
    <ul css={styles.list}>
      {infos.map(({ label, value }, key) => (
        <li css={styles.item} key={key}>
          <Text css={styles.label} size="typo4">
            {label}
          </Text>
          <Text size="typo5">{value}</Text>
        </li>
      ))}
    </ul>
  )
}

function Actions({ actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    actions: {
      marginTop: 30,
      [theme.media.tablet]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      [theme.media.desktop]: {
        width: '55%',
      },
    },
    action: {
      marginBottom: 20,
      [theme.media.tablet]: {
        marginBottom: 0,
      },
    },
  }

  return (
    <div css={styles.actions}>
      {actions.map(({ link, label }, key) => (
        <Button key={key} href={link} css={styles.action}>
          {label}
        </Button>
      ))}
    </div>
  )
}

export default function ProfilInfoList({
  title,
  tableTitle,
  infos,
  actions,
  image,
  slice,
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    table: {
      [theme.media.laptop]: {
        display: 'flex',
      },
    },
    infosContainer: {
      [theme.media.laptop]: {
        width: '55%',
        boxSizing: 'border-box',
      },
    },
    title: {
      marginBottom: 20,
    },
    image: {
      display: 'none',
      backgroundSize: 'cover',
      backgroundImage: `url("${image}")`,
      backgroundPosition: 'center center ',

      [theme.media.laptop]: {
        display: 'block',
        width: '45%',
      },
    },
  }

  return (
    <Wrapper slice={slice} title={title}>
      <div css={styles.table}>
        <div css={styles.infosContainer}>
          <FormInfos title={tableTitle} infos={infos} />
        </div>
        {image && <div css={styles.image} image={image} />}
      </div>
      {actions && actions.length > 0 && <Actions actions={actions} />}
    </Wrapper>
  )
}
ProfilInfoList.propTypes = {
  slice: PropTypes.bool,
  title: PropTypes.string,
  tableTitle: PropTypes.string,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  image: PropTypes.string,
}

ProfilInfoList.defaultProps = {
  slice: true,
  tableTitle: 'Informations',
}
