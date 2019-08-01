import React from 'react'

const SvgPayment = props => (
  <svg viewBox="0 0 23 21" {...props}>
    <defs>
      <path
        id="payment_svg__a"
        d="M31.5 19c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5h-22c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h4.8l8.85-8.85c.2-.2.5-.2.7 0l3 3c.2.2.2.5 0 .7l-9 9c-.1.1-.2.15-.35.15h-3c-.3 0-.5-.2-.5-.5V20h-4v10h21V20h-5.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6zm-8-7.8L15 19.7V22h2.3l8.5-8.5-2.3-2.3zM14 26.5c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5s-.2.5-.5.5h-12c-.3 0-.5-.2-.5-.5z"
      />
    </defs>
    <use transform="translate(-9 -10)" xlinkHref="#payment_svg__a" />
  </svg>
)

export default SvgPayment
