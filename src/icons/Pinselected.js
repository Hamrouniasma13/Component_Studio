import React from 'react'

const SvgPinselected = props => (
  <svg viewBox="0 0 38 49" {...props}>
    <defs>
      <filter
        x="-22.2%"
        y="-17.4%"
        width="144.4%"
        height="134.8%"
        filterUnits="objectBoundingBox"
        id="pinselected_svg__a"
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
    <g
      filter="url(#pinselected_svg__a)"
      transform="translate(-1 -1)"
      fillRule="nonzero"
      fill="none"
    >
      <path
        d="M18 46a1 1 0 0 1-.707-.293C16.627 45.042 1 29.285 1 18A16.836 16.836 0 0 1 18 1a16.836 16.836 0 0 1 17 17c0 11.285-15.627 27.042-16.293 27.707A1 1 0 0 1 18 46z"
        fill="#005792"
      />
      <circle fill="#FFF" cx={18} cy={18} r={6} />
    </g>
  </svg>
)

export default SvgPinselected
