/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Color from 'color'

import useMedia from 'react-use/lib/useMedia'

import Text from '../components/Text'
import Input from '../components/forms/Input'
import Button from '../components/Button'
import Icon from '../components/Icon'

const SearchAction = ({
  label,
  placeholder,
  value,
  submitLabel,
  onSubmit,
  style,
  className,
}) => {
  let [inputValue, setInputValue] = useState(value)
  const { colors, media, breakpoints } = useContext(ThemeContext)
  const isTablet = useMedia(`(max-width : ${breakpoints.tablet}px)`)

  const styles = {
    wrapper: {
      padding: '15px',
      width: '100%',
      borderRadius: '4px',
      [media.tablet]: {
        padding: '15px 0px',
        maxWidth: '800px',
      },
    },
    title: {
      marginBottom: '10px',
      color: 'black',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      [media.tablet]: {
        height: '45px',
        flexDirection: 'row',
      },
    },
    input: {
      marginBottom: '10px',
      paddingRight: '10px',
      width: '80%',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      [media.tablet]: {
        paddingRight: '15px',
        paddingLeft: '40px',
        borderRight: '0',
        width: '68%',
      },
      [media.desktop]: {
        width: '80%',
      },
    },
    button: {
      fontWeight: '400',
      flexBasis: 'auto',
      flexGrow: 1,
      minWidth: 45,
      width: '20%',
      height: 45,
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
      [media.tablet]: {
        width: '32%',
      },
      [media.desktop]: {
        width: '20%',
      },
    },
    icon: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      color: colors.text,
    },
  }

  return (
    <div css={styles.wrapper} style={style} className={className}>
      <Text.h4 css={styles.title}>{label}</Text.h4>
      <div css={styles.inputWrapper}>
        {!isTablet && <Icon css={styles.icon} size="17" name="search" />}
        <Input
          css={styles.input}
          value={inputValue}
          placeholder={placeholder}
          onChange={event => setInputValue(event.target.value)}
          onKeyPress={event => event.key === 'Enter' && onSubmit(inputValue)}
          iconPosition={isTablet ? null : 'left'}
        />
        <Button
          css={styles.button}
          color="secondary"
          type="submit"
          onClick={() => onSubmit(inputValue)}
          icon={isTablet ? 'search' : null}
        >
          {isTablet ? '' : submitLabel}
        </Button>
      </div>
    </div>
  )
}

SearchAction.propTypes = {
  /**
   * label
   */
  label: PropTypes.string,

  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * submit label
   */
  submitLabel: PropTypes.string,
  /**
   * on submit callback
   */
  onSubmit: PropTypes.func,
}

SearchAction.defaultProps = {
  label: '',
  placeholder: '',
  submitLabel: '',
  onSubmit: () => {},
}

export default SearchAction
