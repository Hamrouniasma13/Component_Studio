import React from 'react'
import styled from '@emotion/styled'

import Text from '../../components/Text'

const StyledHeading = styled(Text)({
  marginBottom: '20px'
})
const QuestionHeading = ({ label }) => (
  <StyledHeading tag="h2">{label}</StyledHeading>
)

export default QuestionHeading
