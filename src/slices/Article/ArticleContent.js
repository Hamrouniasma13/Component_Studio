/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import Container from '../../components/Container'

export default function ArticleContent({ children }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    article: {
      marginBottom: 50,

      fontSize: 16,
      lineHeight: 1.5,

      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      color: theme.colors.text,

      [theme.media.tablet]: {
        fontSize: 18,
        lineHeight: 1.67
      }
    }
  }

  return (
    <Container article css={styles.article}>
      {children}
    </Container>
  )
}
