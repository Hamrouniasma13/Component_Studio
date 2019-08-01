import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Link from './Link'
import Container from './Container'
import media from '../theme/media'

const CardWrapper = styled('div')({
  backgroundColor: 'white',
  width: '290px',
  boxShadow: 'rgba(0, 0, 0, 0.04) 0px 1px 10px 0px',
  margin: '0 auto 30px',
  borderRadius: '4px',
  border: '1px solid #fafafa',
  // textAlign: 'center',
  [media.tablet]: {
    width: '335px',
    margin: 0,
    '&:nth-of-type(2)': {
      marginLeft: '20px'
    }
  },
  [media.desktop]: {
    margin: '0',
    width: '540px',
    '&:nth-of-type(2)': {
      marginLeft: '30px'
    }
  }
})

const getCardLink = url =>
  styled(url ? Link : 'div')({
    cursor: url ? 'pointer' : 'auto',
    [media.desktop]: {
      display: 'flex'
    }
  })

const PictureWrapper = styled('div')({
  [media.desktop]: {
    minWidth: '260px'
  }
})

const Picture = styled('img')({
  maxWidth: '100%'
})

const ContentWrapper = styled('div')({
  padding: '20px',
  [media.desktop]: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '300px'
  }
})

const TitleWrapper = styled('div')({
  marginBottom: '15px',
  fontSize: '18px',
  fontWeight: 'bold'
})

const TextWrapper = styled('div')({
  '&:not(:last-child)': {
    marginBottom: '20px'
  },
  fontSize: '18px',
  lineHeight: '1.56',
  [media.desktop]: {
    flex: 1
  }
})

const ActionWrapper = styled('div')({})

const FakeAction = styled('div')({
  textTransform: 'uppercase',
  fontSize: '13px',
  fontWeight: 'bold',
  letterSpacing: '0.9px',
  color: '#00008f'
})

const Card = ({ image, title, text, action }) => {
  const CardLink = getCardLink(action.url)

  return (
    <CardWrapper>
      <CardLink href={action.url}>
        <PictureWrapper>
          <Picture src={image.src} alt={image.alt} />
        </PictureWrapper>
        <ContentWrapper>
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper>{text}</TextWrapper>
          {action.label ? (
            <ActionWrapper>
              <FakeAction>{action.label}</FakeAction>
            </ActionWrapper>
          ) : null}
        </ContentWrapper>
      </CardLink>
    </CardWrapper>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.element.isRequired,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })
}

Card.defaultProps = {
  image: {},
  action: {}
}

const CardsWrapper = styled('div')({
  [media.desktop]: { marginBottom: '30px' }
})

const CardsContainer = styled('div')({
  [media.tablet]: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
})

const TwoCards = ({ cards }) => {
  return (
    <CardsWrapper>
      <Container>
        <CardsContainer>
          {cards.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </CardsContainer>
      </Container>
    </CardsWrapper>
  )
}

TwoCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

TwoCards.defaultProps = {
  cards: []
}

export default TwoCards
