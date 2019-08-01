import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Input from './forms/Input'

const InputWrapper = styled('div')({
  display: 'inline-block',
  width: '100%',
  minWidth: '240px',
  maxWidth: '300px',
})

const Label = styled('label')(({ error, theme: { colors } }) => ({
  display: 'block',
  margin: '0 0 15px 1px',
  fontSize: '15px',
  color: error ? colors.error : colors.text,
}))

class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value === this.props.value) return false
    this.setState({ value: this.props.value }, () => {
      this.props.onChange && this.props.onChange(this.state.value)
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.onChange && this.props.onChange(this.state.value)
    })
  }
  handleFocus(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.onFocus && this.props.onFocus(this.state.value)
    })
  }
  handleBlur(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.onBlur && this.props.onBlur(this.state.value)
    })
  }

  render() {
    const {
      error,
      placeholder,
      id,
      label,
      disabled,
      big,
      step,
      type,
      className,
    } = this.props
    const { value } = this.state
    return (
      <InputWrapper className={className}>
        {label && (
          <Label htmlFor={id} error={error}>
            {label}
          </Label>
        )}
        <Input
          big={big}
          error={error}
          id={id}
          disabled={disabled}
          type={type}
          step={step}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </InputWrapper>
    )
  }
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
}

InputText.defaultProps = {
  big: false,
  type: 'text',
}

export default InputText
