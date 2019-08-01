/** @jsx jsx */
import { jsx } from '@emotion/core'
import Slice from './Slice'

export default function Iframe({ url, ...props }) {
  return (
    <Slice title={props.title}>
      <iframe
        css={{ margin: '0 auto', display: 'block' }}
        src={url}
        {...props}
      />
    </Slice>
  )
}

Iframe.defaultProps = {
  width: 560,
  height: 315,
  frameBorder: 0,
  allow: 'autoplay; encrypted-media;'
}
