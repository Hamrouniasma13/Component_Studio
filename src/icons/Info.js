import React from 'react'
import PropTypes from 'prop-types'

const SvgInfo = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="info_svg__a"
        d="M20 8c6.626 0 12 5.374 12 12s-5.374 12-12 12S8 26.626 8 20 13.374 8 20 8zm0 22.957c6.052 0 10.957-4.905 10.957-10.957 0-6.052-4.905-10.957-10.957-10.957-6.052 0-10.957 4.905-10.957 10.957 0 6.052 4.905 10.957 10.957 10.957zm2.087-6.261c.313 0 .522.208.522.521 0 .313-.209.522-.522.522h-4.174c-.313 0-.522-.209-.522-.522 0-.313.209-.521.522-.521h1.565v-5.218h-1.565c-.313 0-.522-.208-.522-.521 0-.314.209-.522.522-.522H20c.313 0 .522.208.522.522v5.739h1.565zM20 16.348c-.313 0-.522-.209-.522-.522v-1.043c0-.313.209-.522.522-.522.313 0 .522.209.522.522v1.043c0 .313-.209.522-.522.522z"
      />
    </defs>
    <use
      fill={props.fill}
      transform="translate(-8 -8)"
      xlinkHref="#info_svg__a"
    />
  </svg>
)

export default SvgInfo

SvgInfo.propTypes = {
  fill: PropTypes.string,
}

SvgInfo.defaultProps = {
  fill: '#231F20',
}
