/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Text from '../components/Text'
import Link from '../components/Link'

function Article({ date, title, category, link }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      padding: '30px 0',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      ':last-child': {
        borderBottom: '0'
      },
      [theme.media.tablet]: {
        padding: '40px 0'
      }
    },
    date: {
      textTransform: 'uppercase',
      marginBottom: '15px',
      [theme.media.tablet]: {
        float: 'left',
        width: '130px'
      }
    },
    main: {
      [theme.media.tablet]: {
        marginLeft: '160px'
      },
      [theme.media.desktop]: {
        marginLeft: '200px'
      }
    },
    category: {
      color: theme.colors.darkGray,
      textTransform: 'uppercase',
      display: 'block'
    }
  }

  return (
    <li css={styles.wrapper}>
      <Text tag="div" css={styles.date}>
        {date}
      </Text>
      <div css={styles.main}>
        <Link href={link.url}>
          <Text tag="div" size="typo3" mb={10}>
            {title}
          </Text>
        </Link>
        {category && (
          <Text size="typo6" css={styles.category}>
            {category}
          </Text>
        )}
      </div>
    </li>
  )
}

Article.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

export default function ArticleList({ items }) {
  if (!items || items.length < 1) return null

  const styles = {
    list: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  }

  return (
    <Container article>
      <ul css={styles.list}>
        {items.map((item, i) => (
          <Article {...item} key={i} />
        ))}
      </ul>
    </Container>
  )
}

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Article.propTypes))
}
