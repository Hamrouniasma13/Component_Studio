import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled('div')({
  flex: '1 1 25%',
  backgroundColor: '#fff',
  padding: 40,
  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
  border: '1px solid #f3f3f3'
})

const Title = styled('div')({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.56,
  marginBottom: 48
})

const Items = styled('ul')({
  marginBottom: 0,
  listStyleType: 'none',
  paddingLeft: 0
})

const Item = styled('li')({
  '&:not(:last-child)': {
    marginBottom: 20
  }
})

const Label = styled('span')({
  display: 'block',
  fontSize: 16,
  lineHeight: 1.56,
  marginBottom: 10
})

const Value = styled('span')(({ theme, color }) => ({
  color: theme.colors[color] || '#333',
  display: 'block',
  fontSize: 36,
  fontWeight: 600,
  letterSpacing: '1.2px'
}))

function Distribution({ title, items }) {
  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      {items.length > 0 ? (
        <Items>
          {items.map(({ value, label, color }, i) => (
            <Item key={i}>
              <Label>{label}</Label>
              <Value color={color}>{value}</Value>
            </Item>
          ))}
        </Items>
      ) : null}
    </Wrapper>
  )
}

Distribution.propTypes = {
  /**
   * Title
   */
  title: PropTypes.string,

  /**
   * Array of props used for each items
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string
    })
  )
}

Distribution.defaultProps = {
  items: []
}

export default Distribution
