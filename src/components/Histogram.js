import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import typos from '../typos'
import { BarChart, Bar, Cell, XAxis, LabelList } from 'recharts'

const offset = -20
const Label = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={offset}
        y={0}
        textAnchor="end"
        dominantBaseline="middle"
        transform="rotate(-90)"
        css={{
          ...typos.legend,
        }}
      >
        {payload.value}
      </text>
    </g>
  )
}

const offsetBottom = 15
const TopLabel = ({ x, y, width, value }) => {
  const [isShown, setIsShown] = React.useState(false)

  React.useEffect(() => setIsShown(true), [])

  return (
    <g>
      <text
        css={{
          transition: 'opacity 0.2s',
          opacity: isShown ? 1 : 0,
          ...typos.legend,
        }}
        x={x + width / 2}
        y={y - offsetBottom}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  )
}

const Histogram = ({ className, width, height, data }) => {
  const { colors } = React.useContext(ThemeContext)
  return (
    <div className={className}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis
          height={100}
          dataKey="label"
          interval={0}
          axisLine={{ stroke: colors.gray }}
          tickLine={false}
          tick={<Label />}
        />
        <Bar dataKey="value" minPointSize={10}>
          {data.map((d, i) => (
            <Cell key={`cell-${i}`} fill={`${colors.charts[i]}`} />
          ))}
          <LabelList dataKey="percent" content={<TopLabel />} />
        </Bar>
      </BarChart>
    </div>
  )
}

Histogram.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          percent: PropTypes.string,
          label: PropTypes.string,
          value: PropTypes.number,
        })
      ),
    })
  ),
  onChange: PropTypes.func,
}

Histogram.defaultProps = {
  data: [],
  onChange: () => {},
}

export default Histogram
