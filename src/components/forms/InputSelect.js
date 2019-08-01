import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import Select from 'react-select'

const customStyles = (theme, error) => ({
  control: provided => ({
    ...provided,
    height: '45px',
    borderColor: error ? theme.colors.error : theme.colors.lightGray,
    borderRadius: '3px',
    boxShadow: 'none',
    ':hover': {
      borderColor: error ? theme.colors.error : theme.colors.lightGray,
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '3px',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 15px',
    fontSize: '16px',
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0',
    color: state.isDisabled ? theme.colors.gray : theme.colors.text,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    margin: '0',
    color: state.isDisabled ? theme.colors.gray : theme.colors.text,
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    fontSize: '16px',
    backgroundColor: state.isSelected
      ? theme.colors.primary
      : state.isFocused
      ? theme.colors.lightGray
      : 'none',
    color: state.isSelected ? theme.colors.white : theme.colors.text,
  }),
})

const InputWrapper = styled('div')(({ theme }) => ({
  display: 'inline-block',
  width: '100%',
  minWidth: '240px',
  [theme.media.tablet]: {
    maxWidth: '330px',
  },
}))

const Label = styled('label')(({ error, theme: { colors } }) => ({
  display: 'block',
  margin: '0 0 15px 1px',
  fontSize: '15px',
  color: error ? colors.error : colors.text,
}))

// we prevent sending the value from the rest obj to prevent conflit between studio & react-select
/* eslint-disable-next-line */
function InputSelect({ error, id, label, theme, options, value, ...rest }) {
  return (
    <InputWrapper>
      {label && (
        <Label error={error} htmlFor={id}>
          {label}
        </Label>
      )}
      <Select styles={customStyles(theme, error)} options={options} {...rest} />
    </InputWrapper>
  )
}

InputSelect.propTypes = {
  /**
   * input value
   */
  label: PropTypes.string,

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
  options: PropTypes.arrayOf(PropTypes.object),

  /**
   * disabled input
   */
  isDisabled: PropTypes.bool,
}

InputSelect.defaultProps = {}

export default withTheme(InputSelect)
