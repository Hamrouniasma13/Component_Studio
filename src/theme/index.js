import { keyframes } from '@emotion/core'
import { lighten } from './utils'
import colors from './colors'
import eases from './eases'
import media, { breakpoints } from './media'

const progress = keyframes({
  '0%': {
    backgroundPosition: '200%'
  },
  '60%, 100%': {
    backgroundPosition: '0%'
  }
})

const baseColor = '#eee'
const animatedColor = lighten(baseColor, 2)

const theme = {
  colors,
  media,
  breakpoints,
  eases,
  skeletonWave: {
    backgroundImage: `linear-gradient(90deg, ${baseColor} 80%, ${animatedColor} 90%, ${baseColor} 100%)`,
    backgroundSize: '800px',
    animation: `${progress} 3s ease-in-out infinite`,
    backgroundColor: baseColor,
    color: 'transparent',
    display: 'block'
  }
}

export default theme
