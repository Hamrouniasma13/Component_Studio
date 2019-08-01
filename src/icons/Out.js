import React from 'react'

const SvgOut = props => (
  <svg viewBox="0 0 19 23" {...props}>
    <defs>
      <path
        id="out_svg__a"
        d="M16.853 15.146a.5.5 0 0 1 0 .707L12.706 20H26.5a.5.5 0 1 1 0 1H12.706l4.147 4.146a.5.5 0 1 1-.707.707l-5-4.999a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .707 0zM29.999 31.5a.5.5 0 0 1-.5.5h-12a.5.5 0 1 1 0-1H29V10H17.5a.5.5 0 1 1 0-1h12a.5.5 0 0 1 .5.5v22z"
      />
    </defs>
    <use transform="translate(-11 -9)" xlinkHref="#out_svg__a" />
  </svg>
)

export default SvgOut
