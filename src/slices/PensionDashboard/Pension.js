import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import DataTable from '../../components/DataTable'
import Link from '../../components/Link'

const Wrapper = styled('div')({
  marginRight: 40,
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
  padding: 50,
  border: '1px solid #f3f3f3'
})

const Title = styled('div')({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.56,
  marginBottom: 30,
  color: '#333'
})

const Row = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const Left = styled('div')({
  marginRight: 60,
  flex: '1 1 30%'
})

const Label = styled('span')({
  display: 'block',
  fontSize: 16,
  lineHeight: 1.56,
  color: '#333'
})

const Value = styled('span')({
  display: 'block',
  fontSize: 36,
  fontWeight: 600,
  letterSpacing: '1.2px',
  whiteSpace: 'nowrap'
})

const Right = styled('div')({
  flex: '1 1 70%'
})

const LinkWrapper = styled('div')({
  marginTop: 40,
  textAlign: 'right'
})

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.colors.primary,
  textTransform: 'uppercase',
  fontSize: 13,
  fontWeight: 600
}))

function Pension({ title, label, value, details, link }) {
  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      <Row>
        {value ? (
          <Left>
            <Label>{label}</Label>
            <Value>{value}</Value>
          </Left>
        ) : null}
        {details.length > 0 ? (
          <Right>
            <DataTable rows={details} />
          </Right>
        ) : null}
      </Row>
      {link ? (
        <LinkWrapper>
          <StyledLink href={link.url}>{link.label}</StyledLink>
        </LinkWrapper>
      ) : null}
    </Wrapper>
  )
}

Pension.propTypes = {
  /**
   * Title
   */
  title: PropTypes.string,

  /**
   * Label above the value
   */
  label: PropTypes.string,

  /**
   * Main value, display on the left
   */
  value: PropTypes.any,

  /**
   * Array of props to fill the table
   */
  details: DataTable.propTypes.rows,

  /**
   * props for the links
   */
  link: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })
}

Pension.defaultProps = {
  details: []
}

export default Pension
