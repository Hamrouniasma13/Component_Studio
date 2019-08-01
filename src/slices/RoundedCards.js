import React from 'react'
import PropTypes from 'prop-types'
import Slick from 'react-slick'
import styled from '@emotion/styled'

import { breakpoints } from '../theme/media'

import Button from '../components/Button'
import Container from '../components/Container'
import Text from '../components/Text'
import Icon from '../components/Icon'

const CardWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1px 0',
  width: '290px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1px', // space for shadow
  alignItems: 'center',
  padding: '0 20px 40px',
  minHeight: '540px',
  marginTop: '31px', // space for image
  marginLeft: '15px',
  color: theme.colors.text,

  [theme.media.tablet]: {
    width: '315px',
    marginLeft: '1px',
    marginRight: '15px',
    marginTop: '25px' // space for image,
  },

  [theme.media.laptop]: {
    width: '350px'
  }
}))

const Image = styled('img')(({ theme }) => ({
  width: '110px',
  height: '110px',
  borderRadius: '100px',
  border: '2px solid #fff',
  display: 'block',
  position: 'relative',
  top: '-31px',

  [theme.media.tablet]: {
    width: '200px',
    height: '200px',
    top: '-25px'
  }
}))

const Title = styled(Text)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '60px',

  [theme.media.tablet]: {
    marginBottom: '20px'
  }
}))

const StyledText = styled(Text)({
  marginBottom: '40px',
  flex: 1
})

function Card({ image, title, text, action }) {
  return (
    <CardWrapper>
      <Image src={image.src} alt={image.alt} />
      <Title size="typo3">{title}</Title>
      <StyledText>{text}</StyledText>
      {action ? (
        <div>
          <Button href={action.url} color="white">
            {action.label}
          </Button>
        </div>
      ) : null}
    </CardWrapper>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}

const IconWrapper = styled('div')(({ prev }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  ...(prev ? { left: '-50px' } : { right: '-50px' }),
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1px 0',
  backgroundColor: 'white',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

function SliderArrow({ prev, onClick }) {
  return (
    <IconWrapper prev={prev} onClick={onClick}>
      <Icon size={32} name={prev ? 'left' : 'right'} />
    </IconWrapper>
  )
}

const Background = styled('div')({
  padding: '30px 0',
  background: 'white'
})

const Cards = styled('div')(({ theme }) => ({
  margin: '20px -15px',
  paddingBottom: '30px', // Space for dots

  [theme.media.tablet]: {
    margin: '30px 0'
  }
}))

const sliderSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  nextArrow: <SliderArrow next />,
  prevArrow: <SliderArrow prev />,
  responsive: [
    {
      breakpoint: breakpoints.desktop - 1,
      settings: {
        slidesToShow: 2,
        arrows: false,
        variableWidth: true
      }
    },
    {
      breakpoint: breakpoints.laptop - 1,
      settings: {
        slidesToShow: 2,
        variableWidth: true,
        arrows: false
      }
    },
    {
      breakpoint: breakpoints.tablet - 1,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        arrows: false
      }
    }
  ]
}

const Action = styled('div')({
  textAlign: 'center'
})

function RoundedCards({ title, cards, action }) {
  return (
    <Background>
      <Container>
        <Text size="typo2">{title}/</Text>
        <Cards>
          <Slick {...sliderSettings}>
            {cards.map((card, i) => (
              <Card {...card} key={i} />
            ))}
          </Slick>
        </Cards>
        {action ? (
          <Action>
            <Button href={action.url}>{action.label}</Button>
          </Action>
        ) : null}
      </Container>
    </Background>
  )
}

RoundedCards.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}

RoundedCards.defaultProps = {
  cards: []
}

export default RoundedCards
