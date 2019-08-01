import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Icon from './Icon'

const TableWrapper = styled('div')({
  width: '100%',
  overflowX: 'auto',
})

const TableBlock = styled('table')(({ theme: { colors } }) => ({
  width: '100%',
  minWidth: '700px',
  background: colors.white,
  color: colors.text,
  fontWeight: 600,
}))

const TableRow = styled('tr')(({ theme: { colors }, onClick }) => ({
  transition: 'background 0.2s',
  ':hover': {
    background: colors.lighterGray,
    cursor: onClick ? 'pointer' : 'default',
  },
}))

const TableHead = styled('thead')(({ theme: { colors } }) => ({
  borderBottom: `1px solid ${colors.lightGray}`,
}))

const TableHeadCell = styled('th')(({ sorting }) => ({
  padding: '20px 15px',
  fontSize: 14,
  textAlign: 'right',
  cursor: sorting && 'pointer',
  ':first-of-type': {
    textAlign: 'left',
  },
}))

const TableHeadCellInner = styled('span')({
  position: 'relative',
})

const SortIcon = styled(Icon)(({ order, index, theme: { colors } }) => ({
  position: 'absolute',
  top: '2px',
  right: index === 0 ? '-25px' : 'inherit',
  left: index !== 0 ? '-25px' : 'inherit',
  color: colors.text,
  transform: order === 'ASC' ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: 'transform 0.3s ease',
}))

const TableBody = styled('tbody')({})

const TableBodyCell = styled('td')(({ theme: { colors }, canEdit }) => ({
  padding: '15px',
  fontSize: '14px',
  textAlign: 'right',
  verticalAlign: 'middle',
  borderBottom: `1px solid ${colors.lightGray}`,
  lineHeight: '1.3em',
  fontWeight: 400,
  whiteSpace: 'nowrap',
  ':first-of-type': {
    textAlign: canEdit ? 'center' : 'left',
  },
}))

function Table({
  sorting,
  body,
  head,
  sortingIndex,
  sortingBy,
  sortingHandler,
  canEdit,
}) {
  const [sortIndex, setSortIndex] = useState(sortingIndex || 0)
  const [sortBy, setSortBy] = useState(sortingBy || 'ASC')

  function sortData(data, index = 0, order = 'ASC') {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
      const leftValue = a.data[index].value || ''
      const rightValue = b.data[index].value || ''
      if (order === 'ASC') {
        if (typeof leftValue === 'string') {
          return leftValue.localeCompare(rightValue)
        }
        return leftValue > rightValue
      }

      if (typeof leftValue === 'string') {
        return rightValue.localeCompare(leftValue)
      }
      return leftValue < rightValue
    })

    return sortedData
  }

  function handleSorting(sortBy, sortIndex) {
    setSortBy(sortBy)
    setSortIndex(sortIndex)
    sortingHandler &&
      sortingHandler({ sortIndex, sortBy, label: head[sortIndex].label })
  }

  let datas = [...body]
  if (sorting && !sortingHandler) datas = sortData(datas, sortIndex, sortBy)

  return (
    <TableWrapper>
      <TableBlock>
        <TableHead>
          <TableRow>
            {canEdit && <TableHeadCell />}
            {head &&
              head.map((data, index) => (
                <TableHeadCell
                  key={index}
                  sorting={data.sorting}
                  onClick={() =>
                    data.sorting &&
                    handleSorting(
                      sortBy === 'ASC' && index === sortIndex ? 'DESC' : 'ASC',
                      index
                    )
                  }
                >
                  <TableHeadCellInner>
                    {data.label}
                    {data.sorting && sortIndex === index && (
                      <SortIcon
                        index={index}
                        order={sortBy}
                        size="15"
                        name="down"
                      />
                    )}
                  </TableHeadCellInner>
                </TableHeadCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas &&
            datas.map(row => (
              <TableRow
                key={row.key}
                onClick={row.onClick ? () => row.onClick(row) : null}
              >
                {canEdit && row.href && (
                  <TableBodyCell key={'edit'} canEdit>
                    <a href={row.href}>
                      <Icon size={20} name="edit" />
                    </a>
                  </TableBodyCell>
                )}
                {row.data &&
                  row.data.map((cell, index) => (
                    <TableBodyCell key={index}>
                      {(cell && (cell.displayValue || cell.value)) || '-'}
                    </TableBodyCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </TableBlock>
    </TableWrapper>
  )
}

Table.propTypes = {
  /**
   * Array of objects for the table's header
   */
  head: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      sorting: PropTypes.bool,
    })
  ).isRequired,
  /**
   * Array of objects {data, key}. data: {value, displayValue} for the table's body rows
   */
  body: PropTypes.arrayOf(
    PropTypes.exact({
      data: PropTypes.array.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * boolean for activate the sorting feature
   */
  sorting: PropTypes.bool,
}

Table.defaultProps = {
  head: [],
  body: [],
  sorting: false,
}

export default Table
