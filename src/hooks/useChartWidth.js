import React from 'react'
import { useWindowSize, useMedia } from 'react-use'

/** @jsx jsx */
import { ThemeContext } from '@emotion/core'

const useChartWidth = (padding = 30) => {
  const { breakpoints } = React.useContext(ThemeContext)

  const { width } = useWindowSize()

  const isTablet = useMedia(`(max-width : ${breakpoints.tablet}px)`)
  const isLaptop = useMedia(
    `(min-width : ${breakpoints.tablet}px) and (max-width : ${breakpoints.laptop}px)`
  )

  let newWidth = 320
  if (isTablet) {
    newWidth = width - padding * 2
  } else if (isLaptop) {
    newWidth = 720 - padding * 2
  }

  return newWidth
}

export default useChartWidth
