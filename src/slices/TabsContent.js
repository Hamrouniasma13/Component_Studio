/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { useMedia } from 'react-use'

import Slice from './Slice'
import Chevron from '../components/AnimatedIcons/Chevron'
import Text from '../components/Text'

function TabElement({ title, content, onSelect, active }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    titleWrapper: {
      position: 'relative',
      label: 'TabItemTitle',
      userSelect: 'none',
      width: '100%',
      textTransform: 'uppercase',
      color: theme.colors.primary,
      display: 'table',
      borderBottom: '1px solid #e5e5e5',
      height: '61px',
      textDecoration: 'none',
      [theme.media.tablet]: {
        color: theme.colors.black,
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '0',
        display: 'block',
        textTransform: 'none',
        textDecoration: active ? 'underline' : 'none',
        fontWeight: active ? '700' : '300',
        height: 'auto',
        borderBottom: 0,
        paddingBottom: '30px'
      }
    },
    title: {
      display: 'table-cell',
      verticalAlign: 'middle',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontSize: '14px',
      fontWeight: '700',
      cursor: 'pointer'
    },
    chevron: {
      color: theme.colors.primary,
      position: 'absolute',
      top: '30px',
      right: '0',
      marginTop: -8,
      [theme.media.tablet]: {
        display: 'none !important'
      }
    },
    content: {
      margin: '20px auto',
      display: active ? 'block' : 'none',
      [theme.media.tablet]: {
        display: 'none'
      }
    }
  }

  return (
    <div>
      <div css={styles.titleWrapper} onClick={onSelect}>
        <div css={styles.title}>{title}</div>
        <Chevron css={styles.chevron} size={16} open={active} />
      </div>
      <div css={styles.content}>{content}</div>
    </div>
  )
}

function TabContent({ title, content }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      display: 'none',
      [theme.media.tablet]: {
        display: 'block',
        width: '80%',
        float: 'right',
        background: 'white'
      }
    },
    innerWrapper: {
      padding: 20,
      border: `1px solid ${theme.colors.lightGray}`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      borderRadius: 3
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.innerWrapper}>
        <Text.h3>{title}</Text.h3>
        <div css={{ marginTop: 20 }}>{content}</div>
      </div>
    </div>
  )
}

export default function TabsContent({ title, items, defaultIndex }) {
  const [currentItem, setCurrentItem] = React.useState(defaultIndex)
  const theme = React.useContext(ThemeContext)
  const aboveTablet = useMedia(`(min-width : ${theme.breakpoints.tablet}px)`)

  const styles = {
    list: {
      [theme.media.tablet]: {
        marginTop: 15,
        width: '20%',
        float: 'left'
      }
    }
  }

  return (
    <Slice title={title}>
      <div css={styles.list}>
        {items &&
          items.map((tab, key) => (
            <TabElement
              {...tab}
              key={key}
              active={key === currentItem}
              onSelect={() =>
                setCurrentItem(
                  key === currentItem ? (aboveTablet ? key : -1) : key
                )
              }
            />
          ))}
      </div>

      <TabContent {...items[Math.max(currentItem, 0)]} />
    </Slice>
  )
}

TabsContent.propTypes = {
  title: Slice.propTypes.title,
  items: PropTypes.arrayOf(PropTypes.object),
  defaultIndex: PropTypes.number
}
