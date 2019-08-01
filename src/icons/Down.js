import React from 'react'

const SvgDown = props => (
  <svg viewBox="0 0 16 9" {...props}>
    <defs>
      <path
        id="down_svg__a"
        d="M27.472 16L20 23.472 12.528 16l-.528.529 8 8 8-8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-12 -16)"
      xlinkHref="#down_svg__a"
    />
  </svg>
)

export default SvgDown
