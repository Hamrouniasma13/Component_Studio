import React from 'react'

const SvgTint = props => (
  <svg viewBox="0 0 19 24" {...props}>
    <defs>
      <path
        id="tint_svg__a"
        d="M9.275 24C4.716 24 0 20.53 0 14.725 0 9.176 8.525.52 8.888.155a.562.562 0 0 1 .775 0c.362.366 8.887 9.021 8.887 14.57C18.55 20.53 13.834 24 9.275 24zm0-22.674c-1.673 1.767-8.184 8.93-8.184 13.399 0 5.122 4.16 8.184 8.184 8.184 4.023 0 8.184-3.062 8.184-8.184 0-4.471-6.511-11.633-8.184-13.399zm0 17.218c-.99 0-3.819-.702-3.819-3.82a.546.546 0 0 1 1.091 0c0 2.612 2.7 2.729 2.728 2.729a.546.546 0 0 1 0 1.091z"
      />
    </defs>
    <use transform="translate(0 .011)" xlinkHref="#tint_svg__a" />
  </svg>
)

export default SvgTint
