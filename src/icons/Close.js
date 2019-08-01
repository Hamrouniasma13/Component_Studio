import React from 'react'

const SvgClose = props => (
  <svg viewBox="0 0 16 16" {...props}>
    <defs>
      <path
        id="close_svg__a"
        d="M20.734 20L28 27.266l-.734.734L20 20.734 12.734 28 12 27.266 19.266 20 12 12.734l.734-.734L20 19.266 27.266 12l.734.734L20.734 20z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-12 -12)"
      xlinkHref="#close_svg__a"
    />
  </svg>
)

export default SvgClose
