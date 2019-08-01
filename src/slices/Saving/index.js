/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Slice from '../Slice'
import Saving from './Saving'

export default function SavingSlice({ title, actions, savingProps }) {
  return (
    <Slice title={title} actions={actions}>
      <Saving {...savingProps} />
    </Slice>
  )
}

SavingSlice.propTypes = {
  title: Slice.propTypes.title,
  actions: Slice.propTypes.actions,
  savingProps: PropTypes.shape(Saving.propTypes)
}
