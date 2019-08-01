/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Slice from './Slice'
import PieChart from '../components/PieChart'
import DataTable from '../components/DataTable'

export default function CommissionsRepartition({ title, chart, table }) {
  const styles = {
    wrapper: {
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      padding: 40,
      border: '1px solid #f3f3f3',
      boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.04)'
    },
    pie: {
      paddingLeft: 40,
      paddingRight: 80
    },
    table: {
      flex: 1
    }
  }

  return (
    <Slice title={title}>
      <div css={styles.wrapper}>
        <div css={styles.pie}>
          {chart && <PieChart {...chart} size={230} />}
        </div>
        <div css={styles.table}>{table && <DataTable {...table} />}</div>
      </div>
    </Slice>
  )
}

CommissionsRepartition.propTypes = {
  title: Slice.propTypes.title,
  chart: PropTypes.shape(PieChart.propTypes),
  table: PropTypes.shape(DataTable.propTypes)
}
