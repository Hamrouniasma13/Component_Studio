import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

import posed from 'react-pose'

import { lighten } from '../../../../theme/utils'

const Sidebar = posed.ul({
  open: {
    opacity: 1,
    delayChildren: 50,
    staggerChildren: 50,
  },
  closed: { opacity: 0 },
})

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: -10, opacity: 0 },
})

function SwitcherList({ available, onChange, isOpen, setOpen }) {
  const { colors } = useContext(ThemeContext)
  const styles = {
    listWrapper: {
      background: colors.darkerGray,
      color: colors.lightGray,
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 20,
      pointerEvents: isOpen ? 'auto' : 'none',
      listStyle: 'none',
      margin: '0px',
      padding: '0px',
    },
    wrapperLabel: {
      padding: '0px 20px',
      transition: 'background-color 0.2s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: lighten(colors.darkerGray, 40),
      },
    },
  }
  return (
    <Sidebar css={styles.listWrapper} pose={isOpen ? 'open' : 'closed'}>
      {available.map(({ label, id }, i) => (
        <Item
          css={styles.wrapperLabel}
          key={i}
          onClick={() => {
            setOpen(!isOpen)
            onChange(id)
          }}
        >
          {label}
        </Item>
      ))}
    </Sidebar>
  )
}

export default SwitcherList
