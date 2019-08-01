/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import Input from './Input'
import Icon from '../Icon'

const InputWrapper = styled('div')(({ theme }) => ({
  display: 'inline-block',
  width: '100%',
  minWidth: '240px',
  [theme.media.tablet]: {
    maxWidth: '330px',
  },
}))

const TextInputWrapper = styled.div({
  position: 'relative',
})

const IconWrapper = styled.div(({ iconPosition, big }) => {
  const css = {
    position: 'absolute',
    height: big ? '60px' : '45px',
    width: big ? '60px' : '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  if (iconPosition === 'right') css.right = '0px'
  return css
})

const StyledIcon = styled(Icon)({
  height: '25px',
})

const Label = styled('label')(({ error, theme: { colors } }) => ({
  display: 'block',
  margin: '0 0 15px 1px',
  fontSize: '15px',
  color: error ? colors.error : colors.text,
}))

const InputText = ({
  name,
  error,
  placeholder,
  id,
  label,
  disabled,
  big,
  step,
  type,
  value,
  onBlur,
  onChange,
  onFocus,
  className,
  iconName,
  iconPosition,
  textarea,
  css,
  ...props
}) => {
  const [val, setVal] = useState(value)

  const handleChange = e => {
    setVal(e.target.value)
    if (onChange) onChange({ type, name, value: e.target.value })
  }

  const handleFocus = e => {
    setVal(e.target.value)
    if (onFocus) onFocus(e.target.value)
  }

  const handleBlur = e => {
    setVal(e.target.value)
    if (onBlur) onBlur(e.target.value)
  }

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <InputWrapper className={className} style={css}>
      {label && (
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
      )}
      <TextInputWrapper>
        {iconName && (
          <IconWrapper iconPosition={iconPosition} big={big}>
            <StyledIcon name={iconName} big={big} color={'darkGray'} />
          </IconWrapper>
        )}
        <Input
          big={big}
          error={error}
          id={id}
          disabled={disabled}
          type={type}
          step={step}
          placeholder={placeholder}
          value={val}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          iconName={iconName}
          iconPosition={iconPosition}
          textarea={textarea}
          {...props}
        />
      </TextInputWrapper>
    </InputWrapper>
  )
}

InputText.propTypes = {
  /**
   * input value
   */
  value: PropTypes.string,

  /**
   * input ID
   */
  id: PropTypes.string,

  /**
   * error
   */
  error: PropTypes.bool,

  /**
   * onChange function
   */
  onChange: PropTypes.func,

  /**
   * placeholder
   */
  placeholder: PropTypes.string,

  /**
   * label
   */
  label: PropTypes.string,

  /**
   * disabled input
   */
  disabled: PropTypes.bool,

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * big
   */
  big: PropTypes.bool,

  /**
   * iconName
   */
  iconName: PropTypes.string,

  /**
   * iconPosition
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * css to overwrite the Input Wrapper
   */
  css: PropTypes.shape({}),

  /**
   * is a textarea
   */
  textarea: PropTypes.bool,
}

InputText.defaultProps = {
  big: false,
  type: 'text',
  iconName: null,
  iconPosition: 'left',
  textarea: false,
  css: {},
}

export default InputText
