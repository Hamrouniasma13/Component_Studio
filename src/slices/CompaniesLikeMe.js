/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import Slice from './Slice'
import Text from '../components/Text'
import Tip from '../components/Tip'

function Box({ title, value }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: '#fff',
      border: 'solid 1px #f5f5f5',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      padding: '25px 30px',
      marginBottom: '30px',
      [theme.media.tablet]: {
        width: '46%',
        marginRight: '20px'
      },
      [theme.media.desktop]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 0,
        marginBottom: '0',
        height: '180px',
        width: '260px'
      }
    },
    value: {
      color: theme.colors.primary,
      textAlign: 'right'
    }
  }

  return (
    <div css={styles.wrapper}>
      <Text.h3 size="typo2" mb={15}>
        {title}
      </Text.h3>
      <Text tag="p" mb={5} size="typo1" data-cy={title} css={styles.value}>
        {value}
      </Text>
    </div>
  )
}

export default function CompaniesLikeMe({
  title,
  figures,
  informationBoxTitle,
  informationBoxContent
}) {
  const theme = React.useContext(ThemeContext)

  if (!Array.isArray(figures) || figures.length < 1) return null

  const styles = {
    wrapper: {
      [theme.media.tablet]: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '30px 0'
      }
    }
  }

  return (
    <Slice title={title}>
      <div css={styles.wrapper}>
        {figures.map((figure, key) => (
          <Box key={key} title={figure.label} value={figure.value} />
        ))}
      </div>
      <Tip title={informationBoxTitle} color="sixth">
        {informationBoxContent}
      </Tip>
    </Slice>
  )
}
