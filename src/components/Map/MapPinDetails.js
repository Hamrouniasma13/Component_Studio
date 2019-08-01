/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import Text from '../Text'
import PropTypes from 'prop-types'

const MapPinDetails = ({ title, subTitle, description, phoneNumber }) => {
  const { colors } = useContext(ThemeContext)

  const styles = {
    wrapper: {
      width: '250px',
      padding: '15px',
      backgroundColor: colors.white,
      marginBottom: '5px',
      borderRadius: '5px',
      boxShadow: `0 2px 4px ${colors.black}`,
    },
    label: {
      color: colors.label,
    },
    phoneNumber: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.3px',
      lineHeight: '1.4em',
      textDecoration: 'underline',
    },
  }

  return (
    <div css={styles.wrapper}>
      <Text tag="h3">{title}</Text>
      <Text tag="h5" css={styles.label}>
        {subTitle}
      </Text>
      <Text tag="h5">{description}</Text>
      <a href={`tel:${phoneNumber}`} css={styles.phoneNumber}>
        {phoneNumber}
      </a>
    </div>
  )
}

MapPinDetails.defaultProps = {
  subTitle: PropTypes.string,
  description: PropTypes.string,
  phoneNumber: PropTypes.string,
}

MapPinDetails.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  phoneNumber: PropTypes.string,
}

export default MapPinDetails
