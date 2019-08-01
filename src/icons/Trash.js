import React from 'react'

const SvgTrash = props => (
  <svg viewBox="0 0 23 24" {...props}>
    <defs>
      <path
        id="trash_svg__a"
        d="M7.304 4.174V1.565C7.304.702 8.007 0 8.87 0h5.217c.863 0 1.565.702 1.565 1.565v2.609h7.305v1.043H0V4.174h7.304zm1.044 0h6.26V1.565a.522.522 0 0 0-.521-.522H8.87a.523.523 0 0 0-.522.522v2.609zM16.308 24h-9.66a2.615 2.615 0 0 1-2.603-2.435L3.097 7.34l1.04-.069.95 14.224a1.57 1.57 0 0 0 1.56 1.462h9.661c.822 0 1.508-.642 1.562-1.462l.949-14.224 1.04.07-.948 14.224A2.615 2.615 0 0 1 16.308 24z"
      />
    </defs>
    <use fillRule="evenodd" xlinkHref="#trash_svg__a" />
  </svg>
)

export default SvgTrash
