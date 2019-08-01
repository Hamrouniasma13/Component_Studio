/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Slice from './Slice'
import ContractItem from '../components/ContractItem'

export default function QuickContractList({ title, actions, items }) {
  if (!Array.isArray(items)) return null

  return (
    <Slice title={title} actions={actions}>
      {items &&
        items.length > 0 &&
        items
          .slice(0, 3)
          .map((contract, key) => <ContractItem {...contract} key={key} />)}
    </Slice>
  )
}

QuickContractList.propTypes = {
  title: Slice.propTypes.title,
  listLink: Slice.propTypes.actions,
  items: PropTypes.arrayOf(PropTypes.shape(ContractItem.propTypes))
}
