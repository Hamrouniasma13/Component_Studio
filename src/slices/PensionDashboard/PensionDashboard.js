import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Container from '../../components/Container'
import Pension from './Pension'
import Distribution from './Distribution'

const Wrapper = styled('div')({
  paddingTop: 50,
  paddingBottom: 50
})

const Title = styled('div')({
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 50
})

const Row = styled('div')({
  display: 'flex'
})

function PensionDashboard({
  title,
  pensionTitle,
  inProgress,
  incomes,
  link,
  distributionTitle,
  distributionItems
}) {
  return (
    <Wrapper>
      <Container>
        {title ? <Title>{title}</Title> : null}
        <Row>
          <Pension
            title={pensionTitle}
            label={inProgress.label}
            value={inProgress.value}
            link={link}
            details={incomes}
          />
          <Distribution title={distributionTitle} items={distributionItems} />
        </Row>
      </Container>
    </Wrapper>
  )
}

PensionDashboard.propTypes = {
  /**
   * Slice title
   */
  title: PropTypes.string,

  /**
   * Title of the left part
   */
  pensionTitle: Pension.propTypes.title,

  /**
   * Main value of the slice
   */
  inProgress: PropTypes.shape({
    value: Pension.propTypes.value,
    label: Pension.propTypes.label
  }),

  /**
   * Array of properties for each table row
   */
  incomes: Pension.propTypes.details,

  /**
   * Properties of the label, below the table
   */
  link: Pension.propTypes.link,

  /**
   * Title of the right part
   */
  distributionTitle: Distribution.propTypes.title,

  /**
   * Array of label and value, display in the right part
   */
  distributionItems: Distribution.propTypes.items
}

PensionDashboard.defaultProps = {
  inProgress: {}
}

export default PensionDashboard
