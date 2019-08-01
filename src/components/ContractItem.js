/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import Button from './Button'
import Link from './Link'
import Icon from './Icon'
import Text from './Text'

function Actions({ actions }) {
  const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    item: {
      marginLeft: 10,
      display: 'inline-block'
    }
  }

  return (
    <ul css={styles.list}>
      {actions.map((action, key) => (
        <li key={key} css={styles.item}>
          <Button {...action} ghost />
        </li>
      ))}
    </ul>
  )
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape(Button.propTypes))
}

function TopLine({ title, url, actions }) {
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      minHeight: 40
    },
    title: {
      textTransform: 'uppercase'
    }
  }

  return (
    <div css={styles.wrapper}>
      <Link href={url}>
        <Text.h3 css={styles.title}>{title}</Text.h3>
      </Link>
      {actions && actions.length > 0 && <Actions actions={actions} />}
    </div>
  )
}

TopLine.propTypes = {
  title: PropTypes.any,
  url: PropTypes.string,
  actions: Actions.propTypes.actions
}

function Items({ items }) {
  const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex'
    },
    item: {
      flex: 1,
      '&:not(:last-of-type)': { marginRight: 30 }
    },
    label: {
      display: 'block',
      marginBottom: 5,
      minHeight: 45
    },
    value: {
      fontWeight: 'normal'
    }
  }

  return (
    <ul css={styles.list}>
      {items.map((item, key) => (
        <li key={key} css={styles.item}>
          <Text data-cy-info={item.label} css={styles.label} size="smallText">
            {item.label}
          </Text>
          <Text size="typo4" css={styles.value}>
            {item.value}
          </Text>
        </li>
      ))}
    </ul>
  )
}

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.any,
      value: PropTypes.any
    })
  )
}

export default function ContractItem({
  title,
  link,
  actions,
  items,
  color,
  icon,
  style // react-spring requirement
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      position: 'relative',
      background: theme.colors.white,
      border: `1px solid ${theme.colors.lightGray}`,
      padding: '10px 10px 20px 80px',
      '&:not(:last-of-type)': { marginBottom: 20 },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -1,
        left: -1,
        bottom: -1,
        width: 6,
        background: theme.colors[color]
      }
    },
    icon: {
      position: 'absolute',
      top: 15,
      left: 25
    }
  }

  return (
    <animated.div style={style} css={styles.wrapper} data-cy="ContractBlock">
      <Icon name={icon} color={color} css={styles.icon} size={40} />
      <TopLine title={title} url={link} actions={actions} />
      {Array.isArray(items) && <Items items={items.slice(0, 6)} />}
    </animated.div>
  )
}

// const CustomValue = styled(Text)(({ tooltip, theme }) => ({
//   position: 'relative',
//   display: 'block',
//   ...(tooltip
//     ? {
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           left: 0,
//           bottom: '100%',
//           background: 'white',
//           width: '10px',
//           height: '10px',
//           marginBottom: '5px',
//           boxShadow: '1px 1px 1px 0px rgba(0,0,0,0.12)',

//           transform: 'rotate(45deg) translate(0, -5px)',
//           border: `1px solid ${theme.colors.lightGray}`,
//           zIndex: '1',
//           borderTopWidth: '0',
//           borderLeftWidth: '0',
//           opacity: 0,
//           transition: 'opacity 0.2s, transform 0.2s'
//           // transform: 'translate(0, -5px)'
//         },
//         '&:after': {
//           content: `"${tooltip}"`,
//           background: 'white',

//           position: 'absolute',
//           padding: '10px',
//           left: '-10px',
//           bottom: '100%',
//           marginBottom: '10px',
//           minWidth: '90px',
//           border: `1px solid ${theme.colors.lightGray}`,
//           borderRadius: 4,
//           boxShadow: '0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24)',
//           opacity: 0,
//           transition: 'opacity 0.2s, transform 0.2s',
//           transform: 'translate(0, -5px)',
//           lineHeight: '1.2',
//           color: theme.colors.text
//         },
//         '&:hover': {
//           '&:before': {
//             transform: 'rotate(45deg) translate(0, 0)',
//             opacity: 1
//           },
//           '&:after': {
//             opacity: 1,
//             transform: 'translate(0, 0)'
//           }
//         }
//       }
//     : {})
// }))

// function CustomValueText({ tooltip, value, subValue, ...props }) {
//   return (
//     <CustomValue
//       tooltip={tooltip}
//       size="typo5"
//       data-cy-info={props['data-cy-info']}
//     >
//       {value}
//       {subValue && <SubText size="typo6">{subValue}</SubText>}
//     </CustomValue>
//   )

ContractItem.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,

  title: TopLine.propTypes.title,
  link: TopLine.propTypes.url,
  actions: TopLine.propTypes.actions,

  items: Items.propTypes.items
}
