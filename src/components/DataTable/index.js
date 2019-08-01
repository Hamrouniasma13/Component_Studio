/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Row from './Row'
import Text from '../Text'

export default function DataTable({ className, title, info, rows }) {
  const styles = {
    titleWrapper: {
      marginBottom: 20,
      overflow: 'hidden',
    },
    title: { float: 'left' },
    info: { float: 'right' },
  }

  return (
    <div className={className}>
      {title || info ? (
        <div css={styles.titleWrapper}>
          <Text css={styles.title} size="typo3">
            {title}
          </Text>
          {info && <Text css={styles.info}>{info}</Text>}
        </div>
      ) : null}
      <div>
        {rows && rows.length > 0
          ? rows.map((row, i) => <Row {...row} key={i} />)
          : null}
      </div>
    </div>
  )
}

DataTable.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.shape(Row.propTypes)),
}

DataTable.Row = Row
