import React, { useState } from 'react'
import styled from '@emotion/styled'
import Input from './Input'

const range = (number, min, max) =>
  Math.min(Math.max(parseInt(number), min), max)

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'left',
})

const OuterInput = styled('div')({
  width: 80,
  marginRight: 20,
})

const StyledInput = styled(Input)({
  '-moz-appearance': 'textfield',
  textAlign: 'center',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0',
  },
})

const InputField = props => {
  return (
    <OuterInput>
      <StyledInput {...props} />
    </OuterInput>
  )
}

const formatType = (val, type) => {
  if (type === 'day') return range(val, 0, 31)
  if (type === 'month') return range(val, 0, 12)
  if (type === 'year') return range(val, 0, new Date().getFullYear())
}

function InputBirthdate({
  value,
  onChange,
  onBlur,
  name,
  error,
  disabled,
  ...rest
}) {
  const [date, setDate] = useState({
    day: (value && value.getDate()) || '',
    month: (value && value.getMonth() + 1) || '',
    year: value && value.getFullYear(),
  })

  // Check if values are filled then trigger the onChange based on the given value
  const updateThenChange = values => {
    const valuesKeys = Object.keys(date)
    const length = valuesKeys.map(d => date[d]).filter(d => d).length

    if (length === valuesKeys.length) {
      const newDate = new Date(values.year, values.month, values.day)
      onChange({ type: 'birthdate', name, value: newDate })
    }
  }

  const handleChange = type => e => {
    const val = e.target.value || '0'

    setDate({ ...date, [type]: formatType(val, type) })

    // update the date with the new value and reuse it instead of using the date state
    const values = { ...date, [type]: val }
    updateThenChange(values)
  }

  const handleBlur = () => {
    updateThenChange(date)
    onBlur({ type: 'birthdate', name })
  }

  return (
    <Wrapper {...rest}>
      <InputField
        error={error}
        disabled={disabled}
        name={name + '--day'}
        onBlur={handleBlur}
        onChange={handleChange('day')}
        value={date.day}
        type="number"
        placeholder={'day'}
      />
      <InputField
        error={error}
        disabled={disabled}
        name={name + '--month'}
        onBlur={handleBlur}
        onChange={handleChange('month')}
        value={date.month}
        type="number"
        placeholder={'month'}
      />
      <InputField
        error={error}
        disabled={disabled}
        name={name + '--year'}
        onBlur={handleBlur}
        onChange={handleChange('year')}
        value={date.year}
        type="number"
        placeholder={'year'}
      />
    </Wrapper>
  )
}

export default InputBirthdate
