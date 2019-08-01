/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../components/Text'
import SimpleButton from '../../components/SimpleButton'

export default function Card({ title, pie, table, actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: theme.colors.white,
      border: '1px solid #f3f3f3',
      boxShadow: 'rgba(0, 0, 0, 0.04) 0 1px 10px 0',
      padding: '15px 20px',
      width: '100%',
      maxWidth: '500px',
      marginLeft: 'auto',
      marginRight: 'auto',

      '&:not(:last-child)': {
        marginBottom: '30px'
      },

      [theme.media.tablet]: {
        marginLeft: 0,
        marginRight: 0,
        padding: '30px 40px',

        '&:not(:last-child)': {
          marginRight: '30px',
          marginBottom: 0
        }
      }
    },
    pieChart: {
      display: 'flex',
      justifyContent: 'center',
      margin: '50px 0 50px'
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '30px'
    }
  }

  const actionsNode =
    actions && actions.length > 0 ? (
      <div css={styles.actions}>
        {actions.map((action, i) => (
          <SimpleButton href={action.url} key={i}>
            {action.label}
          </SimpleButton>
        ))}
      </div>
    ) : null

  return (
    <div css={styles.wrapper}>
      <Text.h3>{title}</Text.h3>
      <div css={styles.pieChart}>{pie}</div>
      {table}
      {actionsNode}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  pie: PropTypes.element.isRequired,
  table: PropTypes.element.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  )
}
