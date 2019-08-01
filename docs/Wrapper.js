import React from 'react'
import { ThemeProvider, GlobalStyles } from '../src'

export default function Wrapper({ ...props }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider {...props} />
    </>
  )
}
