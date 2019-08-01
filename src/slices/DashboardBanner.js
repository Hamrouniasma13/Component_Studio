import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Color from 'color'

import Container from '../components/Container'
import Text from '../components/Text'

const NavWrapper = styled('div')(({ theme, background }) => ({
  label: 'DashboardBanner',
  backgroundColor: background ? background : theme.colors.primary,
  paddingTop: 40,
  paddingBottom: 50
}))

const Title = styled(Text.h1)(({ theme, color }) => ({
  color: theme.colors[color] || color,
  textAlign: 'center',
  marginBottom: '40px',
  textTransform: 'uppercase'
}))

const DashboardBanner = ({
  backgroundColor,
  colorIndex,
  title,
  children,
  className
}) => {
  const color = colorIndex
    ? colorIndex
    : backgroundColor &&
      backgroundColor.length > 3 &&
      Color(backgroundColor).isDark()
    ? 'white'
    : 'text'

  return (
    <NavWrapper className={className} background={backgroundColor}>
      <Container>
        <Title color={color}>{title}</Title>
        {children}
      </Container>
    </NavWrapper>
  )
}

DashboardBanner.propTypes = {
  /**
   * Set a color for the Background color. By default, the color is light gray.
   */
  backgroundColor: PropTypes.string,
  /**
   * Title, can be a string or a React Element.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

DashboardBanner.defaultProps = {}

export default DashboardBanner
