/** @jsx jsx */
import { jsx } from '@emotion/core'
import get from 'lodash/get'

import Text from '../Text'

const CustomTooltip = props => {
  const { active, payload } = props

  const tooltip = get(payload, '[0].payload.tooltip')
  if (active && tooltip) {
    return (
      <div
        css={{
          border: '1px solid white',
          padding: 10,
          background: payload[0].payload.fill,
        }}
      >
        <Text.p css={{ color: 'white' }}>{tooltip}</Text.p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
