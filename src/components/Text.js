/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import typos from '../typos'

export default function Text({ tag: Tag, size, css, mb, ...props }) {
  return (
    <Tag
      css={{
        fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
        marginTop: 0,
        marginBottom: mb,
        ...typos[size || Tag],
        ...css
      }}
      {...props}
    />
  )
}

Text.propTypes = {
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'div',
    'span'
  ]),
  size: PropTypes.oneOf(Object.keys(typos)),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Text.defaultProps = {
  tag: 'span',
  mb: 0
}

Text.h1 = props => <Text tag="h1" {...props} />
Text.h2 = props => <Text tag="h2" {...props} />
Text.h3 = props => <Text tag="h3" {...props} />
Text.h4 = props => <Text tag="h4" {...props} />
Text.h5 = props => <Text tag="h5" {...props} />
Text.h6 = props => <Text tag="h6" {...props} />
Text.p = props => <Text tag="p" {...props} />
