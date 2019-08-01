/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTimeout } from 'react-use'

import Text from './Text'
import Icon from './Icon'

const Toast = ({ type, message, onUnmount, uid }) => {
  const theme = useContext(ThemeContext)

  const toastBackgroundColor =
    type === 'success'
      ? 'toastSuccessBackground'
      : type === 'error'
      ? 'toastErrorBackground'
      : 'toastWarningBackground'
  const textAndIconColor =
    type === 'success'
      ? 'toastSuccessText'
      : type === 'error'
      ? 'toastErrorText'
      : 'toastWarningText'

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%',
      maxWidth: '540px',
      minHeight: '40px',
      padding: '5px 10px',
      backgroundColor: theme.colors[toastBackgroundColor],
      borderRadius: 8,
      marginTop: 10,
      pointerEvents: 'auto',
      [theme.media.tablet]: {
        padding: '5px 20px',
      },
    },
    message: {
      width: '70%',
      textAlign: 'center',
      fontWeight: 800,
      color: theme.colors[textAndIconColor],
    },
    icons: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }

  return (
    <div css={styles.wrapper}>
      <Icon
        name={type === 'success' ? 'check' : 'info'}
        color={textAndIconColor}
        size={20}
        css={styles.icons}
      />
      <Text tag="p" css={styles.message}>
        {message}
      </Text>
      <Icon
        name="close"
        color={textAndIconColor}
        css={styles.icons}
        size={15}
        onClick={() => {
          onUnmount(uid)
        }}
      />
    </div>
  )
}

const NotificationToast = ({ infinite, onUnmount, uid, ...rest }) => {
  const endOfTimeout = useTimeout(5000)

  useEffect(() => {
    if (endOfTimeout && !infinite) {
      onUnmount(uid)
    }
  }, [endOfTimeout, infinite, onUnmount, uid])

  return <Toast onUnmount={onUnmount} uid={uid} {...rest} />
}

Toast.propTypes = {
  onUnmount: PropTypes.func.isRequired,
  uid: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

NotificationToast.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error']),
  message: PropTypes.string,
  onUnmount: PropTypes.func,
  uid: PropTypes.number,
  infinite: PropTypes.bool,
}

NotificationToast.defaultProps = {
  type: 'success',
  message: '',
  infinite: false,
  onUnmount: () => {},
  uid: '',
}

export default NotificationToast
