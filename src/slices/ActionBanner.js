/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Text from '../components/Text'
import SimpleButton from '../components/SimpleButton'
import Button from '../components/Button'
import typos from '../typos'

function Breadcumb({ url, label }) {
  const { media } = React.useContext(ThemeContext)

  return (
    <div
      css={{
        margin: 20,
        [media.tablet]: {
          margin: 0,
          marginBottom: 20,
        },
      }}
    >
      <SimpleButton href={url} icon="left" iconPosition="left">
        {label}
      </SimpleButton>
    </div>
  )
}

Breadcumb.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default function ActionBanner({
  title,
  description,
  status,
  children,
  breadcumb,
  action,
}) {
  const { media, colors } = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: colors.smallLightGray,
      paddingTop: '45px',
      paddingBottom: '45px',
      '&:after': {
        display: 'block',
        content: '""',
        clear: 'both',
      },
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      [media.tablet]: {
        paddingLeft: 15,
        paddingRight: 15,
      },
    },
    heading: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      marginBottom: 30,
      paddingLeft: 15,
      paddingRight: 15,
      '&:last-child': { marginBottom: '0' },
      [media.tablet]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    actionButton: {
      label: 'actionButtonactionButtonactionButton',
      [media.tablet]: {
        position: 'absolute',
        top: '0',
        right: '0',
      },
    },
    statusWrapper: {
      marginLeft: 20,
    },
    pill: {
      textTransform: 'upperCase',
      marginLeft: 20,
      lineHeight: '100%',
    },
    description: {
      ...typos.paragraph,
      marginBottom: 40,
      ':last-child': {
        marginBottom: 0,
      },

      paddingLeft: 15,
      paddingRight: 15,
      [media.tablet]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  }

  return (
    <div css={styles.wrapper}>
      <Container css={styles.container}>
        {breadcumb && <Breadcumb {...breadcumb} />}
        <div css={styles.heading}>
          <Text.h1>{title}</Text.h1>
          {status && <div css={styles.statusWrapper}>{status}</div>}
          {action && action.url && action.label ? (
            <Button css={styles.actionButton} href={action.url} size="small">
              {action.label}
            </Button>
          ) : null}
        </div>
        {description && <div css={styles.description}>{description}</div>}
        {children}
      </Container>
    </div>
  )
}

ActionBanner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  status: PropTypes.element,
  breadcumb: PropTypes.shape(Breadcumb.propTypes),
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
  }),
}

export function ActionBannerSkeleton() {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: theme.colors.smallLightGray,
      paddingTop: '45px',
      paddingBottom: '45px',
      '&:after': {
        display: 'block',
        content: '""',
        clear: 'both',
      },
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      [theme.media.tablet]: {
        paddingLeft: 15,
        paddingRight: 15,
      },
    },
    heading: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      '&:last-child': { marginBottom: '0' },
      [theme.media.tablet]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    skeletonText: {
      ...theme.skeletonWave,
      width: 300,
    },
    skeletonContent: {
      ...theme.skeletonWave,
      marginBottom: 15,
    },
  }

  return (
    <div css={styles.wrapper}>
      <Container css={styles.container}>
        <div css={styles.heading}>
          <Text.h1 css={styles.skeletonText}>Lorem Ipsum</Text.h1>
        </div>
        <Text.p css={styles.skeletonContent}>
          Pariatur excepteur ut ullamco mollit fugiat consequat ea excepteur
        </Text.p>

        <Text.p css={styles.skeletonContent}>
          Pariatur excepteur ut ullamco mollit fugiat consequat ea excepteur
        </Text.p>
      </Container>
    </div>
  )
}
