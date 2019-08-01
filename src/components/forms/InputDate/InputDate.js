/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core'
import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { DateUtils } from 'react-day-picker'

import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'

import { withTheme } from 'emotion-theming'

import DayPickerWrapper from './DayPickerWrapper'
import Icon from '../../Icon'
// import Input from '../Input'

const Wrapper = styled('div')(({ theme }) => ({
  label: 'Wrapper',
  position: 'relative',
  width: '100%',
  minWidth: '240px',
  [theme.media.tablet]: {
    maxWidth: '330px',
  },
}))

const StyledIcon = styled(Icon)(({ theme, disabled }) => ({
  ...(disabled ? { color: theme.colors.lightGray } : {}),
  display: 'block',
  position: 'absolute',
  top: '10px',
  right: '15px',
  cursor: 'pointer',
}))

// from example http://react-day-picker.js.org/examples/elements-year-navigation
const currentYear = new Date().getFullYear()
const fromMonth = new Date(currentYear, 0)
const toMonth = new Date(currentYear + 10, 11)

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths()

  const years = []
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i)
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form
    onChange(new Date(year.value, month.value))
  }

  return (
    <div className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale })
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale })
}

function InputDate({
  theme,
  format = 'DD/MM/YYYY',
  name,
  onChange,
  onBlur,
  error,
  disabled,
  big,
  placeholder = format,
  ...rest
}) {
  const [day, setDay] = useState(undefined)
  const [month, setMonth] = useState(undefined)

  const inputStyle = {
    width: '100%',
    height: '45px',
    border: `1px solid ${error ? theme.colors.error : theme.colors.lightGray}`,
    borderRadius: '3px',
    padding: '0 15px',
    fontSize: '16px',
    color: disabled ? theme.colors.darkGray : theme.colors.text,
    outline: 'none',
    '::placeholder': {
      color: theme.colors.darkGray,
    },
    '&[disabled]': {
      backgroundColor: theme.colors.lighterGray,
      color: theme.colors.gray,
    },
    [theme.media.tablet]: {
      height: big ? '60px' : '45px',
    },
  }
  // We declare the css here because its not possible to stack withTheme and forwardRef
  // https://emotion.sh/docs/class-names
  const containerStyle = {
    display: 'block',
    '[class="DayPickerInput-Overlay"]': {
      left: 'inherit',
      right: 0,
    },
  }

  let pickerRef = useRef()
  const handleClick = () => !disabled && pickerRef.current.display()

  const inputProps = {
    disabled,
  }
  return (
    <Wrapper>
      <ClassNames>
        {({ css, cx }) => {
          const cssInput = css(inputStyle)
          const cssContainer = css(containerStyle)

          return (
            <DayPickerWrapper
              wrapperClassName={cssContainer}
              {...rest}
              ref={pickerRef}
              format={format}
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={placeholder}
              inputProps={{ className: cssInput, ...inputProps }}
              dayPickerProps={{
                selectedDays: day,
                placeholder: `${dateFnsFormat(new Date(), format)}`,
                fromMonth: fromMonth,
                toMonth: toMonth,
                month: month,
                onDayClick: v => {
                  setDay(v)
                  onChange && onChange({ type: 'date', name, value: v })
                },
                captionElement: ({ date, localeUtils }) => (
                  <YearMonthForm
                    date={date}
                    localeUtils={localeUtils}
                    onChange={setMonth}
                  />
                ),
              }}
            />
          )
        }}
      </ClassNames>
      <StyledIcon
        size={24}
        name="calendar"
        disabled={disabled}
        onClick={handleClick}
      />
    </Wrapper>
  )
}

export default withTheme(InputDate)
