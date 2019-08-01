import React from 'react'

const SvgGoto = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="goto_svg__a"
        d="M30.218 9.044h-7.61V8H32v9.391h-1.044v-7.61L20.37 20.37l-.738-.738L30.218 9.044zM8 8h1.043v22.957H32V32H8V8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-8 -8)"
      xlinkHref="#goto_svg__a"
    />
  </svg>
)

export default SvgGoto
