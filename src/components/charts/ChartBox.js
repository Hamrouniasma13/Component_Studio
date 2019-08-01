/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import useMedia from 'react-use/lib/useMedia'

import Text from '../../components/Text'
import SimpleButton from '../../components/SimpleButton'

import useChartWidth from '../../hooks/useChartWidth'

function ChartBox({ title, select, chart, table, actions, className }) {
  const { breakpoints, media, colors } = React.useContext(ThemeContext)

  const isLaptop = useMedia(`(min-width : ${breakpoints.laptop}px)`)

  const width = useChartWidth()

  const styles = {
    wrapper: {
      backgroundColor: colors.white,
      marginBottom: 50,
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: `1px solid ${colors.lighterGray}`,
      padding: '20px',
    },

    title: {
      borderBottom: `1px solid ${colors.lightGray}`,
      paddingBottom: '24px',
    },

    innerWrapper: {
      [media.tablet]: {
        paddingBottom: '30px',
      },

      [media.laptop]: {
        ...(isLaptop ? { display: 'flex' } : {}),
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      },
    },

    chart: {
      marginTop: '30px',
      marginBottom: '50px',

      [media.laptop]: {
        width,
        margin: '0 30px 0 0',
      },
    },

    tables: {
      [media.laptop]: {
        flex: 1,
      },
    },

    table: {
      '&:not(:last-child)': {
        marginBottom: '20px',

        [media.tablet]: {
          marginBottom: '30px',
        },
      },
    },

    actions: {
      [media.tablet]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  }

  return (
    <div className={className} css={styles.wrapper}>
      {title && <Text.h3 css={styles.title}>{title}</Text.h3>}
      <div css={styles.innerWrapper}>
        <div css={styles.chart}>
          {select ? select : null}
          {chart}
        </div>
        <div css={styles.tables}>
          <div css={styles.table}>{table}</div>
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

ChartBox.propTypes = {
  title: PropTypes.string,
}

export default ChartBox
