import React from 'react'

const SvgArrowup = props => (
  <svg viewBox="0 0 19 19" {...props}>
    <defs>
      <path
        id="arrowup_svg__a"
        d="M28.146 12h-4.792v-1h6.5v6.5h-1v-4.793L11.707 29.854 11 29.146 28.146 12z"
      />
    </defs>
    <use transform="translate(-11 -11)" xlinkHref="#arrowup_svg__a" />
  </svg>
)

export default SvgArrowup
