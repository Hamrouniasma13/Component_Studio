import React from 'react'

const SvgUp = props => (
  <svg viewBox="0 0 16 9" {...props}>
    <defs>
      <path
        id="up_svg__a"
        d="M27.472 16L20 23.472 12.528 16l-.528.529 8 8 8-8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="matrix(1 0 0 -1 -12 24.529)"
      xlinkHref="#up_svg__a"
    />
  </svg>
)

export default SvgUp
