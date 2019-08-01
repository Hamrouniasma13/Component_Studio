/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Button from '../components/Button'
import Text from '../components/Text'

function Card({ image, title, text, action }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      textAlign: 'center',
      '&:not(:last-of-type)': {
        marginBottom: '70px',

        [theme.media.tablet]: {
          marginBottom: '60px'
        }
      },
      [theme.media.laptop]: {
        display: 'flex',
        textAlign: 'left',

        '&:nth-of-type(odd) > :first-of-type': {
          marginLeft: '60px'
        },

        '&:nth-of-type(even) > :first-of-type': {
          marginRight: '60px'
        },

        '&:nth-of-type(odd)': {
          flexDirection: 'row-reverse'
        }
      }
    },
    imageWrapper: {
      position: 'relative',
      marginBottom: '20px',
      minHeight: '200px',

      [theme.media.tablet]: {
        marginBottom: '50px'
      },

      [theme.media.laptop]: {
        width: '50%',
        marginBottom: 0
      }
    },
    image: {
      width: '100%'
    },
    content: {
      textAlign: 'center',
      padding: '0 15px 15px',
      color: theme.colors.text,

      [theme.media.laptop]: {
        maxWidth: '47%',
        padding: 0,
        display: 'table'
      }
    },
    innerContent: {
      display: 'table-cell'
    },
    title: {
      marginBottom: '30px',

      [theme.media.laptop]: {
        marginBottom: '40px',
        textAlign: ' left'
      }
    },
    text: {
      textAlign: 'justify'
    },
    action: {
      marginTop: '25px',

      [theme.media.tablet]: {
        marginTop: '30px'
      },

      [theme.media.laptop]: {
        marginTop: '40px',
        textAlign: 'left'
      }
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.imageWrapper}>
        <img css={styles.image} src={image.src} alt={image.alt} />
      </div>
      <div css={styles.content}>
        <div css={styles.innerContent}>
          <Text.h3 size="typo2" css={styles.title}>
            {title}
          </Text.h3>
          <Text tag="div" css={styles.text}>
            {text}
          </Text>
          {action && action.url && (
            <div css={styles.action}>
              <Button href={action.url}>{action.label}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.any,
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}

export default function AsideCards({ cards }) {
  if (!cards || cards.length < 1) return null

  return cards.map((card, key) => <Card {...card} key={key} />)
}

AsideCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes))
}
