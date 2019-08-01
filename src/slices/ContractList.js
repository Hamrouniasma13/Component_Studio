/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Transition } from 'react-spring'

import Slice from './Slice'
import ContractItem from '../components/ContractItem'
import InputSelect from '../components/forms/InputSelect'

const AnimatedList = ({ items }) => {
  return (
    <Transition
      native
      items={items}
      keys={item => item.key}
      from={{ opacity: 0, y: 10 }}
      enter={{ opacity: 1, y: 0 }}
      leave={{ opacity: 0, y: 0 }}
      config={{ duration: 200 }}
    >
      {item => ({ opacity, y }) => (
        <ContractItem
          {...item}
          style={{
            opacity,
            transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
          }}
        />
      )}
    </Transition>
  )
}

export default function ContractList({ label, contracts, filters, onFilter }) {
  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15,
      maxWidth: 320,
    },
    filter: {
      marginLeft: 15,
      flex: 1,
    },
  }

  return (
    <Slice>
      {filters && filters.length > 0 ? (
        <div css={styles.wrapper}>
          <span>{label} :</span>
          <div css={styles.filter}>
            <InputSelect options={filters} onChange={onFilter} />
          </div>
        </div>
      ) : null}
      {contracts && contracts.length > 0 ? (
        <AnimatedList items={contracts} />
      ) : null}
    </Slice>
  )
}

ContractList.propTypes = {
  contracts: PropTypes.arrayOf(PropTypes.shape(ContractItem.propTypes)),
}
