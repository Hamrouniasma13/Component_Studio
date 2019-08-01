/** @jsx jsx */
import { jsx } from '@emotion/core'

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useMedia from 'react-use/lib/useMedia'

import Button from './Button'

import { breakpoints } from '../theme/media'
import { darken } from '../theme/utils'
import { ThemeContext } from '../../dist'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

/**
 * Let's say we have 10 pages and we set pageNeighbours to 2
 * Given that the current page is 6
 * The pagination control will look like the following:
 *
 * (1) < {4 5} [6] {7 8} > (10)
 *
 * (x) => terminal pages: first and last page(always visible)
 * [x] => represents current page
 * {...x} => represents page neighbours
 */

const fetchPageNumbers = (currentPage, totalPages, pageNeighbours) => {
  /**
   * totalNumbers: the total page numbers to show on the control
   * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
   */
  const totalNumbers = pageNeighbours * 2 + 3
  const totalBlocks = totalNumbers + 2

  // if the the total pages is superior than the blocks count, then do a specific pagination
  // otherise, just return numbers has they are (without the LEFT and RIGHT button)
  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours)
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

    let pages = range(startPage, endPage)

    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    const hasLeftSpill = startPage > 2
    const hasRightSpill = totalPages - endPage > 1
    const spillOffset = totalNumbers - (pages.length + 1)

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1)
        pages = [LEFT_PAGE, ...extraPages, ...pages]
        break
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset)
        pages = [...pages, ...extraPages, RIGHT_PAGE]
        break
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
        break
      }
    }

    return [1, ...pages, totalPages]
  }

  return range(1, totalPages)
}

const gotoPage = (page, totalPages, setCurrentPage, onPageChanged) => {
  const newCurrentPage = Math.max(1, Math.min(page, totalPages))

  setCurrentPage(newCurrentPage)
  onPageChanged({
    currentPage: newCurrentPage,
  })
}
/**
 * Source for the approch: https://scotch.io/tutorials/build-custom-pagination-with-react
 */
const Pagination = ({
  totalRecords = 0,
  pageLimit = 30,
  pageNeighbours = 1,
  onPageChanged,
  page,
  className,
}) => {
  const initialPage = page || 1
  const [currentPage, setCurrentPage] = useState(initialPage)

  const isAboveMobile = useMedia(`(min-width: ${breakpoints.tablet}px)`)

  pageNeighbours = Math.max(0, Math.min(!isAboveMobile ? 0 : pageNeighbours, 2))

  // numbers of possible pages based on the total pages count
  const totalPages = Math.ceil(totalRecords / pageLimit)

  useEffect(
    () => gotoPage(initialPage, totalPages, setCurrentPage, onPageChanged),
    [initialPage, totalRecords]
  )

  if (!totalRecords) return null

  // if there is only one page display nothing
  if (totalPages === 1) return null

  const pages = fetchPageNumbers(currentPage, totalPages, pageNeighbours)

  const styles = {
    paginationList: { textAlign: 'center' },
  }
  return (
    <nav className={className} css={styles.paginationList}>
      {pages.map((page, index) => {
        // return the icon left
        if (page === LEFT_PAGE)
          return (
            <StyledButton
              ghost
              key={index}
              onClick={() =>
                gotoPage(
                  currentPage - pageNeighbours * 2 - 1,
                  totalPages,
                  setCurrentPage,
                  onPageChanged
                )
              }
              icon="left"
            />
          )
        // return the icon right
        if (page === RIGHT_PAGE)
          return (
            <StyledButton
              ghost
              key={index}
              onClick={() =>
                gotoPage(
                  currentPage + pageNeighbours * 2 + 1,
                  totalPages,
                  setCurrentPage,
                  onPageChanged
                )
              }
              icon="right"
            />
          )
        // return numbers
        return (
          <StyledButton
            ghost
            key={index}
            isActive={currentPage === page}
            onClick={() =>
              gotoPage(page, totalPages, setCurrentPage, onPageChanged)
            }
          >
            {'' + page}
          </StyledButton>
        )
      })}
    </nav>
  )
}

const StyledButton = ({ isActive, children, ...rest }) => {
  const { colors } = React.useContext(ThemeContext)

  const styles = {
    label: 'StyledButton',
    width: 'auto',
    margin: '5px',
    ':hover': {
      color: 'white',
      backgroundColor: darken(colors.primary, 10),
      borderColor: darken(colors.primary, 10),
    },
    ...(isActive
      ? {
          color: 'white',
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          ':hover': {
            color: 'white',
            backgroundColor: darken(colors.primary, 10),
            borderColor: darken(colors.primary, 10),
          },
        }
      : {}),
  }

  return (
    <Button css={styles} {...rest}>
      {children}
    </Button>
  )
}

// const StyledButton = styled(Button)(({ theme, isActive }) => {
//   const _theme = { ...defaultTheme, ...theme }
//   return {
//     label: 'StyledButton',
//     width: 'auto',
//     margin: '5px',
//     ':hover': {
//       color: 'white',
//       backgroundColor: darken(_theme.colors.primary, 10),
//       borderColor: darken(_theme.colors.primary, 10)
//     },
//     ...(isActive
//       ? {
//           color: 'white',
//           backgroundColor: _theme.colors.primary,
//           borderColor: _theme.colors.primary,
//           ':hover': {
//             color: 'white',
//             backgroundColor: darken(_theme.colors.primary, 10),
//             borderColor: darken(_theme.colors.primary, 10)
//           }
//         }
//       : {})
//   }
// })

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
}

export default Pagination
