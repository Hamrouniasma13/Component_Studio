/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'
import Text from '../../components/Text'

export default function ArticleHeader({ title, date, category, image }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: { backgroundColor: '#fff', marginTop: 40 },
    subline: {
      marginBottom: 30,
      overflow: 'hidden',
      textTransform: 'uppercase'
    },
    date: { paddingRight: '10px' },
    category: {
      color: theme.colors.label,
      '&:not(:first-of-type)': {
        paddingLeft: '10px',
        borderLeft: `2px solid ${theme.colors.label}`
      }
    },
    image: {
      marginBottom: 30,
      width: '100%',

      [theme.media.tablet]: { marginBottom: 40 }
    }
  }

  return (
    <div css={styles.wrapper}>
      <Container article>
        <Text.h1 mb={30}>{title}</Text.h1>

        {date || category ? (
          <div css={styles.subline}>
            {date && <Text css={styles.date}>{date}</Text>}
            {category && <Text css={styles.category}>{category}</Text>}
          </div>
        ) : null}

        {image && image.src && (
          <img src={image.src} alt={image.alt} css={styles.image} />
        )}
      </Container>
    </div>
  )
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
}
