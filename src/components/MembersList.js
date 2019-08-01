/** @jsx jsx */
import { jsx } from '@emotion/core'
import TableV2 from './TableV2'
import Container from './Container'
import Text from './Text'

export default function MembersList({ title, head, rows }) {
  return (
    <div css={{ margin: '50px 0' }}>
      <Container>
        <Text.h2 mb={30}>{title}</Text.h2>
      </Container>
      <TableV2 head={head} rows={rows} />
    </div>
  )
}

MembersList.propTypes = {
  head: TableV2.propTypes.head,
  rows: TableV2.propTypes.rows,
}
