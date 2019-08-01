/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Text from '../components/Text'
import Link from '../components/Link'

function LargeCard({ url, image, title, content }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      display: 'block',
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      backgroundColor: '#fff',
      maxWidth: '885px',

      [theme.media.tablet]: {
        display: 'flex'
      },

      '&:hover .content': url
        ? {
            padding: '30px 25px 30px 35px'
          }
        : {}
    },
    image: {
      display: 'none',
      maxWidth: '100%',

      [theme.media.tablet]: {
        display: 'block',
        width: '268px',
        height: '290px'
      }
    },
    content: {
      padding: 30,
      transition: 'padding 0.2s ease'
    }
  }

  const WrappingTag = url ? Link : 'div'

  return (
    <WrappingTag href={url} css={styles.wrapper}>
      {image && <img css={styles.image} src={image.src} alt={image.alt} />}
      <div css={styles.content} className="content">
        <Text.h3 mb={20}>{title}</Text.h3>
        <Text>{content}</Text>
      </div>
    </WrappingTag>
  )
}

LargeCard.propTypes = {
  url: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
}

export default function LargeCards({ title, content, cards }) {
  return (
    <Slice title={title}>
      {content}
      {cards.map((card, key) => (
        <div key={key} css={{ marginTop: 50 }}>
          <LargeCard {...card} />
        </div>
      ))}
    </Slice>
  )
}

LargeCards.propTypes = {
  title: Slice.propTypes.title,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  cards: PropTypes.arrayOf(PropTypes.shape(LargeCard.propTypes))
}
