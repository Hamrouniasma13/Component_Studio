import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../theme/media'
import SimpleButton from './SimpleButton'

const Wrapper = styled('div')({
  border: '1px solid #cccccc',
  borderRadius: 1,
  boxShadow: '#efefef 0px 1px 8px 0px',
  padding: 10,
  backgroundColor: '#fff',
  marginBottom: 20,
  [media.tablet]: {
    marginBottom: 40
  }
})

const Title = styled('div')(({ theme: { colors } }) => ({
  color: colors.primary,
  padding: '6px 10px 15px',
  borderBottom: '1px solid #e5e5e5',
  fontSize: '24px',
  fontWeight: 'bold',
  [media.tablet]: {
    fontWeight: 'normal'
  }
}))

const ActionWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-around'
})

function SliceSection({ title, actions, children }) {
  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      <div>{children}</div>
      {actions.length > 0 ? (
        <ActionWrapper>
          {actions.map(({ url, label }, i) => (
            <SimpleButton key={i} href={url}>
              {label}
            </SimpleButton>
          ))}
        </ActionWrapper>
      ) : null}
    </Wrapper>
  )
}

SliceSection.propTypes = {
  /**
   * Title of the section (optionnal)
   */
  title: PropTypes.string,

  /**
   * Whatever you want
   */
  children: PropTypes.element,

  /**
   * Action are display at the bottom of the component, evenly dispersed
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  )
}

SliceSection.defaultProps = {
  actions: []
}

export default SliceSection
