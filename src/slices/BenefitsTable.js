/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '../components/Text'
import DataTable from '../components/DataTable'

export default function BenefitsTable({ title, refunds, amount }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      border: '1px solid #e5e5e5',
      padding: '0',
      backgroundColor: '#fff',

      '&:not(:last-of-type)': {
        marginBottom: 30
      },

      [theme.media.laptop]: {
        maxWidth: '785px',
        display: 'flex'
      }
    },
    left: {
      padding: 20,
      [theme.media.laptop]: {
        flex: 1,
        marginRight: '30px'
      }
    },
    right: {
      padding: '20px',
      [theme.media.laptop]: {
        width: '404px',
        borderLeft: '1px solid #e5e5e5'
      }
    },
    amount: {
      display: 'block',
      textAlign: 'center',
      marginTop: 20,
      [theme.media.laptop]: {
        textAlign: 'left',
        marginTop: 35
      }
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.left}>
        <Text size="typo5">{title}</Text>
        <Text size="typo8" css={styles.amount}>
          {amount}
        </Text>
      </div>
      <div css={styles.right}>
        <DataTable rows={refunds} />
      </div>
    </div>
  )
}

BenefitsTable.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.any,
  refunds: DataTable.propTypes.rows
}
