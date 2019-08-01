export const breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200
}

export default {
  mobile: `@media only screen and (min-width : ${breakpoints.mobile}px)`,
  tablet: `@media only screen and (min-width : ${breakpoints.tablet}px)`,
  laptop: `@media only screen and (min-width : ${breakpoints.laptop}px)`,
  desktop: `@media only screen and (min-width : ${breakpoints.desktop}px)`
}
