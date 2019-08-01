import React from 'react'

const SvgRight = props => (
  <svg viewBox="0 0 10 17" {...props}>
    <defs>
      <path
        id="right_svg__a"
        d="M27.472 16L20 23.472 12.528 16l-.528.529 8 8 8-8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="rotate(-90 6.5 21.764)"
      xlinkHref="#right_svg__a"
    />
  </svg>
)

export default SvgRight
