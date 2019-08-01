import React, { forwardRef, useRef, useImperativeHandle } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

const classNames = DayPickerInput.defaultProps.classNames

function DayPickerWrapper(
  { wrapperClassName, big, disabled, error, ...rest },
  ref
) {
  const pickerRef = useRef()
  // we use forwardRef because we need to access to <DayPickerInput /> ref in order to display the day picker
  //https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  useImperativeHandle(ref, () => {
    return {
      display: () => {
        pickerRef.current.showDayPicker()
        pickerRef.current.input.focus()
      }
    }
  })

  return (
    <DayPickerInput
      ref={pickerRef}
      classNames={{
        ...classNames,
        container: `${classNames.container} ${wrapperClassName}`
      }}
      {...rest}
    />
  )
}

export default forwardRef(DayPickerWrapper)
