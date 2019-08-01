/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { useClickAway } from 'react-use'

import NavItem from './NavItem'
import SwitcherList from './SwitcherList'

import Icon from '../../../../components/Icon'
import Chevron from '../../../../components/AnimatedIcons/Chevron'

function DropdownSelector({ current, ...props }) {
  const [open, setOpen] = React.useState(false)

  const ref = React.useRef(null)
  useClickAway(ref, () => setOpen(false))

  const styles = {
    wrapper: {
      position: 'relative',
    },
    currentLangWrapper: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
  }
  return (
    <div css={styles.wrapper} ref={ref}>
      <NavItem onClick={() => setOpen(!open)}>
        <div css={styles.currentLangWrapper}>
          {props.icon ? (
            <Icon css={{ marginRight: 10 }} size={16} name={props.icon} />
          ) : null}
          <span>{current.label}</span>
          <Chevron css={{ marginLeft: 10 }} name="up" size={12} open={open} />
        </div>
        <SwitcherList {...props} setOpen={setOpen} isOpen={open} />
      </NavItem>
    </div>
  )
}

DropdownSelector.propsTypes = {
  /**
   * Current language
   */
  current: PropTypes.shape({
    ID: PropTypes.string,
    label: PropTypes.string,
  }),

  /**
   * Array of available languages
   */
  available: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.string,
      label: PropTypes.string,
    })
  ),

  /**
   * Function called when a lang is selected
   */
  onChange: PropTypes.func,
}

DropdownSelector.defaultProps = {
  current: {},
  available: [],
  onChange: () => {},
}

export default DropdownSelector
