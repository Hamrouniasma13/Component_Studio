import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import CustomTooltip from './CustomTooltip'

import {
  BarChart as _BarChart,
  Bar,
  Cell,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const BarChart = ({ className, values, width, height }) => {
  const { colors } = React.useContext(ThemeContext)

  const newData = values.map((d, i) => ({ ...d, fill: colors.charts[i] }))
  return (
    <div className={className}>
      <ResponsiveContainer width={width} height={height}>
        <_BarChart
          data={newData}
          margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 50,
          }}
        >
          <XAxis dataKey="name" hide={true} />
          <Bar dataKey="value" minPointSize={10}>
            {newData.map((d, i) => (
              <Cell key={`cell-${i}`} fill={`${colors.charts[i]}`} />
            ))}
          </Bar>
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </_BarChart>
      </ResponsiveContainer>
    </div>
  )
}

BarChart.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          percent: PropTypes.string,
          name: PropTypes.string,
          value: PropTypes.number,
        })
      ),
    })
  ),
}
BarChart.defaultProps = {
  width: '100%',
  height: 320,
  values: [],
}

export default BarChart
