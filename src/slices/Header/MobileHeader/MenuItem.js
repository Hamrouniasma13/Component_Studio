import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

import Chevron from '../../../components/AnimatedIcons/Chevron'
import Icon from '../../../components/Icon'
import Link from '../../../components/Link'

import { lighten } from '../../../theme/utils'

const Li = ({ children, ...props }) => (
  <li
    {...props}
    css={{
      display: 'block',
      lineHeight: 'normal',
      margin: '10px 0',
      padding: '0 10px',
      position: 'relative',
      cursor: 'pointer',
    }}
  >
    {children}
  </li>
)

const LiWrapper = ({ css, children, ...rest }) => (
  <Link
    css={{
      ...css,
      color: 'inherit',
      textDecoration: 'none',
      display: 'table',
      paddingRight: 10,
    }}
    {...rest}
  >
    {children}
  </Link>
)

const IconRightWrapper = ({ children }) => (
  <div
    css={{
      display: 'table-cell',
      textAlign: 'right',
      minHeight: '40px',
      minWidth: '40px',
    }}
  >
    {children}
  </div>
)

const IconRight = props => (
  <Icon css={{ display: 'block', margin: '8px 20px 8px' }} {...props} />
)

const Label = ({ children }) => (
  <span css={{ display: 'table-cell', verticalAlign: 'middle' }}>
    {children}
  </span>
)

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: -10, opacity: 0 },
})

const SubItem = posed.div({
  display: { y: 0, opacity: 1 },
  hide: { y: -10, opacity: 0 },
})

function MenuItem({ icon, label, url }) {
  return (
    <Item>
      <Li>
        <LiWrapper href={url}>
          <IconRightWrapper>
            <IconRight size={24} name={icon || 'star'} />
          </IconRightWrapper>
          <Label>{label}</Label>
        </LiWrapper>
      </Li>
    </Item>
  )
}

const GroupList = posed.div({
  display: {
    opacity: 1,
    height: 'auto',
    delayChildren: 50,
    staggerChildren: 50,
  },
  hide: {
    opacity: 0,
    height: '1px',
  },
})

export function MenuDropdownItem({ icon, current, available, onChange }) {
  const { colors } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  return (
    <Item>
      <Li onClick={() => setOpen(!open)}>
        <LiWrapper>
          <IconRightWrapper>
            <IconRight size={24} name={icon || 'star'} />
          </IconRightWrapper>

          <Label>{current.label}</Label>
          <div
            css={{
              display: 'block',
              position: 'absolute',
              right: '0',
              top: '50%',
              marginTop: '-10px',
              width: 20,
              height: 20,
              marginRight: 20,
            }}
          >
            <Chevron size={16} open={open} />
          </div>
        </LiWrapper>
      </Li>

      <GroupList
        css={{
          paddingLeft: 75,
          background: lighten(colors.darkerGray, 40),
          overflow: 'hidden',
        }}
        pose={open ? 'display' : 'hide'}
      >
        {available &&
          available.map(({ label, id }, i) => (
            <SubItem
              onClick={() => onChange(id)}
              css={{
                cursor: 'pointer',
                color: colors.lightGray,
                padding: '10px 20px',
              }}
              key={i}
            >
              {label}
            </SubItem>
          ))}
      </GroupList>
    </Item>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
}

export default MenuItem
