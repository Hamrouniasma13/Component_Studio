/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '../components/Text'
import SimpleButton from '../components/SimpleButton'

function Item({ value, label }) {
  const styles = {
    item: {
      '&:not(:last-child)': { marginBottom: 30 }
    },
    value: {
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: '1.2px',
      marginRight: 10
    },
    label: {
      fontSize: 16,
      lineHeight: 1.56
    }
  }

  return (
    <li css={styles.item}>
      <span data-cy={label} css={styles.value}>
        {value}
      </span>
      <span css={styles.label}>{label}</span>
    </li>
  )
}

export default function Absenteeism({ title, color, image, items, link }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: '#fff',
      boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
      display: 'flex'
    },
    left: {
      flex: '1 0 53%',
      padding: 30,
      boxSizing: 'border-box'
    },
    list: {
      listStyleType: 'none',
      margin: 0,
      paddingLeft: 0
    },
    right: {
      flex: '1 0 47%',
      backgroundColor: theme.colors[color] || 'transparent',
      padding: 30,
      position: 'relative',
      display: 'none',
      overflow: 'hidden',
      boxSizing: 'border-box',

      [theme.media.tablet]: {
        display: 'block'
      }
    },
    image: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 330,
      maxHeight: 300
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.left}>
        {title && <Text.h3 mb={40}>{title}</Text.h3>}
        {items && items.length > 0 && (
          <ul css={styles.list}>
            {items.map((item, key) => (
              <Item key={key} {...item} />
            ))}
          </ul>
        )}
        {link && link.url && (
          <div css={{ marginTop: 50 }}>
            <SimpleButton href={link.url}>{link.label}</SimpleButton>
          </div>
        )}
      </div>
      <div css={styles.right}>
        {image && <img src={image} alt="Abseiteeism icon" css={styles.image} />}
      </div>
    </div>
  )
}

Absenteeism.propTypes = {
  title: PropTypes.string,

  color: PropTypes.string,
  image: PropTypes.string,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.any
    })
  ),

  link: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}
