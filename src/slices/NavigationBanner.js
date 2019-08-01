import React from 'react'
import PropTypes from 'prop-types'
import SlickSlider from 'react-slick'
import Color from 'color'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ProgressiveImage from 'react-progressive-image'

import { times } from 'lodash'

import { breakpoints } from '../theme/media'

import Icon from '../components/Icon'
import Link from '../components/Link'
import Text from '../components/Text'

import DashboardBanner from '../slices/DashboardBanner'

const CardWrapper = styled(Link)(({ theme, cursor, loading }) => {
  return {
    opacity: loading ? 0 : 1,
    label: 'navigation-banner-card',
    backgroundColor: 'white',
    width: '240px',
    minHeight: '210px',
    marginTop: '1px',
    marginBottom: '1px',
    marginLeft: '1px',
    marginRight: 15,
    overflow: 'hidden',
    display: 'block',
    cursor: cursor,
    borderRadius: '2%',
    transition: 'box-shadow 0.3s ease, opacity 0.5s',

    '&:hover': !cursor
      ? {
          boxShadow: '0px 4px 6px rgba(0,0,0,0.4)',
        }
      : {},

    [theme.media.tablet]: {
      margin: '0 20px',
    },
  }
})

const ImageComponent = styled('img')({
  width: '100%',
  height: '130px',
  display: 'block',
  userSelect: 'none',
  userDrag: 'none',
})

const InnerText = styled('div')({
  display: 'table-cell',
  verticalAlign: 'middle',
})
const TextComponent = styled(Text)(({ theme }) => {
  return {
    display: 'table',
    width: '100%',
    backgroundColor: '#fff',
    color: theme.colors.text,
    padding: '15px',
    minHeight: '120px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
})

function ButtonCard({ title, image, target }) {
  if (image.src) {
    return (
      <ProgressiveImage src={image.src}>
        {(src, loading) => (
          <CardWrapper
            loading={loading}
            draggable="false"
            href={target}
            {...(!target ? { cursor: 'default' } : {})}
          >
            <ImageComponent src={src} alt={image.alt} />
            <TextComponent tag="h2" size="typo3">
              <InnerText>{title}</InnerText>
            </TextComponent>
          </CardWrapper>
        )}
      </ProgressiveImage>
    )
  } else {
    return (
      <CardWrapper
        draggable="false"
        href={target}
        {...(!target ? { cursor: 'default' } : {})}
      >
        <TextComponent tag="h2" size="typo5">
          <InnerText>{title}</InnerText>
        </TextComponent>
      </CardWrapper>
    )
  }
}

ButtonCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  target: PropTypes.string,
}

const animRightArrow = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(5px) }
  100% { transform: translateX(0) }
`

const animLeftArrow = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(-5px) }
  100% { transform: translateX(0) }
`

const Wrapper = styled('div')(({ prev, color }) => {
  return {
    label: 'NavigationBannerArrow',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    ...(color ? { color } : ''),
    borderTopLeftRadius: prev ? 3 : 0,
    borderBottomLeftRadius: prev ? 3 : 0,
    borderTopRightRadius: prev ? 0 : 3,
    borderBottomRightRadius: prev ? 0 : 3,
    position: 'absolute',
    top: '10px',
    bottom: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
    ...(prev ? { left: '-30px' } : { right: '-30px' }),
    div: {
      transition: 'transform 0.2s',
    },
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    ':active div, :focus div': {
      animation: `${prev ? animLeftArrow : animRightArrow} 0.2s`,
    },
  }
})

const StyledIcon = styled(Icon)({
  display: 'block',
  width: '100%',
})

function SliderArrow({ onClick, prev, color }) {
  return (
    <Wrapper onClick={onClick} prev={prev} color={color}>
      <StyledIcon size={24} name={prev ? 'left' : 'right'} />
    </Wrapper>
  )
}

const SliderWrapper = styled('div')(({ theme, colorIndex }) => {
  return {
    paddingBottom: '50px',
    '.slick-list': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    '& .slick-slider .slick-dots li': {
      margin: 0,
      'button:before': {
        color: theme.colors[colorIndex] || colorIndex,
      },
    },

    [theme.media.tablet]: {
      marginLeft: 0,
      marginRight: 0,
    },
  }
})

const StyledDashboardBanner = styled(DashboardBanner)({
  textAlign: 'center',
  paddingBottom: '30px',
})
/**
 * NavigationBanner
 */

class NavigationBanner extends React.Component {
  render() {
    let {
      cards,
      backgroundColor,
      title,
      arrowDotsColor,
      action,
      colorIndex,
    } = this.props
    // backgroundColor = backgroundColor || '#205272';

    const sliderSettings = {
      dots: true,
      speed: 300,
      slidesToShow: Math.min(4, cards.length),
      nextArrow: <SliderArrow color={arrowDotsColor} next />,
      prevArrow: <SliderArrow color={arrowDotsColor} prev />,
      variableWidth: cards.length < 4,
      responsive: [
        {
          breakpoint: breakpoints.desktop - 1,
          settings: {
            slidesToShow: Math.min(3, cards.length),
            arrows: false,
            variableWidth: true,
          },
        },
        {
          breakpoint: breakpoints.laptop - 1,
          settings: {
            slidesToShow: Math.min(2, cards.length),
            arrows: false,
            variableWidth: true,
          },
        },
        {
          breakpoint: breakpoints.tablet - 1,
          settings: {
            slidesToShow: Math.min(2, cards.length),
            arrows: false,
            variableWidth: true,
          },
        },
        {
          breakpoint: breakpoints.mobile - 1,
          settings: {
            slidesToShow: Math.min(1, cards.length),
            arrows: false,
            variableWidth: true,
          },
        },
      ],
    }

    colorIndex = colorIndex
      ? colorIndex
      : Color(backgroundColor).isDark()
      ? 'white'
      : 'text'

    return (
      <StyledDashboardBanner
        backgroundColor={backgroundColor}
        title={title}
        colorIndex={colorIndex}
      >
        <SliderWrapper colorIndex={colorIndex}>
          <SlickSlider {...sliderSettings}>
            {cards.map((card, i) => (
              <ButtonCard {...card} key={i} />
            ))}
          </SlickSlider>
        </SliderWrapper>
        {action ? action : null}
      </StyledDashboardBanner>
    )
  }
}

NavigationBanner.propTypes = {
  /**
   * Title, can be a string or a React Element.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Array of objects which will be passed to ButtonCard as props.
   */
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * Call to action as a React Element.
   */
  action: PropTypes.element,

  /**
   * Set a color for the Background color. By default, the color is light gray.
   */
  backgroundColor: PropTypes.string,
}

NavigationBanner.defaultProps = {
  cards: [],
}

export default NavigationBanner

const CardSkeleton = styled('div')(({ theme }) => ({
  ...theme.skeletonWave,
  width: '240px',
  minHeight: '210px',
  marginTop: '1px',
  marginBottom: '1px',
  marginLeft: '1px',
  marginRight: '10px',
}))

const WrapperSkeleton = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 50,
})

const TextSkeleton = styled('div')(({ theme }) => ({
  ...theme.skeletonWave,
  height: 40,
  width: 300,
  margin: '0 auto',
}))

export const NavigationBannerSkeleton = () => {
  return (
    <StyledDashboardBanner backgroundColor={'#fafafa'} title={<TextSkeleton />}>
      <WrapperSkeleton>
        {times(4, c => (
          <CardSkeleton key={c} />
        ))}
      </WrapperSkeleton>
    </StyledDashboardBanner>
  )
}
