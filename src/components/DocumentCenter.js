/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'

import Slice from '../slices/Slice'
import DocumentSection from '../slices/DocumentSection'
import DocumentMenu from './DocumentMenu'

function DocumentCenter({ sections = [], showMenu = true }) {
  const theme = useContext(ThemeContext)

  const styles = {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    menuWrapper: {
      display: 'none',
      [theme.media.tablet]: {
        display: 'block',
        width: 400,
      },
    },
    documentWrapper: {
      width: '100%',
      [theme.media.tablet]: {
        padding: '0 0 0 50px',
      },
      [theme.media.laptop]: {
        padding: '0 50px',
      },
    },
  }

  return (
    <Slice>
      <div css={styles.wrapper}>
        <div css={styles.menuWrapper}>
          {showMenu && <DocumentMenu sections={sections} />}
        </div>
        {sections && sections.length > 0 && (
          <div css={styles.documentWrapper}>
            {sections.map((section, key) => {
              if (section.items.length === 0) return null
              return <DocumentSection key={key} {...section} />
            })}
          </div>
        )}
      </div>
    </Slice>
  )
}

export default DocumentCenter
