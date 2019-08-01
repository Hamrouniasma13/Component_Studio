import React from 'react'

const SvgCalendar = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="calendar_svg__a"
        d="M8.387 32h23.226a.387.387 0 0 0 .387-.387V10.71a.387.387 0 0 0-.387-.387H26.58V8.387a.387.387 0 1 0-.775 0v1.936h-5.419V8.387a.387.387 0 1 0-.774 0v1.936h-5.42V8.387a.387.387 0 1 0-.774 0v1.936H8.387A.387.387 0 0 0 8 10.71v20.903c0 .214.173.387.387.387zm.387-.774v-14.71h22.452v14.71H8.774zm4.645-20.13v1.936a.387.387 0 1 0 .775 0v-1.935h5.419v1.935a.387.387 0 1 0 .774 0v-1.935h5.42v1.935a.387.387 0 1 0 .774 0v-1.935h4.645v4.645H8.774v-4.645h4.645z"
      />
    </defs>
    <use transform="translate(-8 -8)" xlinkHref="#calendar_svg__a" />
  </svg>
)

export default SvgCalendar
