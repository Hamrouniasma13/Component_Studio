/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useCallback } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import MapPinDetails from './MapPinDetails'

const PIN = 'PIN'
const CURRENT_POSITION = 'CURRENT_POSITION'

const MapPin = ({
  id,
  type,
  isSelected,
  onSelectItem,
  selectedPlaceID,
  item,
}) => {
  const styles = {
    mapPinWrapper: {
      position: 'relative',
      zIndex: '2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translate(-50%, -100%)',
    },
    mapPinIconSelected: {
      width: '38px',
      height: '49px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    mapPinIcon: {
      width: '23px',
      height: '28px',
      transform: 'translate(-50%, -100%)',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }

  const selectItemCallback = useCallback(() => {
    if (id === selectedPlaceID) {
      onSelectItem(null)
    } else {
      onSelectItem(id)
    }
  }, [id, onSelectItem, selectedPlaceID])

  switch (type) {
    case PIN:
      if (isSelected) {
        return (
          <div css={styles.mapPinWrapper}>
            <MapPinDetails
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              phoneNumber={item.phoneNumber}
            />
            <Icon
              name={'pinselected'}
              css={styles.mapPinIconSelected}
              onClick={selectItemCallback}
            />
          </div>
        )
      }
      return (
        <Icon
          name={'pin'}
          css={styles.mapPinIcon}
          onClick={selectItemCallback}
        />
      )
    case CURRENT_POSITION:
      return <Icon css={styles.mapPinIcon} name={'pinuser'} />
    default:
      return null
  }
}

MapPin.defaultProps = {
  id: null,
  type: PIN,
  onSelectItem: () => {},
  isSelected: false,
  selectedPlaceID: null,
  item: {},
}

MapPin.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelectItem: PropTypes.func,
  isSelected: PropTypes.bool,
  selectedPlaceID: PropTypes.number,
  type: PropTypes.oneOf([PIN, CURRENT_POSITION]),
  item: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    description: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
}

export default MapPin
