/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { PieChart as Chart, Pie, Cell } from 'recharts'

export default function PieChart({ size, label, value, info, values }) {
  const theme = React.useContext(ThemeContext)

  if (!values || !Array.isArray(values)) return null

  // Center of each text
  const [x, y] = [size / 2, size / 2]

  // Font size of main text
  const valueSize = value ? value.length : 0
  const fontSize = valueSize < 8 ? 48 : valueSize > 10 ? 34 : 38

  const labelNode = label && (
    <text
      x={x}
      y={y - 45}
      dy={6}
      textAnchor="middle"
      fill="#999"
      fontSize="13px"
    >
      {label}
    </text>
  )

  const valueNode = value && (
    <text
      data-cy={label}
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

  const cells = values.map(({ color }, key) => (
    <Cell key={key} fill={theme.colors[color] || color} />
  ))

  return (
    <Chart width={size} height={size}>
      {labelNode}
      {valueNode}
      {infoNode}

      <Pie
        startAngle={-270}
        data={values}
        dataKey="value"
        innerRadius="90%"
        outerRadius="100%"
        animationBegin={500}
        animationDuration={600}
        AnimationEasing={'ease-out'}
      >
        {cells}
      </Pie>
    </Chart>
  )
}

PieChart.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.any,
  info: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
}

PieChart.defaultProps = {
  size: 200,
  values: [],
}
