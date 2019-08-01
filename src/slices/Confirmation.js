/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React, { useContext } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Text from '../components/Text'
import PropTypes from 'prop-types'

const StyledContainer = ({ children, ...rest }) => {
  return (
    <Container
      css={{
        textAlign: 'center',
        padding: '70px 25px',
      }}
      {...rest}
    >
      {children}
    </Container>
  )
}

const Confirmation = ({ image, title, subtitle, leftAction, rightAction }) => {
  const theme = useContext(ThemeContext)

  const Image = React.isValidElement(image) ? image : undefined

  return (
    <StyledContainer theme={theme}>
      {Image ? (
        Image
      ) : (
        <img
          css={{
            marginBottom: 40,
            width: 70,
            height: 70,
            [theme.media.tablet]: {
              width: 120,
              height: 120,
            },
          }}
          src={image.url}
          alt={image.alt}
        />
      )}

      {title && <Text.h2 css={{ marginBottom: 20 }}>{title}</Text.h2>}
      {subtitle ? <Text.p css={{ marginBottom: 50 }}>{subtitle}</Text.p> : null}
      <div>
        {leftAction && (
          <Button
            css={{
              marginRight: 20,
              marginBottom: 20,
              [theme.media.tablet]: { marginBottom: 0 },
            }}
            href={leftAction.url && leftAction.url}
            onClick={leftAction.onClick}
          >
            {leftAction.label}
          </Button>
        )}
        {rightAction && (
          <Button
            ghost
            href={rightAction.url && rightAction.url}
            onClick={rightAction.onClick}
          >
            {rightAction.label}
          </Button>
        )}
      </div>
    </StyledContainer>
  )
}

Confirmation.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    }),
  ]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  leftAction: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  rightAction: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
}

Confirmation.defaultProps = {
  image: {
    url: '',
    alt: '',
  },
  title: '',
  subtitle: '',
  leftAction: null,
  rightAction: null,
}

export default Confirmation
