/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'
import Button from './Button'
import SimpleButton from './SimpleButton'

function Actions({ actions }) {
  const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      marginLeft: 10,
      display: 'inline-block',
    },
  }

  return (
    <ul css={styles.list}>
      {actions.map(({ label, ...rest }, key) => (
        <li key={key} css={styles.item}>
          <Button {...rest} ghost>
            {label}
          </Button>
        </li>
      ))}
    </ul>
  )
}

function FormInfos({
  className,
  title,
  infos,
  actions,
  enableShrank,
  shrankCount,
  shrankLabel,
}) {
  const { colors, media } = React.useContext(ThemeContext)
  const [shrank, setShrank] = React.useState(true)

  if (infos && infos.length <= shrankCount) {
    enableShrank = false
  }
  const shrankInfos =
    enableShrank && shrank ? infos.slice(0, shrankCount) : infos

  const styles = {
    wrapper: {
      maxWidth: '600px',
      textAlign: 'left',
      backgroundColor: 'white',
      marginBottom: '20px',
      [media.tablet]: {
        padding: '20px 30px 15px',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      },
      [media.laptop]: {
        padding: '30px',
        boxSizing: 'border-box',
      },
    },
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
    },
    title: {
      marginTop: 7,
    },
    list: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
    },
    item: {
      padding: '15px 0',
      borderTop: `1px solid ${colors.lightGray}`,

      [media.tablet]: {
        display: 'flex',
      },
    },
    label: {
      display: 'block',
      marginBottom: 5,

      [media.tablet]: {
        marginBottom: 0,
        flex: '0 0 45%',
      },
    },
    buttonWrapper: {
      textAlign: 'center',
      marginTop: 20,
    },
  }

  const shrankLabelFn = () => {
    if (typeof shrankLabel === 'function') {
      return shrankLabel({ isOpen: !shrank })
    } else {
      return shrankLabel
    }
  }

  const handleClick = e => {
    e.preventDefault()
    setShrank(!shrank)
  }

  return (
    <div className={className} css={styles.wrapper}>
      <div css={styles.head}>
        {title ? <Text.h2 css={styles.title}>{title}</Text.h2> : null}
        {actions && actions.length > 0 ? <Actions actions={actions} /> : null}
      </div>

      <ul css={styles.list}>
        {shrankInfos.map(({ label, value }, key) => (
          <li css={styles.item} key={key}>
            <Text css={styles.label} size="typo4">
              {label}
            </Text>
            <Text size="typo5">{value}</Text>
          </li>
        ))}
      </ul>
      {enableShrank ? (
        <div css={styles.buttonWrapper}>
          <SimpleButton onClick={handleClick}>{shrankLabelFn()}</SimpleButton>
        </div>
      ) : null}
    </div>
  )
}

FormInfos.propTypes = {
  title: PropTypes.string,
  infos: PropTypes.array,
  actions: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  enableShrank: PropTypes.bool,
  shrankCount: PropTypes.number,
  shrankLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

FormInfos.defaultProps = {
  title: '',
  infos: [],
  actions: [],
  enableShrank: false,
  shrankCount: 2,
  shrankLabel: isOpen => (isOpen ? 'See more' : 'See less'),
}

export default FormInfos
