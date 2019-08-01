import React from 'react'

const SvgCode = props => (
  <svg viewBox="0 0 24 20" {...props}>
    <defs>
      <path
        id="code_svg__a"
        d="M12.739 24.69l-4.571-4.572a.57.57 0 0 1 0-.808l4.57-4.572a.57.57 0 1 1 .809.808L9.38 19.714l4.167 4.167a.57.57 0 1 1-.808.808zm13.714 0a.57.57 0 0 1 0-.809l4.167-4.167-4.167-4.168a.57.57 0 1 1 .808-.808l4.571 4.572a.57.57 0 0 1 0 .808l-4.57 4.571a.57.57 0 0 1-.809 0zm-4.722-14.257a.571.571 0 0 1 1.109.277l-4.571 18.285a.571.571 0 1 1-1.109-.277l4.571-18.285z"
      />
    </defs>
    <use transform="translate(-8 -10)" xlinkHref="#code_svg__a" />
  </svg>
)

export default SvgCode
