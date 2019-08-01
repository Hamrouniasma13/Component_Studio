/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Button from '../components/Button'
import Text from '../components/Text'

const coverOpacity = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  background: '#fff',
  opacity: 0.2
}

export default function Banner({
  background,
  cover,
  title,
  category,
  subtitle,
  action
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    cover: {
      position: 'relative',
      padding: '40px 0 35px',
      backgroundSize: 'cover',
      ...(cover ? { backgroundImage: `url(${cover})` } : {}),
      backgroundColor: background || theme.colors.primary,
      backgroundPosition: 'center',
      textAlign: 'center',
      color: theme.colors.white,

      ':after': coverOpacity,

      [theme.media.tablet]: {
        padding: '70px 0'
      },

      [theme.media.laptop]: {
        textAlign: 'left'
      }
    },
    wrapper: {
      position: 'relative',
      zIndex: 1,
      [theme.media.tablet]: {
        margin: '0 30px'
      },
      [theme.media.laptop]: {
        margin: '0 130px'
      },
      [theme.media.desktop]: {
        margin: '0 95px'
      }
    },
    category: {
      textTransform: 'uppercase',
      color: 'white'
    },
    separator: {
      width: '25px',
      height: '1px',
      margin: '15px auto 10px',
      background: 'white',
      [theme.media.tablet]: {
        width: '40px',
        margin: '20px auto 15px'
      },
      [theme.media.laptop]: {
        margin: '20px 0 15px'
      }
    },
    title: {
      marginBottom: '40px',
      [theme.media.tablet]: {
        marginBottom: '30px'
      }
    },
    subtitle: {
      marginBottom: '35px',
      [theme.media.tablet]: {
        marginBottom: '45px'
      }
    }
  }

  return (
    <div css={styles.cover}>
      <Container>
        <div css={styles.wrapper}>
          {category && (
            <Text size="typo6" css={styles.category}>
              {category}
            </Text>
          )}
          {category && <div css={styles.separator} />}
          <Text.h1 css={styles.title}>{title}</Text.h1>
          {subtitle && (
            <Text tag="div" css={styles.subtitle}>
              {subtitle}
            </Text>
          )}
          {action && action.url && (
            <Button size="big" href={action.url}>
              {action.label}
            </Button>
          )}
        </div>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  background: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}
