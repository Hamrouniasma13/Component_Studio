/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import Text from './Text'
import Button from './Button'

export default function ServiceCard({
  category,
  colorKey,
  title,
  content,
  action,
  style
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      position: 'relative',
      borderTop: '1px solid #e5e5e5',
      color: theme.colors.text,
      padding: 30,
      paddingBottom: action && action.url ? 72 : 0,
      display: 'block',
      backgroundColor: '#fff',
      [theme.media.laptop]: {
        borderRadius: 3,
        border: '1px solid #e5e5e5',
        width: 450,
        marginBottom: 30,
        marginRight: 30,
        '&:nth-of-type(2n)': {
          marginRight: 0
        }
      },

      [theme.media.desktop]: {
        width: 350,
        '&:nth-of-type(2n)': {
          marginRight: 30
        },
        '&:nth-of-type(3n)': {
          marginRight: 0
        }
      }
    },
    category: {
      display: 'block',
      marginBottom: 30,

      '&:after': {
        // eslint-disable-next-line quotes
        content: "''",
        display: 'block',
        height: 5,
        width: 40,
        backgroundColor: theme.colors[colorKey] || colorKey,
        position: 'relative',
        top: 12
      }
    },
    action: {
      position: 'absolute',
      bottom: 30,
      right: 30
    }
  }

  return (
    <animated.div style={style} css={styles.wrapper}>
      {category ? (
        <Text size="typo6" css={styles.category}>
          {category}
        </Text>
      ) : null}
      <Text.h3 size="typo2" mb={30}>
        {title}
      </Text.h3>
      <Text tag="div" mb={30}>
        {content}
      </Text>
      {action && action.label && action.url ? (
        <div css={styles.action}>
          <Button href={action.url}>{action.label}</Button>
        </div>
      ) : null}
    </animated.div>
  )
}

ServiceCard.propTypes = {
  category: PropTypes.string,
  colorKey: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.any,

  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}
