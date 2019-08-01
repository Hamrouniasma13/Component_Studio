/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Icon from '../components/Icon'
import Link from '../components/Link'

function Item({ label, url }) {
  const styles = {
    link: {
      backgroundColor: '#fff',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      transform: 'scale(1)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.3)',
      padding: 20,

      '&:hover': {
        transform: 'scale(1.03)'
      }
    },
    label: {
      fontSize: 18,
      letterSpacing: 0.6,
      color: '#333'
    }
  }

  return (
    <Link css={styles.link} href={url}>
      <span css={styles.label}>{label}</span>
      {url && <Icon name="right" size={30} />}
    </Link>
  )
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string
}

export default function ItemList({ title, items }) {
  return (
    <Slice title={title}>
      {items &&
        items.length > 1 &&
        items.map((item, key) => (
          <div css={{ '&:not(:last-of-type)': { marginBottom: 15 } }} key={key}>
            <Item {...item} />
          </div>
        ))}
    </Slice>
  )
}

ItemList.propTypes = {
  title: Slice.propTypes.title,
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
}
