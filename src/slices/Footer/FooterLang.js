/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useClickAway } from 'react-use'
import Icon from '../../components/Icon'
import AnimatedIcon from '../../components/AnimatedIcons'
import { lighten } from '../../theme/utils'

const LangLabel = styled('div')(({ theme }) => ({
  color: theme.colors.darkGray,
  textTransform: 'capitalize',
}))

const LangList = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.colors.gray}`,
  marginTop: '10px',
}))

const LangListItem = styled('div')(({ theme }) => ({
  listStyle: 'none',
  padding: '15px',
  color: theme.colors.darkGray,
  fontWeight: 600,
  borderBottom: `1px solid ${theme.colors.gray}`,
  backgroundColor: 'white',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: theme.colors.lightGray,
  },
  '&:last-child': {
    borderBottom: '0',
  },
}))

const LangListItemSelected = styled('div')(({ theme, selected }) => ({
  color: selected ? theme.colors.primary : 'inherit',
}))

const FooterLangList = styled('div')(({ theme, isOpen }) => ({
  background: 'white',
  padding: '20px',
  color: theme.colors.gray,
  userSelect: 'none',
  display: isOpen ? 'block' : 'none',
  [theme.media.tablet]: {
    boxShadow: 'rgba(0,0,0,0.3) 1px 1px 15px 0px',
    position: 'absolute',
    bottom: '100%',
    left: 0,
    right: 0,
    display: 'block',
    transition: isOpen
      ? 'transform 0.3s, opacity 0.1s ease 0.1s'
      : 'transform 0.1s ease 0.1s, opacity 0.3s',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(5px)',
    pointerEvents: isOpen ? 'auto' : 'none',
  },
}))

function LangSwitcherList({ lang, langs, title, onLangChange, isOpen }) {
  return (
    <FooterLangList isOpen={isOpen}>
      <LangLabel>{title}</LangLabel>
      <LangList>
        {langs.map((_lang, i) => (
          <LangListItem key={i} onClick={() => onLangChange(_lang.id)}>
            <LangListItemSelected selected={_lang.id === lang.id}>
              {_lang.label}
            </LangListItemSelected>
          </LangListItem>
        ))}
      </LangList>
    </FooterLangList>
  )
}

const FooterLangInner = styled('div')(({ theme }) => ({
  label: 'FooterLang',
  borderBottom: `1px solid ${lighten(theme.colors.primary, 15)}`,
  textTransform: 'uppercase',
  fontSize: '14px',
  letterSpacing: '.6px',
  cursor: 'pointer',

  [theme.media.tablet]: {
    minWidth: '320px',
    margin: 0,
    borderBottom: 0,
    borderRight: `1px solid ${lighten(theme.colors.primary, 15)}`,
    transition: 'background-color 0.2s',
    position: 'relative',
    left: '-15px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  },
}))

const SelectedLangWrapper = styled('div')({
  position: 'relative',
})

const SelectedLang = styled('div')({
  paddingLeft: '15px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
})

const StyledAnimatedIcon = styled(AnimatedIcon.chevron)(({ size = 20 }) => ({
  position: 'absolute',
  top: '50%',
  right: '15px',
  transformOrigin: 'center',
  marginTop: -size / 2,
}))

export default function FooterLang(props) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)
  useClickAway(ref, () => setOpen(false))

  return (
    <FooterLangInner ref={ref}>
      <SelectedLangWrapper onClick={() => setOpen(!open)}>
        <SelectedLang>
          <Icon
            css={{ marginRight: '10px', verticalAlign: 'sub' }}
            name="globe"
            size={20}
          />
          <span>{props.lang.label || 'Français'}</span>
        </SelectedLang>
        <StyledAnimatedIcon size={20} open={open} />
      </SelectedLangWrapper>
      <LangSwitcherList {...props} isOpen={open} />
    </FooterLangInner>
  )
}

FooterLang.propTypes = {
  lang: PropTypes.shape({
    ID: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  langs: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
  onLangChange: PropTypes.func.isRequired,
}
