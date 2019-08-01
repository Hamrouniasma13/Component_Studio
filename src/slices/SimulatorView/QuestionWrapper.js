import React from 'react'
import styled from '@emotion/styled'
import Text from './../../components/Text'

const Wrapper = styled('div')({
  position: 'relative',
  marginBottom: '50px',
  paddingLeft: '60px'
})
const NumberWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '0',
  top: '-5px',
  backgroundColor: 'white',
  borderRadius: '50%',
  border: `1px solid ${theme.colors.lightGray}`,
  width: '40px',
  height: '40px',
  lineHeight: '41px',
  textAlign: 'center',
  fontWeight: 600
}))

const Number = styled(Text)(({ theme }) => ({
  label: 'Number',
  color: theme.colors.darkGray
}))

const Line = styled('div')(({ theme, hasNext }) => ({
  position: 'absolute',
  top: '0',
  bottom: hasNext ? '-70px' : '100%',
  width: '1px',
  background: theme.colors.gray,
  transition: 'bottom 0.6s',
  left: '19px'
}))

const QuestionWrapper = ({ number, children, hasNext }) => {
  return (
    <Wrapper>
      <Line hasNext={hasNext} />
      <NumberWrapper>
        <Number size="typo2">{number}</Number>
      </NumberWrapper>
      {children}
    </Wrapper>
  )
}

export default QuestionWrapper
