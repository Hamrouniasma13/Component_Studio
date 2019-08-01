import React from 'react'

// from https://github.com/Swizec/useDimensions
export default function useDimensions() {
  const ref = React.useRef()
  const [dimensions, setDimensions] = React.useState({})
  React.useEffect(() => {
    setDimensions(ref.current.getBoundingClientRect().toJSON())
  }, [])
  return [ref, dimensions]
}
