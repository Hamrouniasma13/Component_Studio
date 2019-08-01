import React from 'react'

const SvgMenu = props => (
  <svg viewBox="0 0 24 16" {...props}>
    <defs>
      <path
        id="menu_svg__a"
        d="M8 20.348v-1.044h24v1.044H8zm0-7.305V12h24v1.043H8zm0 14.61v-1.044h24v1.043H8z"
      />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-8 -12)"
      xlinkHref="#menu_svg__a"
    />
  </svg>
)

export default SvgMenu
