/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'
import SquareButton from './SquareButton'

function Detail({ label, value, info, color, width = 25 }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    element: {
      float: 'left',
      width: '50%',
      boxSizing: 'border-box',
      padding: '0 30px',
      marginBottom: 30,

      [theme.media.laptop]: {
        width: `${width}%`,
      },
      [theme.media.desktop]: {
        padding: '0 20px',
      },
    },
    label: {
      display: 'block',
    },
    value: {
      display: 'block',
      color: theme.colors[color] || color,
    },
    info: {
      display: 'block',
    },
  }

  return (
    <li css={styles.element}>
      <Text css={styles.label} size="typo5" mb={10}>
        {label}
      </Text>
      <Text css={styles.value} size="typo3" mb={10}>
        {value}
      </Text>
      {info && (
        <Text css={styles.info} size="typo6">
          {info}
        </Text>
      )}
    </li>
  )
}

export default function ContractDetails({ fullWidth, details, actions }) {
  const theme = React.useContext(ThemeContext)

  if (!details || details.length <= 0) return null

  const styles = {
    wrapper: {
      display: 'flex',
      margin: 20,
      [theme.media.tablet]: {
        margin: 0,
      },
    },
    listWrapper: {
      flex: 1,
    },
    list: {
      ...(fullWidth
        ? {
            width: '100%',
          }
        : {
            minWidth: 500,
          }),
      ...(actions && actions.length > 0
        ? { flex: 1 }
        : { display: 'inline-block' }),

      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      paddingTop: 19,
      backgroundColor: '#fff',

      // reset list
      boxSizing: 'border-box',
      listStyleType: 'none',
      paddingLeft: 0,
      margin: 0,

      [theme.media.laptop]: {
        height: 120,

        // border
        ...(fullWidth
          ? { width: '100%' }
          : {
              minWidth: 600,
            }),
      },

      [theme.media.desktop]: {
        ...(fullWidth
          ? { width: '100%' }
          : {
              minWidth: 700,
            }),
      },
    },
    action: {
      marginLeft: 28,
    },
  }

  const customWidth = 100 / details.length

  return (
    <div css={styles.wrapper}>
      <div css={styles.listWrapper}>
        <ul css={styles.list}>
          {details.map((detail, key) => (
            <Detail key={key} {...detail} width={customWidth} />
          ))}
        </ul>
      </div>
      {actions &&
        actions.length > 0 &&
        actions.map((action, key) => (
          <div css={styles.action} key={key}>
            <SquareButton {...action} />
          </div>
        ))}
    </div>
  )
}
ContractDetails.defaultProps = {
  fullWidth: false,
}

ContractDetails.propTypes = {
  fullWidth: PropTypes.bool,
  /**
   * In order to respect the design, details length has to not exceed 5 elements.
   */
  details: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ]),
      color: PropTypes.string,
      info: PropTypes.any,
    })
  ),
}
