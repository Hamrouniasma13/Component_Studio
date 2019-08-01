/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Text from '../components/Text'
import Button from '../components/Button'

function Card({ image, title, text, actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: 'white',
      borderRadius: 5,
      overflow: 'hidden',
      border: `1px solid ${theme.colors.lightGray}`,
      marginBottom: 30,
      [theme.media.desktop]: {
        flex: '0 1 48%'
      }
    },
    innerWrapper: {
      minHeight: 150,
      height: '100%',
      [theme.media.laptop]: {
        minHeight: 200
      },
      [theme.media.desktop]: {
        display: 'flex'
      }
    },
    image: {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '45%',
      display: 'none',
      [theme.media.desktop]: {
        display: 'block'
      }
    },
    content: {
      padding: 15,
      [theme.media.tablet]: {
        padding: 30
      },
      [theme.media.desktop]: {
        width: '55%'
      }
    },
    action: {
      marginTop: 20
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.innerWrapper}>
        <div css={styles.image} />

        <div css={styles.content}>
          {title && <Text.h3 mb={15}>{title}</Text.h3>}

          {text && (
            <Text tag="div" mb={30}>
              {text}
            </Text>
          )}

          {actions && actions.length > 0
            ? actions.map(({ url, label }, key) =>
                url && label ? (
                  <div css={styles.action} key={key}>
                    <Button href={url}>{label}</Button>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.any,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  )
}

export default function FourCards({ title, cards, actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    cards: {
      [theme.media.desktop]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }
    }
  }

  return (
    <Slice title={title} actions={actions}>
      {cards && cards.length > 0 ? (
        <div css={styles.cards}>
          {cards.map((card, key) => (
            <Card key={key} {...card} />
          ))}
        </div>
      ) : null}
    </Slice>
  )
}

FourCards.propTypes = {
  title: Slice.propTypes.title,
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  actions: Slice.propTypes.actions
}
