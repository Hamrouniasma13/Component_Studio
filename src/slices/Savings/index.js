/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from '../Slice'
import Card from './Card'

export default function Savings({ title, card1, card2 }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    cards: {
      [theme.media.tablet]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }
  }

  return (
    <Slice title={title}>
      <div css={styles.cards}>
        {card1 ? <Card {...card1} /> : null}
        {card2 ? <Card {...card2} /> : null}
      </div>
    </Slice>
  )
}

Savings.propTypes = {
  title: Slice.propTypes.title,
  card1: PropTypes.shape(Card.propTypes),
  card2: PropTypes.shape(Card.propTypes)
}
