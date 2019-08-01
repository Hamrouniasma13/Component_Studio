import React from 'react'

const SvgAdd = props => (
  <svg viewBox="0 0 14 14" {...props}>
    <defs>
      <path
        id="add_svg__a"
        d="M19.364 20.636H13v-1.272h6.364V13h1.272v6.364H27v1.272h-6.364V27h-1.272v-6.364z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-13 -13)"
      xlinkHref="#add_svg__a"
    />
  </svg>
)

export default SvgAdd
