/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import Container from './Container'

export default function ListFilters({ label, children }) {
  const styles = {
    wrapper: {
      marginTop: 20,
      marginBottom: 20,
    },
    innerWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      float: 'left',
      marginRight: 30,
    },
    filters: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      overflow: 'visible',
    },
    filter: {
      float: 'left',
      marginRight: 10,
    },
  }

  return (
    <div css={styles.wrapper}>
      <Container>
        <div css={styles.innerWrapper}>
          {label && <span css={styles.label}>{label}</span>}
          <ul css={styles.filters}>
            {React.Children.map(children, (child, key) => (
              <li key={key} css={styles.filter}>
                {child}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

ListFilters.propTypes = {
  label: PropTypes.string,
}
