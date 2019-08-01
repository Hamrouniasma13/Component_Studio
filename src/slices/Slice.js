/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from '../components/Text'
import Container from '../components/Container'

function Actions({ actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    list: {
      margin: '40px 0 0',
      listStyleType: 'none',
      padding: 0,

      [theme.media.tablet]: {
        display: 'flex',
        justifyContent: 'flex-end', // right align
        alignItems: 'center', // align button and simple button
      },
    },
    item: {
      '&:not(:first-of-type)': {
        margin: '15px 0 0',
        textAlign: 'center', // align button and simple button
        [theme.media.tablet]: {
          margin: '0 0 0 15px',
        },
      },
    },
  }

  return (
    <ul css={styles.list}>
      {actions.map((action, key) => (
        <li css={styles.item} key={key}>
          {action}
        </li>
      ))}
    </ul>
  )
}

export default function Slice({ title, actions, children }) {
  return (
    <div css={{ padding: '60px 0 60px' }}>
      <Container>
        {title && <Text.h2 mb={50}>{title}</Text.h2>}
        {children}
        {actions && actions.length > 0 && <Actions actions={actions} />}
      </Container>
    </div>
  )
}

Slice.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actions: PropTypes.array,
}
