/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../components/Text'
import SimpleButton from '../../components/SimpleButton'

export default function Saving({ title, pie, tables, actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: theme.colors.white,
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: `1px solid ${theme.colors.lighterGray}`,
      padding: '20px',
    },

    title: {
      borderBottom: '1px solid #e5e5e5',
      paddingBottom: '24px',
    },

    innerWrapper: {
      [theme.media.tablet]: {
        paddingBottom: '30px',
      },

      [theme.media.laptop]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      },
    },

    pieChart: {
      marginTop: '30px',
      marginBottom: '50px',

      [theme.media.laptop]: {
        margin: '0 100px',
      },
    },

    tables: {
      [theme.media.laptop]: {
        flex: 1,
      },
    },

    table: {
      '&:not(:last-child)': {
        marginBottom: '20px',

        [theme.media.tablet]: {
          marginBottom: '30px',
        },
      },
    },

    actions: {
      [theme.media.tablet]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  }

  return (
    <div css={styles.wrapper}>
      {title && <Text.h3 css={styles.title}>{title}</Text.h3>}
      <div css={styles.innerWrapper}>
        <div css={styles.pieChart}>{pie}</div>
        <div css={styles.tables}>
          {tables.map((table, key) => (
            <div css={styles.table} key={key}>
              {table}
            </div>
          ))}
          {actions && actions.length > 0 && (
            <div css={styles.actions}>
              {actions.map(({ url, label }, i) => (
                <SimpleButton href={url} key={i}>
                  {label}
                </SimpleButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Saving.propTypes = {
  title: PropTypes.string,
  pie: PropTypes.element,
  tables: PropTypes.arrayOf(PropTypes.element),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}
