/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'
import Icon from '../Icon'
import Pill from '../Pill'
import Text from '../Text'

const Dot = ({ color }) => {
  const { colors } = React.useContext(ThemeContext)
  const style = {
    backgroundColor: colors[color] ? colors[color] : color,
    width: 15,
    height: 15,
    marginRight: '10px',
    borderRadius: '50%',
  }

  return <div css={style}></div>
}
export default function Row({
  pill,
  dotColor,
  title,
  value,
  simulation,
  link,
}) {
  const { colors } = React.useContext(ThemeContext)

  // Displays border if a link is present
  const border = !!link

  const styles = {
    wrapper: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15,
      paddingBottom: 15,
      // Row with link have border
      border: border ? '1px solid #ccc' : 0,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      transition: 'background-color 0.2s ease',

      '&:nth-of-type(odd)': {
        backgroundColor: colors.smallLightGray,
      },
      '& svg': {
        transition: 'transform 0.15s',
        transform: 'translate3d(0, 0, 0)',
      },
      // When 2 links are one of top of the other, remove the top border of the second one
      '& + &': border
        ? {
            borderTop: 0,
          }
        : {},

      // Hover state for link
      '&:hover': border
        ? {
            backgroundColor: '#F2F2F2',
            '& svg': {
              transform: 'translate3d(5px, 0, 0)',
            },
          }
        : {},
    },
    pill: {
      marginRight: 15,
    },
    title: {
      flex: 1,
    },
    simulation: {
      fontWeight: 600,
      textDecoration: 'line-through',
      marginLeft: 10,
    },
    value: {
      fontWeight: 600,
      marginLeft: 10,
    },
    icon: {
      paddingLeft: 10,
    },
  }

  // Choose between Link and simple div for the wrapper
  const WrapperTag = link ? Link : 'div'

  return (
    <WrapperTag css={styles.wrapper} {...(link ? { to: link } : {})}>
      {dotColor ? (
        <Dot color={colors[dotColor] || dotColor}></Dot>
      ) : pill ? (
        <Pill css={styles.pill} color={pill.color} large>
          {pill.value}
        </Pill>
      ) : null}
      <Text css={styles.title}>{title}</Text>
      {simulation && <span css={styles.simulation}>{simulation}</span>}
      {value && <span css={styles.value}>{value}</span>}
      {!!link && <Icon css={styles.icon} name="right" size="20" />}
    </WrapperTag>
  )
}

Row.propTypes = {
  dotColor: PropTypes.string,
  pill: PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  value: PropTypes.any,
  simulation: PropTypes.any,
  link: PropTypes.string,
}

Row.defaultProps = {
  dot: false,
}
