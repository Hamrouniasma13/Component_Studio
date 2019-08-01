import React from 'react'
import styled from '@emotion/styled'

import InputText from '../../components/InputText'

import InfoTips from './InfoTips'
import QuestionHeading from './QuestionHeading'

const InputWrapper = styled('div')({
  label: 'InputWrapper',
  display: 'flex',
  alignItems: 'center'
})

const QuestionInputText = styled(InputText)({
  minWidth: 180
})

const SuffixWrapper = styled('div')({
  fontWeight: 'bold',
  fontSize: '28px',
  paddingLeft: '16px',
  lineHeight: '22px'
})

const QuestionInput = ({
  label,
  name,
  info,
  value,
  type,
  step,
  onChange,
  suffix
}) => (
  <>
    <QuestionHeading label={label} />
    <InputWrapper>
      <QuestionInputText
        value={value}
        id={name}
        type={type}
        step={step}
        onChange={value => {
          onChange({ name, value })
        }}
      />
      {suffix ? <SuffixWrapper>{suffix}</SuffixWrapper> : null}
    </InputWrapper>

    {info ? <InfoTips label={info.label} link={info.link} /> : null}
  </>
)

export default QuestionInput
