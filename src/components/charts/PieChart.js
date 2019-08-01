/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import CustomTooltip from './CustomTooltip'

import PropTypes from 'prop-types'
import {
  PieChart as Chart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import useDimensions from '../../hooks/useDimensions'

export default function PieChart({ width, height, value, info, values }) {
  const [ref, dimensions] = useDimensions()

  const theme = React.useContext(ThemeContext)

  if (!values || !Array.isArray(values)) return null

  // Center of each text
  const [x, y] = [dimensions.width / 2, height / 2]

  // Font size of main text
  const valueSize = value ? value.length : 0
  const fontSize = valueSize < 8 ? 48 : valueSize > 10 ? 34 : 38

  const valueNode = value && (
    <text
      x={x}
      y={y}
      dy={fontSize / 4}
      textAnchor="middle"
      fill="#333"
      fontSize={fontSize + 'px'}
      fontWeight="bold"
    >
      {value}
    </text>
  )

  const infoNode = info && (
    <text
      x={x}
      y={y + 35}
      dy={6}
      textAnchor="middle"
      fill="#999"
      fontSize="13px"
    >
      {info}
    </text>
  )

  const cells = values.map((v, key) => (
    <Cell key={key} fill={theme.colors.charts[key]} />
  ))

  return (
    <div ref={ref}>
      <ResponsiveContainer width={width} height={height}>
        <Chart
          margin={{
            top: 50,
            right: 50,
            left: 50,
            bottom: 50,
          }}
        >
          {valueNode}
          {infoNode}
          <Pie
            startAngle={-270}
            data={values}
            dataKey="value"
            innerRadius="85%"
            outerRadius="100%"
            animationBegin={500}
            animationDuration={600}
            AnimationEasing={'ease-out'}
          >
            {cells}
          </Pie>
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </Chart>
      </ResponsiveContainer>
    </div>
  )
}

PieChart.propTypes = {
  value: PropTypes.any,
  info: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.any,
      color: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
}

PieChart.defaultProps = {
  height: 320,
  width: '100%',
  values: [],
}
