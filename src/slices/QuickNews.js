import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Slick from 'react-slick'
import { breakpoints } from '../theme/media'

import Container from '../components/Container'
import Button from '../components/Button'
import Text from '../components/Text'
import Link from '../components/Link'

function getCategory(category) {
  if (category && category.url && category.label)
    return (
      <StyledLink href={category.url}>
        <StyledCategory tag="span" size="typo6">
          {category.label}
        </StyledCategory>
      </StyledLink>
    )
  if (category && category.label)
    return (
      <StyledCategory tag="span" size="typo6">
        {category.label}
      </StyledCategory>
    )
  if (category)
    return (
      <StyledCategory tag="span" size="typo6">
        {category}
      </StyledCategory>
    )
  return null
}

const NewsWrapper = styled('div')(({ theme, lastItem }) => ({
  width: '270px',
  marginRight: lastItem ? 0 : 15,
  marginBottom: 20,

  [theme.media.tablet]: {
    marginRight: lastItem ? 0 : 30
  },

  [theme.media.laptop]: {
    width: '290px'
  },

  [theme.media.desktop]: {
    width: '342px',
    marginRight: lastItem ? 0 : 40
  }
}))

const NewsTitle = styled(Text)({
  marginBottom: '20px',
  '&:hover': {
    textDecoration: 'underline'
  }
})

const StyledCategory = styled(Text)({
  display: 'inline-block',
  textTransform: 'uppercase',
  marginBottom: '10px'
})
const StyledImage = styled('img')({
  width: '100%',
  marginBottom: 15
})

const StyledLink = styled(Link)({})

function News({ title, content, url, image, category, lastItem }) {
  return (
    <NewsWrapper lastItem={lastItem}>
      {image && image.url && (
        <Link href={url}>
          <StyledImage src={image.url} alt={image.alt} />
        </Link>
      )}
      {getCategory(category)}

      <Link href={url}>
        <NewsTitle tag="h4" size="typo2" className="news-title">
          {title}
        </NewsTitle>
      </Link>
      <Text tag="p">{content}</Text>
    </NewsWrapper>
  )
}

News.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  ]),

  /**
   * News title
   */
  title: PropTypes.string.isRequired,

  /**
   * News small content
   */
  content: PropTypes.string.isRequired,

  /**
   * News url
   */
  url: PropTypes.string.isRequired
}

const Wrapper = styled('div')(({ theme }) => ({
  paddingTop: '40px',
  paddingBottom: '60px',

  [theme.media.laptop]: {
    paddingTop: '60px',
    paddingBottom: '50px'
  }
}))

const TitleWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,
  [theme.media.tablet]: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 60
  }
}))

const Title = styled(Text)(({ theme }) => ({
  marginBottom: 15,
  [theme.media.tablet]: {
    marginBottom: 0
  }
}))

const SlickWrapper = styled('div')(({ theme }) => ({
  paddingBottom: '65px',

  [theme.media.tablet]: {
    margin: 0,
    marginBottom: '15px'
  }
}))

const sliderSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: breakpoints.laptop - 1,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: breakpoints.tablet - 1,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

function QuickNews({ title, news, action }) {
  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Title tag="h3" size="typo1">
            {title}
          </Title>
          {action && action.url ? (
            <Button href={action.url} color="secondary">
              {action.label}
            </Button>
          ) : null}
        </TitleWrapper>

        <SlickWrapper>
          <Slick {...sliderSettings}>
            {news &&
              news.map((news, i) => (
                <News {...news} key={i} lastItem={(i + 1) % 3 === 0} />
              ))}
          </Slick>
        </SlickWrapper>
      </Container>
    </Wrapper>
  )
}

QuickNews.propTypes = {
  /**
   * Component title
   */
  title: PropTypes.string.isRequired,

  /**
   * Array of news
   */
  news: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * Action
   */
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}

QuickNews.defaultProps = {
  news: []
}

export default QuickNews
