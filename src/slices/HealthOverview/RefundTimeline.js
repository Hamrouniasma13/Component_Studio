/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import SimpleButton from '../../components/SimpleButton'
import Text from '../../components/Text'

function LineContent({ isHover, label, value, items }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    line: {
      backgroundColor: theme.colors.smallLightGray,
      position: 'relative',
      padding: 10,

      [theme.media.laptop]: {
        margin: '15px 0'
      }
    },
    inner: {
      opacity: isHover ? 0 : 1,
      transition: 'opacity 0.2s'
    },

    amount: {
      display: 'block',

      [theme.media.laptop]: {
        float: 'right',
        textAlign: 'right',
        width: '19%',
        borderLeft: '1px solid #e5e5e5'
      }
    },

    details: {
      transition: 'opacity 0.2s',
      opacity: isHover ? 1 : 0,

      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      overflow: 'hidden'
    },

    section: {
      float: 'left',
      width: '33%',
      textAlign: 'center',

      ':not(:first-of-type)': {
        borderLeft: '1px solid #E5E5E5'
      }
    },

    fromLabel: {
      display: 'block',

      [theme.media.laptop]: {
        display: 'inline',
        marginRight: 30
      }
    }
  }

  return (
    <div css={styles.line}>
      <div css={styles.inner}>
        <Text size="typo4">{label}</Text>
        <Text css={styles.amount} size="typo3">
          {value}
        </Text>
      </div>
      <div css={styles.details}>
        {items && items.length > 0
          ? items.map((item, key) => (
              <div css={styles.section} key={key}>
                <Text css={styles.fromLabel} size="typo4">
                  {item.label}
                </Text>
                <Text size="typo3">{item.value}</Text>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

LineContent.propTypes = {
  isHover: PropTypes.bool,
  label: PropTypes.string,
  amount: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  )
}

function RefundLine({ date, label, value, items }) {
  const [isHover, setIsHover] = React.useState(false)

  const theme = React.useContext(ThemeContext)

  const styles = {
    line: {
      display: 'flex',
      alignItems: 'center',
      ':first-of-type:not(:last-of-type) .dot:after': {
        height: '50%',
        top: '50%'
      },
      ':last-of-type:not(:first-of-type) .dot:after': {
        height: '50%',
        bottom: '50%'
      },
      ':not(:first-of-type):not(:last-of-type) .dot:after': {
        height: '100%'
      }
    },
    desktopDate: {
      textTransform: 'uppercase',
      display: 'none',

      [theme.media.laptop]: {
        display: 'block',
        width: '80px'
      }
    },
    dot: {
      marginRight: '8px',
      width: '22px',
      position: 'relative',
      alignSelf: 'stretch',

      '&:before': {
        content: '""',
        width: '20px',
        height: '20px',
        zIndex: '2',
        backgroundColor: theme.colors.primary,
        borderRadius: '15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transition: 'transform 0.2s',
        transform: `translate(-50%, -50%) scale(${isHover ? '1.25' : '1'})`
      },

      '&:after': {
        content: '""',
        width: '2px',
        opacity: '0.6',
        left: '50%',
        position: 'absolute',
        backgroundColor: theme.colors.primary,
        transform: 'translate(-50%, 0)'
      },

      [theme.media.laptop]: {
        margin: '0 30px'
      }
    },
    container: {
      flex: 1
    },
    mobileDate: {
      color: theme.colors.label,
      display: 'block',
      margin: '5px 0',

      [theme.media.laptop]: {
        display: 'none'
      }
    }
  }

  return (
    <div
      css={styles.line}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsHover(!isHover)}
    >
      <Text css={styles.desktopDate} size="typo6">
        {date}
      </Text>
      <div css={styles.dot} className="dot" />
      <div css={styles.container}>
        <Text css={styles.mobileDate} size="typo6">
          {date}
        </Text>
        <LineContent
          isHover={isHover}
          label={label}
          value={value}
          items={items}
        />
      </div>
    </div>
  )
}

RefundLine.propTypes = {
  date: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  items: LineContent.propTypes.items
}

export default function RefundTimeline({ title, refunds, actions }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: `1px solid ${theme.colors.lighterGray}`,
      padding: '20px',
      backgroundColor: '#fff'
    },
    title: {
      color: theme.colors.text,
      paddingBottom: '20px',
      borderBottom: `2px solid ${theme.colors.lighterGray}`,
      marginTop: 0,
      marginBottom: '24px'
    },
    refunds: {
      marginBottom: '30px',

      [theme.media.laptop]: {
        padding: '0 20px',
        marginBottom: '40px'
      }
    },
    actions: {
      marginBottom: '20px',
      marginLeft: '30px',

      [theme.media.laptop]: {
        marginLeft: 0,
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-around'
      }
    },
    action: {
      display: 'block',

      '&:not(:last-child)': {
        marginBottom: '10px',
        [theme.media.laptop]: {
          marginBottom: 0
        }
      }
    }
  }

  return (
    <div css={styles.wrapper}>
      <Text.h3 css={styles.title}>{title}</Text.h3>
      <div css={styles.refunds}>
        {refunds && refunds.length > 0
          ? refunds.map((item, key) => <RefundLine {...item} key={key} />)
          : null}
      </div>
      {actions && actions.length > 0 ? (
        <div css={styles.actions}>
          {actions.map(({ url, label }, key) => (
            <SimpleButton key={key} href={url} css={styles.action}>
              {label}
            </SimpleButton>
          ))}
        </div>
      ) : null}
    </div>
  )
}

RefundTimeline.propTypes = {
  title: PropTypes.string,
  refunds: PropTypes.arrayOf(PropTypes.shape(RefundLine.propTypes)),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string
    })
  )
}
