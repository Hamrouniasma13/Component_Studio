/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import Text from '../Text'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const MapCard = ({
  id,
  title,
  subTitle,
  description,
  phoneNumber,
  isSelected,
  onClick,
}) => {
  const { colors } = React.useContext(ThemeContext)

  const styles = {
    mapCardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '600px',
      padding: '20px 20px',
      borderBottom: `1px solid ${colors.lightGray}`,
      backgroundColor: isSelected ? '#eef0ff' : colors.white,
      '&:first-of-type': {
        borderTop: `1px solid ${colors.lightGray}`,
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
    lineWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    iconWrapper: {
      height: '20px',
    },
    textWrapper: {
      flex: '1',
      flexWrap: 'wrap',
    },
    icon: {
      width: '20px',
      height: '20px',
      marginRight: '5px',
    },
    phoneNumber: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.3px',
      lineHeight: '1.4em',
      textDecoration: 'underline',
    },
  }

  const selectItemCallback = React.useCallback(() => {
    onClick(id)
  }, [id, onClick])

  return (
    <div css={styles.mapCardWrapper} onClick={selectItemCallback}>
      <div css={styles.lineWrapper}>
        <Text tag="h3" css={{ marginRight: 22 }}>
          {title}
        </Text>
        <Text tag="h5" css={{ color: colors.label }}>
          {subTitle}
        </Text>
      </div>
      <div css={styles.lineWrapper}>
        <div css={styles.iconWrapper}>
          <Icon css={styles.icon} name="position" />
        </div>
        <div css={styles.textWrapper}>
          <Text tag="h5">{description}</Text>
        </div>
      </div>
      <div css={styles.lineWrapper}>
        <div css={styles.iconWrapper}>
          <Icon css={styles.icon} name="call" />
        </div>
        <div css={styles.textWrapper}>
          <a css={styles.phoneNumber} href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  )
}

MapCard.defaultProps = {
  subTitle: '',
  description: '',
  phoneNumber: '',
  isSelected: false,
  onClick: () => {},
}

MapCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  phoneNumber: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default MapCard
