/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { useMedia } from 'react-use'

import InputSelect from '../components/forms/InputSelect'
import Container from '../components/Container'
import Histogram from '../components/Histogram'
import DataTable from '../components/DataTable'
import Text from '../components/Text'
import Slice from '../slices/Slice'
import useChartWidth from '../hooks/useChartWidth'

function BarTable({ title, tableTitle, data }) {
  const [currentData, setCurrentData] = React.useState(data[0].values)
  const { breakpoints, colors, media } = React.useContext(ThemeContext)

  const isLaptop = useMedia(`(min-width : ${breakpoints.laptop}px)`)

  const hasMultipleLines = data && data.length > 1
  const options = data.map(d => ({ label: d.label, value: d.label }))
  const defaultValue = options[0]

  const width = useChartWidth()

  const handleChange = value =>
    setCurrentData(data.find(c => c.label === value.label).values)

  const styles = {
    title: {
      marginBottom: '50px',
      borderBottom: `1px solid ${colors.lightGray}`,
      paddingBottom: '30px',
    },
    wrapper: {
      label: 'TableWrapper',
      ...(isLaptop ? { display: 'flex' } : {}),
    },
    histogram: {
      [media.desktop]: {
        marginRight: 30,
        paddingRight: 30,
      },
      ...(isLaptop ? { borderRight: `1px solid ${colors.lightGray}` } : {}),
    },
    inputSelect: {
      marginBottom: '50px',
      [media.laptop]: {
        padding: '0 40px',
        marginBottom: 30,
      },
    },
  }
  return (
    <Slice>
      <Container>
        <Text.h2 css={styles.title}>{title}</Text.h2>
        <div css={styles.wrapper}>
          <div css={styles.histogram}>
            {hasMultipleLines ? (
              <InputSelect
                css={styles.inputSelect}
                defaultValue={defaultValue}
                options={options}
                onChange={handleChange}
              />
            ) : null}
            <Histogram data={currentData} width={width} />
          </div>

          <DataTable
            css={isLaptop ? { flexGrow: 2 } : {}}
            title={tableTitle}
            rows={currentData.map((d, i) => ({
              dotColor: colors.charts[i],
              title: d.label,
              value: d.value,
            }))}
          />
        </div>
      </Container>
    </Slice>
  )
}

BarTable.propTypes = {
  title: PropTypes.string,
  tableTitle: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      percent: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
}
BarTable.defaultProps = {
  title: '',
  tableTitle: '',
  data: [],
}

export default BarTable
