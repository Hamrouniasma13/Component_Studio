import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
// import useMedia from 'react-use/lib/useMedia'
import ChartBox from './ChartBox'
import DataTable from '../DataTable'
import Container from '../Container'
import BarChart from './BarChart'
import InputSelect from '../forms/InputSelect'

const BarChartBox = ({ title, data, dataTable }) => {
  const [currentData, setCurrentData] = React.useState(data[0].values)
  const { colors, media } = React.useContext(ThemeContext)

  const hasMultipleLines = data && data.length > 1
  const options = data.map(d => ({ label: d.label, value: d.label }))
  const defaultValue = options[0]

  const handleChange = value =>
    setCurrentData(data.find(c => c.label === value.label).values)

  const styles = {
    inputSelect: {
      marginBottom: '50px',
      [media.laptop]: {
        padding: '0 40px',
        marginBottom: 30,
      },
    },
  }
  return (
    <ChartBox
      title={title}
      chart={<BarChart values={currentData} onChange={handleChange} />}
      select={
        hasMultipleLines ? (
          <InputSelect
            css={styles.inputSelect}
            defaultValue={defaultValue}
            options={options}
            onChange={handleChange}
          />
        ) : null
      }
      table={
        <DataTable
          title={dataTable.title}
          info={dataTable.info}
          rows={currentData.map((d, i) => ({
            dotColor: colors.charts[i],
            title: d.name,
            value: d.value,
          }))}
        />
      }
      actions={dataTable.actions}
    />
  )
}

BarChartBox.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  dataTable: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    actions: PropTypes.array,
  }),
}

BarChartBox.defaultProps = {
  title: '',
  data: [],
  dataTable: {
    title: '',
    info: '',
    actions: [],
  },
}

export default BarChartBox
