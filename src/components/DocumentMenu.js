/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import Text from './Text'

const DocumentMenu = ({ sections }) => {
  const theme = useContext(ThemeContext)

  const styles = {
    wrapper: {
      position: 'sticky',
      top: '50px',
      width: '100%',
      maxWidth: '250px',
      padding: '5px',
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      borderBottom: `1px solid ${theme.colors.gray}`,
      backgroundColor: theme.colors.white,
      '&:hover': {
        cursor: 'pointer',
      },
      '&:last-child': {
        borderBottom: 'transparent',
      },
    },
  }

  return (
    <div css={styles.wrapper}>
      {sections &&
        sections.length > 0 &&
        sections.map(item => (
          <div key={item.title} css={styles.button}>
            <a href={`#${item.title}`}>
              <Text tag="p">{item.title}</Text>
            </a>
          </div>
        ))}
    </div>
  )
}

export default DocumentMenu
