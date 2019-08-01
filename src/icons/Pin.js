import React from 'react'

const SvgPin = props => (
  <svg viewBox="0 0 23 28" {...props}>
    <defs>
      <filter
        x="-42.6%"
        y="-33.3%"
        width="186.3%"
        height="166.7%"
        filterUnits="objectBoundingBox"
        id="pin_svg__a"
      >
        <feOffset dx={2} dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={1}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#pin_svg__a)" fillRule="nonzero" fill="none">
      <path
        d="M9.391 24a.522.522 0 0 1-.369-.153C8.675 23.5.522 15.28.522 9.391a8.784 8.784 0 0 1 8.87-8.87 8.784 8.784 0 0 1 8.869 8.87c0 5.888-8.153 14.11-8.5 14.456a.522.522 0 0 1-.37.153z"
        fill="#A0A0A0"
      />
      <circle fill="#FFF" cx={9.391} cy={9.391} r={3.13} />
    </g>
  </svg>
)

export default SvgPin
