/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

function ContactInfo({ label, value }) {
  const isPhoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  const isEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

  const isPhoneNumber =
    value.match(isPhoneNumberRegex) &&
    value.match(isPhoneNumberRegex).length > 0
  const isEmail =
    value.match(isEmailRegex) && value.match(isEmailRegex).length > 0

  const styles = {
    wrapper: {
      '& + &': {
        marginTop: 5,
      },
    },
    label: {
      color: '#616161',
      display: 'inline-block',
    },
    value: {
      display: 'inline-block',
      textDecoration: isPhoneNumber || isEmail ? 'underline' : 'none',
    },
  }

  return (
    <li css={styles.wrapper}>
      <Text css={styles.label}>{label}</Text>{' '}
      <a
        css={styles.value}
        href={
          isPhoneNumber ? `tel: ${value}` : isEmail ? `mailto: ${value}` : ''
        }
      >
        {value}
      </a>
    </li>
  )
}

ContactInfo.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}

export default function ContactCard({
  color,
  card_category_title,
  title,
  description,
  items,
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      border: 'solid 1px #e5e5e5',
      padding: 20,
      paddingTop: 25, // add place for the top border
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      minHeight: 300,
      height: '100%',
      maxWidth: '350px',
      [theme.media.tablet]: {
        minHeight: 364,
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        top: -1,
        left: -1,
        right: -1,
        height: 6,
        backgroundColor: theme.colors[color] || color,
      },
    },
    card_category_title_wrapper: {
      marginBottom: 25,
    },
    card_category_title: {
      color: theme.colors[color] || color,
      borderBottom: `1px solid ${theme.colors[color] || color}`,
      paddingBottom: 10,
      borderBottomWidth: 3,
    },
    description: {
      flex: 1,
    },
    phones: {
      margin: 0,
      marginTop: 20,
      padding: 0,
      listStyleType: 'none',
    },
    action: {
      marginTop: 20,
      textAlign: 'center',
    },
  }

  return (
    <div css={styles.wrapper}>
      {card_category_title && (
        <div css={styles.card_category_title_wrapper}>
          <Text size="p" css={styles.card_category_title}>
            {card_category_title}
          </Text>
        </div>
      )}
      {title && (
        <Text size="typo2" mb={20}>
          {title}
        </Text>
      )}
      {description && (
        <Text tag="div" css={styles.description}>
          {description}
        </Text>
      )}
      {items && items.length > 0 && (
        <ul css={styles.phones}>
          {items.map(({ label, value }, key) => (
            <ContactInfo key={key} label={label} value={value} />
          ))}
        </ul>
      )}
    </div>
  )
}

ContactCard.propTypes = {
  color: PropTypes.string,
  card_category_title: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
}
