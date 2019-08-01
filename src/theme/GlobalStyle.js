import React from 'react'
import { Global } from '@emotion/core'

const STYLES = {
  '*, *:after, *:before': {
    boxSizing: 'border-box'
  },

  'body, input, textarea, select, button': {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '16px', // OK
    fontWeight: 400 // OK
  },

  'h1, h2, h3, h4, h5, h6, a, p, span, div, input, textarea, button, select': {
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  body: {
    color: '#333',
    margin: 0,
    padding: 0
  },

  '*, *:before, *:after': {
    boxSizing: 'border-box'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    outline: 'none'
  },

  img: {
    maxWidth: '100%'
  }
}

export default () => <Global styles={STYLES} />
