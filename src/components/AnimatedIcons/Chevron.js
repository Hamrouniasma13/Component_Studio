/** @jsx jsx */
import { jsx } from '@emotion/core'
import Icon from '../Icon'

function Chevron({ open, css, ...rest }) {
  return (
    <Icon
      name="up"
      css={{
        ...css,
        transition: 'all 0.2s',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
      }}
      {...rest}
    />
  )
}

export default Chevron
