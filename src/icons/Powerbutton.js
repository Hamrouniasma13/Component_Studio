import React from 'react'

const SvgPowerbutton = props => (
  <svg viewBox="0 0 19 20" {...props}>
    <defs>
      <path
        id="powerbutton_svg__a"
        d="M9.13 20C4.096 20 0 15.904 0 10.87c0-3.277 1.75-6.304 4.568-7.9l.379-.215.428.757-.378.214C2.451 5.17.87 7.906.87 10.87c0 4.555 3.705 8.26 8.26 8.26 4.556 0 8.261-3.705 8.261-8.26 0-2.966-1.544-5.637-4.132-7.147l-.375-.219.438-.751.375.22c2.858 1.666 4.564 4.618 4.564 7.897 0 5.034-4.096 9.13-9.13 9.13zM8.696 6.957V0h.87v6.957h-.87z"
      />
    </defs>
    <use fillRule="evenodd" xlinkHref="#powerbutton_svg__a" />
  </svg>
)

export default SvgPowerbutton
