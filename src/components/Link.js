/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * LinkContext allow users of this library to use the component they want as a link. By defaut we use 'a', but
 * they could use 'button', or Link from react-router, or add some function on the click, like analytics tracking.
 */
const LinkContext = React.createContext('a')
const LinkProvider = ({ element = 'a', children }) => (
  <LinkContext.Provider value={element}>{children}</LinkContext.Provider>
)

LinkProvider.propTypes = {
  element: PropTypes.any
}

export default function Link({ css, ...props }) {
  // Retrieve the custom html tag we'll use
  const Element = React.useContext(LinkContext)

  // Remove browser default style
  const resetStyle = { color: 'inherit', textDecoration: 'none' }

  return <Element css={{ ...resetStyle, ...css }} {...props} />
}

Link.ContextProvider = LinkProvider
