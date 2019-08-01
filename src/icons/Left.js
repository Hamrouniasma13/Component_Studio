import React from 'react'

const SvgLeft = props => (
  <svg viewBox="0 0 10 17" {...props}>
    <defs>
      <path
        id="left_svg__a"
        d="M27.472 16L20 23.472 12.528 16l-.528.529 8 8 8-8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="rotate(90 18.5 6.764)"
      xlinkHref="#left_svg__a"
    />
  </svg>
)

export default SvgLeft
