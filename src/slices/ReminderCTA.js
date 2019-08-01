import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'

const Image = styled('div')(({ background, theme, colorIndex }) => ({
  borderRadius: '4px',
  padding: '30px 20px',
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box',
  color: theme.colors[colorIndex],

  [theme.media.tablet]: {
    padding: '30px'
  }
}))

const Title = styled(Text)({
  '&:not(:last-child)': {
    marginBottom: '15px'
  }
})

const Content = styled(Text)({
  maxWidth: '360px',
  lineHeight: '1.56em',

  '&:not(:last-child)': {
    marginBottom: '30px'
  }
})

function ReminderCTA({ background, title, content, action, dark }) {
  const colorIndex = dark ? 'white' : 'text'

  return (
    <Container>
      <Image background={background} colorIndex={colorIndex}>
        {title && (
          <Title size="typo3" tag="span">
            {title}
          </Title>
        )}
        {content && <Content>{content}</Content>}
        {action && (
          <Button href={action.url} color="white">
            {action.label}
          </Button>
        )}
      </Image>
    </Container>
  )
}

ReminderCTA.propTypes = {
  /**
   * Image, used as background
   */
  background: PropTypes.string.isRequired,

  /**
   * Title
   */
  title: PropTypes.string,

  /**
   * Content, can be element(s)
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),

  /**
   * Button
   */
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * Tell us if the image is dark or not
   */
  dark: PropTypes.bool
}

ReminderCTA.defaultProps = {
  dark: false
}

export default ReminderCTA
