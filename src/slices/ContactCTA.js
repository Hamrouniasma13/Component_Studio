/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Text from '../components/Text'

export default function ContactCTA({ title, content, image, action }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    box: {
      minHeight: 140,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: 3,
      [theme.media.laptop]: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    image: {
      display: 'none',
      maxWidth: 80,
      maxHeight: 80,
      [theme.media.laptop]: {
        display: 'inline-block',
        marginRight: 40
      }
    },
    content: {
      [theme.media.laptop]: {
        flex: 1,
        alignSelf: 'flex-start'
      }
    },
    action: {
      marginTop: 15,
      [theme.media.laptop]: {
        marginTop: 0,
        marginLeft: 40
      }
    }
  }

  return (
    <Slice title={title}>
      <div css={styles.box}>
        {image && <img css={styles.image} src={image} alt="contact logo" />}
        <Text tag="div" css={styles.content}>
          {content}
        </Text>
        {action && <div css={styles.action}>{action}</div>}
      </div>
    </Slice>
  )
}

ContactCTA.propTypes = {
  title: Slice.propTypes.title,
  content: PropTypes.any,
  image: PropTypes.string,
  action: PropTypes.element
}
