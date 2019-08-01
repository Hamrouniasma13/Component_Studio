/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import PieChart from '../components/PieChart'
import Text from '../components/Text'
import Tip from '../components/Tip'

function Card({ percent = 0, title, subtitle, noteTitle, noteContent }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 30,
      [theme.media.tablet]: {
        marginBottom: 0,
        '&:first-of-type': {
          marginRight: 40
        },
        '&:last-of-type': {
          marginRight: 0
        },
        width: '50%'
      }
    },
    top: {
      [theme.media.tablet]: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
      }
    },
    pie: {
      marginBottom: 20,
      '& > div': { margin: '0 auto' },
      [theme.media.tablet]: {
        marginBottom: 0,
        marginRight: 20
      }
    },
    right: {
      marginBottom: 30
    },
    title: {
      marginBottom: 10,
      [theme.media.desktop]: {
        marginBottom: 20
      }
    },
    bottom: {
      marginTop: 30,
      [theme.media.desktop]: {
        marginTop: 20
      }
    }
  }

  return (
    <li css={styles.wrapper}>
      <div css={styles.top}>
        <div css={styles.pie}>
          <PieChart
            data-cy={title}
            value={percent + ' %'}
            values={[
              {
                value: 100 - percent,
                color: '#e5e5e5'
              },
              {
                value: percent,
                color: 'fifth'
              }
            ]}
          />
        </div>
        <div css={styles.right}>
          <Text.h3 css={styles.title}>{title}</Text.h3>
          {subtitle}
        </div>
      </div>
      <div css={styles.bottom}>
        <Tip title={noteTitle}>{noteContent}</Tip>
      </div>
    </li>
  )
}

Card.propTypes = {
  percent: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  noteTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  noteContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default function Activity({ cards = [] }) {
  const theme = React.useContext(ThemeContext)

  if (!cards || cards.length < 1) return null

  const styles = {
    cards: {
      margin: 0,
      paddingLeft: 0,
      listStyleType: 'none',

      [theme.media.desktop]: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between'
      }
    }
  }

  return (
    <ul css={styles.cards}>
      {cards.map((card, key) => (
        <Card {...card} key={key} />
      ))}
    </ul>
  )
}

Activity.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes))
}
