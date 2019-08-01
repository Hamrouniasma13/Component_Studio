import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Container from '../components/Container'
import Link from '../components/Link'
import Text from '../components/Text'

const Cover = styled(Link)(({ cover, to, theme }) => ({
  display: 'block',
  position: 'relative',
  height: '190px',
  width: '100%',
  backgroundImage: `url(${cover})`, // trick
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box',
  marginBottom: '20px',
  borderBottomLeftRadius: '10px',
  borderTopRightRadius: '10px',
  boxShadow: 'rgba(0,0,0,0.3) 1px 1px 15px 0px',
  ':last-child': {
    marginBottom: 0
  },

  [theme.media.tablet]: {
    height: '400px',
    marginBottom: '40px'
  },

  [theme.media.laptop]: {
    height: '290px',
    width: '290px'
  },

  [theme.media.desktop]: {
    height: '350px',
    width: '350px'
  },

  '&:hover .caption': to
    ? {
        paddingBottom: '30px',
        [theme.media.tablet]: {
          paddingBottom: '40px'
        }
      }
    : {}
}))

const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgba(51, 51, 51, 0.4)',
  borderBottomLeftRadius: '10px',
  color: theme.colors.white,
  padding: '20px',
  transition: 'padding-bottom 0.3s ease',
  willChange: 'padding-bottom',

  [theme.media.tablet]: {
    padding: '30px'
  }
}))

const CardTitleWrapper = styled(Text)({
  marginBottom: '5px'
})

const Card = ({ cover, title, text, target }) => {
  return (
    <Cover cover={cover} href={target}>
      <ContentWrapper className="caption">
        <CardTitleWrapper size="typo3" tag="h3">
          {title}
        </CardTitleWrapper>
        <Text>{text}</Text>
      </ContentWrapper>
    </Cover>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string
}

const Wrapper = styled('div')(({ theme }) => ({
  paddingTop: '50px',
  paddingBottom: '50px',

  [theme.media.tablet]: {
    paddingTop: '80px',
    paddingBottom: '80px'
  }
}))

const TitleWrapper = styled(Text)(({ theme }) => ({
  marginBottom: '40px',
  textAlign: 'center',

  [theme.media.tablet]: {
    marginBottom: '60px'
  }
}))

const CardsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  paddingLeft: '15px',
  paddingRight: '15px',

  [theme.media.tablet]: {
    paddingLeft: '30px',
    paddingRight: '30px'
  },

  [theme.media.laptop]: {
    flexDirection: 'row',
    padding: '0'
  }
}))

const Thumbnails = ({ title, cards }) => {
  return (
    <Wrapper>
      <Container>
        {title && <TitleWrapper size="typo1">{title}</TitleWrapper>}
        <CardsWrapper>
          {cards.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </CardsWrapper>
      </Container>
    </Wrapper>
  )
}

Thumbnails.propTypes = {
  /**
   * Optionnal title of this slice, element or string
   */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /**
   * Array of card that will be displayed
   */
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      target: PropTypes.string
    })
  ).isRequired
}

Thumbnails.defaultProps = {
  cards: []
}

export default Thumbnails
