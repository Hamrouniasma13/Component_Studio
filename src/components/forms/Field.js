import React from 'react'
import styled from '@emotion/styled'
import { useMedia } from 'react-use'

import { breakpoints } from '../../theme/media'
import Icon from '../../components/Icon'

const Wrapper = styled('div')(({ inline }) => ({
  display: 'flex',
  flexDirection: inline ? 'column' : 'row',
  marginBottom: 20,
}))

const CellFix = styled('div')(({ theme }) => ({
  width: '100%',
  minWidth: '240px',
  [theme.media.tablet]: {
    maxWidth: '330px',
  },
}))

const LabelCell = styled('div')(({ inline }) => ({
  width: 200,
  paddingRight: 40,
  ...(inline
    ? {
        textAlign: 'left',
        paddingBottom: 10,
      }
    : {
        textAlign: 'right',
        paddingTop: 10,
      }),
}))

const Label = styled('label')({
  width: 150,
})

const ErrorCell = styled('div')(({ theme, inline }) => ({
  paddingTop: inline ? 10 : 'inherit',
  color: theme.colors.error,
  display: 'flex',
  flexDirection: 'row',
  ...(!inline && { paddingTop: 8 }),
}))

const StyledIcon = styled(Icon)(({ theme, inline }) => ({
  label: 'icon',
  display: 'block',
  margin: inline ? '0 10px 0 0' : '0 10px 0 20px',
  '> use': {
    fill: theme.colors.error, // todo: remove t his line once <Icon /> can set stroke and fill color under <g/> and <use />
  },
}))

const ErrorMessage = ({ message, inline }) => (
  <ErrorCell inline={inline}>
    <StyledIcon inline={inline} color="error" name="info" size="20" />
    <span>{message}</span>
  </ErrorCell>
)

const Field = props => {
  const {
    inline,
    property,
    name,
    required,
    error,
    children,
    onChange,
    onBlur,
    value,
    // uiProperty,
    childrenProps,
  } = props

  const newProps = {
    name,
    error: !!error,
    value,
    onChange,
    onBlur,
    ...(childrenProps ? childrenProps : {}),
  }
  const isMobile = useMedia(`(max-width: ${breakpoints.tablet}px)`)

  return (
    <Wrapper inline={inline || isMobile}>
      <LabelCell
        inline={inline || isMobile}
        vertical_align={childrenProps.vertical_align}
      >
        <Label htmlFor={name}>
          {property.title}
          {required ? '*' : ''}
        </Label>
      </LabelCell>
      <CellFix>
        {React.Children.map(
          children,
          child => child && React.cloneElement(child, newProps)
        )}
      </CellFix>
      {error ? (
        <ErrorMessage inline={inline || isMobile} message={error} />
      ) : null}
    </Wrapper>
  )
}

export default Field
