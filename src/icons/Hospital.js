import React from 'react'

const SvgHospital = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="hospital_svg__a"
        d="M12 1.043C5.958 1.043 1.043 5.958 1.043 12c0 6.041 4.915 10.957 10.957 10.957 6.041 0 10.957-4.916 10.957-10.957C22.957 5.958 18.04 1.043 12 1.043zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm-1.565-6.26h3.13v-4.175h4.174v-3.13h-4.174V6.26h-3.13v4.174H6.26v3.13h4.174v4.174zm4.174 1.043H9.39v-4.174H5.217V9.39h4.174V5.217h5.218v4.174h4.174v5.218h-4.174v4.174z"
      />
    </defs>
    <use fillRule="evenodd" xlinkHref="#hospital_svg__a" />
  </svg>
)

export default SvgHospital
