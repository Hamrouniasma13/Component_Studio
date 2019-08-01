/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Slice from './Slice'
import ContactCard from '../components/ContactCard'

export default function ContactCards({ title, contacts }) {
  const theme = useContext(ThemeContext)

  const styles = {
    contacts: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      justifyContent: 'center',
      [theme.media.laptop]: {
        justifyContent: 'flex-start',
      },
    },
    contact: {
      width: 350,
      marginBottom: 20,
      marginRight: 20,
    },
  }

  return (
    <Slice title={title}>
      {contacts && contacts.length > 0 && (
        <ul css={styles.contacts}>
          {contacts.map((contact, key) => (
            <li css={styles.contact} key={key}>
              <ContactCard {...contact} />
            </li>
          ))}
        </ul>
      )}
    </Slice>
  )
}

ContactCards.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(ContactCard.propTypes)),
}
