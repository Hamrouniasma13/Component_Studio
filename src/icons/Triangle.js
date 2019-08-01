import React from 'react'

const SvgTriangle = props => (
  <svg viewBox="0 0 16 11" {...props}>
    <defs>
      <path
        id="triangle_svg__a"
        d="M12 15l8 10.667L28 15H12zm1.6.8h12.8L20 24.333 13.6 15.8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-12 -15)"
      xlinkHref="#triangle_svg__a"
    />
  </svg>
)

export default SvgTriangle
