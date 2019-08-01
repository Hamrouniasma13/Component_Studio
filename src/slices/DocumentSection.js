/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import Text from '../components/Text'
import DocumentItem from '../components/DocumentItem'

function DocumentsSection({ title, items }) {
  const theme = useContext(ThemeContext)

  const styles = {
    wrapper: {
      marginBottom: 30,
      width: '100%',
      maxWidth: '700px',
      [theme.media.desktop]: {
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    title: {
      marginTop: 40,
    },
    documents: {
      width: '100%',
      paddingLeft: '0px',
      [theme.media.laptop]: {
        paddingLeft: '40px',
      },
    },
  }

  return (
    <div css={styles.wrapper} id={title}>
      {title && (
        <Text.h3 mb={20} css={styles.title}>
          {title}
        </Text.h3>
      )}
      {items && items.length > 0 && (
        <div css={styles.documents} id="ok">
          {items.map((document, key) => (
            <DocumentItem {...document} key={key} />
          ))}
        </div>
      )}
    </div>
  )
}

export default DocumentsSection
