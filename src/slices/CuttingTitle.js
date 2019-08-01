import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Container from '../components/Container'
import Button from '../components/Button'
import Text from '../components/Text'

const Wrapper = styled('div')(({ theme, background }) => ({
  paddingTop: '20px',
  paddingBottom: '20px',
  background: background || theme.colors.primary,

  [theme.media.tablet]: {
    paddingTop: '80px',
    paddingBottom: '80px'
  },

  [theme.media.laptop]: {
    paddingTop: '60px',
    paddingBottom: '60px'
  }
}))

const ContentContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',

  [theme.media.tablet]: {
    padding: '0 30px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}))

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '320px',
  marginBottom: '30px',

  [theme.media.tablet]: {
    marginBottom: 0
    // width: 'auto'
  },

  [theme.media.laptop]: {
    marginLeft: '20px'
  },

  [theme.media.desktop]: {
    marginLeft: '40px'
  }
}))

const Title = styled(Text)(({ theme }) => ({
  color: '#fff',
  marginBottom: '40px',

  [theme.media.desktop]: {
    marginBottom: '50px'
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',

  [theme.media.tablet]: {
    width: 'auto'
  }
}))

export function CuttingTitle({ title, background, image, action }) {
  return (
    <Wrapper background={background}>
      <Container>
        <ContentContainer>
          {image ? <Image {...image} /> : null}
          <div>
            <Title size="typo1" tag="h1">
              {title}
            </Title>
            {action ? (
              <div>
                <StyledButton ghost href={action.url}>
                  {action.label}
                </StyledButton>
              </div>
            ) : null}
          </div>
        </ContentContainer>
      </Container>
    </Wrapper>
  )
}

CuttingTitle.propTypes = {
  /**
   * Title
   */
  title: PropTypes.string.isRequired,

  /**
   * Background color, default to theme.colors.primary
   */
  background: PropTypes.string,

  /**
   * Image on the right of the component
   */
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),

  /**
   * Action at the bottom of the component
   */
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}

export default CuttingTitle
