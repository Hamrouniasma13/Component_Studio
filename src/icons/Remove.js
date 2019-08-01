import React from 'react'

const SvgRemove = props => (
  <svg viewBox="0 0 14 2" {...props}>
    <defs>
      <path id="remove_svg__a" d="M13 20.636h14v-1.272H13z" />
    </defs>
    <use
      fillRule="evenodd"
      transform="translate(-13 -19)"
      xlinkHref="#remove_svg__a"
    />
  </svg>
)

export default SvgRemove
