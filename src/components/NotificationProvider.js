/** @jsx jsx */
import { jsx } from '@emotion/core'
import { createContext, useState } from 'react'
import NotificationToast from './NotificationToast'
import posed, { PoseGroup } from 'react-pose'
import PropTypes from 'prop-types'

export const NotificationContext = createContext({
  newNotification: () => {},
})

const Box = posed.li({
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
})

const NotificationProvider = ({ children }) => {
  const [notificationList, setNotificationList] = useState([])

  const styles = {
    wrapper: {
      position: 'fixed',
      width: '100%',
      pointerEvents: 'none',
      zIndex: 2147483647,
    },
    li: {
      listStyle: 'none',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }

  const onUnmount = uid => {
    const array = notificationList.filter(item => item.uid !== uid)
    setNotificationList(array)
  }

  const newNotification = ({ type, message, infinite = false }) => {
    setNotificationList([
      ...notificationList,
      {
        type,
        message,
        infinite,
        uid: new Date().getTime(),
      },
    ])
  }

  return (
    <NotificationContext.Provider
      value={{
        newNotification,
      }}
    >
      <div css={styles.wrapper}>
        <PoseGroup>
          {notificationList.map(item => (
            <Box key={item.uid} css={styles.li}>
              <NotificationToast
                type={item.type}
                message={item.message}
                infinite={item.infinite}
                onUnmount={onUnmount}
                uid={item.uid}
              />
            </Box>
          ))}
        </PoseGroup>
      </div>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
