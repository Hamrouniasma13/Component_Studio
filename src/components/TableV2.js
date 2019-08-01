/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Container from './Container'

function RowItem({ content, subContent }) {
  const styles = {
    wrapper: {
      flex: 1,
      textAlign: 'center',
      '&:first-of-type': {
        textAlign: 'left',
      },
    },
    content: {
      fontSize: 16,
      fontWeight: 600,
    },
    subContent: {
      fontSize: 14,
      color: '#7F7F7F',
    },
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.content}>{content}</div>
      <div css={styles.subContent}>{subContent}</div>
    </div>
  )
}

RowItem.propTypes = {
  content: PropTypes.any,
  subContent: PropTypes.string,
}

function Row({ items }) {
  const styles = {
    rowWrapper: {
      borderBottom: '1px solid #e5e5e5',
    },
    row: {
      height: 90,
      display: 'flex',
      alignItems: 'center',
    },
  }

  return (
    <div css={styles.rowWrapper}>
      <Container>
        <div css={styles.row}>
          {items.map((item, key) => (
            <RowItem {...item} key={key} />
          ))}
        </div>
      </Container>
    </div>
  )
}

Row.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(RowItem.propTypes)),
}

function HeadCell({ content, subContent }) {
  const styles = {
    wrapper: {
      flex: 1,
      textAlign: 'center',
      '&:first-of-type': {
        textAlign: 'left',
      },
    },
    content: {
      fontSize: 16,
      fontWeight: 600,
    },
    subContent: {
      fontSize: 14,
      color: '#7F7F7F',
    },
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.content}>{content}</div>
      <div css={styles.subContent}>{subContent}</div>
    </div>
  )
}

HeadCell.propTypes = {
  content: PropTypes.string,
  subContent: PropTypes.string,
}

export default function Table({ head, rows }) {
  if (!head || (rows && rows[0] && head.length !== rows[0].length)) return null

  const styles = {
    headRowWrapper: {
      backgroundColor: '#ebebeb',
    },
    headRow: {
      display: 'flex',
      alignItems: 'center',
      height: 70,
    },
  }

  return (
    <div>
      <div css={styles.headRowWrapper}>
        <Container>
          <div css={styles.headRow}>
            {head.map((headCell, key) => (
              <HeadCell {...headCell} key={key} />
            ))}
          </div>
        </Container>
      </div>
      {Array.isArray(rows) &&
        rows.map((row, key) => <Row items={row} key={key} />)}
    </div>
  )
}

Table.propTypes = {
  head: PropTypes.arrayOf(PropTypes.shape(HeadCell.propTypes)).isRequired,
  rows: PropTypes.arrayOf(Row.propTypes.items),
}
