/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'

import Slice from './Slice'
import Button from '../components/Button'
import Pill from '../components/Pill'
import Icon from '../components/Icon'
import Text from '../components/Text'

function DocumentActions({ status, actions, availability }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      textAlign: 'right',
      [theme.media.tablet]: {
        marginTop: 20,
        minWidth: '100%',
      },
      [theme.media.desktop]: {
        marginLeft: 0,
        minWidth: 'initial',
        marginTop: 0,
      },
    },
    status: {
      textTransform: 'uppercase',
      position: 'absolute',
      top: 25,
      left: 25,
      margin: '0',
      [theme.media.tablet]: {
        marginLeft: 30,
        left: 'initial',
        top: 30,
        right: 20,
      },
      [theme.media.desktop]: {
        position: 'relative',
        top: 0,
        right: 0,
        marginRight: 30,
      },
    },
    action: {
      width: 'initial',
      marginLeft: 15,
    },
    availability: {
      lineHeight: '40px',
    },
  }

  return (
    <div css={styles.wrapper}>
      {status && status.label ? (
        <Pill css={styles.status} color={status.color}>
          {status.label}
        </Pill>
      ) : null}
      {actions && actions.length > 0 ? (
        actions.map((action, key) => (
          <Button css={styles.action} key={key} {...action} ghost size="big" />
        ))
      ) : (
        <Text size="typo6" css={styles.availability}>
          {availability}
        </Text>
      )}
    </div>
  )
}

function Document({ title, description, status, actionButtons, availability }) {
  const theme = React.useContext(ThemeContext)

  const hasStatus = status && status.label
  const hasLinks = actionButtons && actionButtons.length > 0

  const styles = {
    wrapper: {
      padding: 20,
      background: 'white',
      margin: 0,
      minHeight: 82,
      position: 'relative',

      '&:nth-of-type(odd)': {
        backgroundColor: theme.colors.smallLightGray,
      },

      [theme.media.laptop]: {
        height: 85,
      },
    },
    left: {
      marginTop: hasStatus ? 45 : 0,
      marginBottom: hasLinks ? 30 : 0,
      [theme.media.tablet]: {
        minWidth: '50%',
        minHeight: 40,
        marginTop: 0,
        marginBottom: 0,
      },
      [theme.media.desktop]: {
        minHeight: 'initial',
        float: 'left',
      },
    },
    icon: {
      marginRight: 20,
      display: 'block',
      position: 'absolute',
      top: hasStatus ? 70 : 25,
      left: 25,
      [theme.media.tablet]: {
        top: 25,
      },
    },
    content: {
      marginLeft: 60,
    },
    title: {
      '&:last-child': { lineHeight: '40px' },
    },
    description: {
      marginTop: 5,
    },
  }

  return (
    <li css={styles.wrapper}>
      <div css={styles.left}>
        <Icon css={styles.icon} name="file" size={32} />
        <div css={styles.content}>
          <Text tag="div" css={styles.title}>
            {title}
          </Text>
          {description ? (
            <Text tag="div" css={styles.description} size="typo6">
              {description}
            </Text>
          ) : null}
        </div>
      </div>
      <DocumentActions
        status={status}
        actions={actionButtons}
        availability={availability}
      />
    </li>
  )
}

function Section({ title, documents, sentenceOnEmpty }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      marginBottom: 30,

      [theme.media.laptop]: {
        width: '78%',
      },

      [theme.media.desktop]: {
        width: '82%',
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    title: {
      marginTop: 40,
    },
    documents: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    emptySentence: {
      borderTop: '1px solid #eee',
      paddingTop: 20,
    },
  }

  return (
    <div css={styles.wrapper}>
      {title && (
        <Text.h2 mb={20} css={styles.title}>
          {title}
        </Text.h2>
      )}
      {documents && documents.length > 0 ? (
        <ul css={styles.documents}>
          {documents.map((document, key) => (
            <Document {...document} key={key} />
          ))}
        </ul>
      ) : (
        <Text tag="div" css={styles.emptySentence} mb={20} size="typo6">
          {sentenceOnEmpty}
        </Text>
      )}
    </div>
  )
}

export default function DocumentsList({
  title,
  sections = [],
  sentenceOnEmpty,
}) {
  return (
    <Slice title={title}>
      {sections && sections.length > 0 ? (
        <div>
          {sections.map((section, key) => (
            <Section key={key} {...section} sentenceOnEmpty={sentenceOnEmpty} />
          ))}
        </div>
      ) : null}
    </Slice>
  )
}
