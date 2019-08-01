/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

import Slice from './Slice'
import Text from '../components/Text'

export default function InfoBox({ title, infos }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      [theme.media.desktop]: {
        width: '60%',
        padding: 30,
        boxShadow: '0 0.5px 5px 0 rgba(0, 0, 0, 0.04)',
        border: 'solid 0.5px #f3f3f3'
      }
    },
    list: {
      padding: 0,
      margin: 0
    },
    info: {
      display: 'flex',
      paddingTop: 15,
      paddingBottom: 15,
      borderTop: '1px solid #e5e5e5',

      '&:last-child': {
        borderBottom: 0
      }
    },
    label: {
      minWidth: '40%'
    }
  }

  return (
    <Slice>
      <div css={styles.wrapper}>
        {title && (
          <Text.h3 size="typo2" mb={20} css={styles.title}>
            {title}
          </Text.h3>
        )}
        {infos && infos.length > 0 ? (
          <ul css={styles.list}>
            {infos.map(({ label, value }, key) => (
              <li css={styles.info} key={key}>
                <Text css={styles.label} size="typo4">
                  {label}
                </Text>
                <Text size="typo5">{value}</Text>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Slice>
  )
}

InfoBox.propTypes = {
  title: PropTypes.string,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}
