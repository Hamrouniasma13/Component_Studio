/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import MapPin from './MapPin'

const GoogleMaps = ({
  apiKey,
  positionOnMap,
  userLocationPin,
  zoomOnMap,
  places,
  selectedPlaceID,
  onBoundsChange,
  onSelectItem,
}) => {
  const [google, setGoogle] = useState({})
  const [defaultValues] = useState({
    zoomOnMap,
    positionOnMap,
  })

  const wrapper = {
    width: '100%',
    height: '100%',
  }

  const apiIsLoaded = (map, maps) => {
    setGoogle({ map, maps })
  }

  // componentDidUpdate
  useEffect(() => {
    if (
      google.map &&
      google.maps &&
      userLocationPin &&
      userLocationPin.length === 2
    ) {
      google.map.setCenter(
        new google.maps.LatLng(userLocationPin[0], userLocationPin[1])
      )
      google.map.setZoom(15)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocationPin])

  return (
    <div css={wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey, libraries: ['places'] }}
        defaultCenter={defaultValues.positionOnMap}
        defaultZoom={defaultValues.zoomOnMap}
        onChange={onBoundsChange}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
      >
        {places.map(item => (
          <MapPin
            key={item.id}
            id={item.id}
            lat={item.lat}
            lng={item.lng}
            type="PIN"
            isSelected={item.id === selectedPlaceID}
            selectedPlaceID={selectedPlaceID}
            item={item}
            onSelectItem={onSelectItem}
          />
        ))}
        {userLocationPin && userLocationPin.length === 2 && (
          <MapPin
            key="CURRENT_POSITION"
            lat={userLocationPin[0]}
            lng={userLocationPin[1]}
            type="CURRENT_POSITION"
          />
        )}
      </GoogleMapReact>
    </div>
  )
}

GoogleMaps.defaultProps = {
  apiKey: '',
  defaultZoom: 10,
  selectedPlaceID: null,
  onBoundsChange: () => {},
  onSelectItem: () => {},
  userLocationPin: null,
  places: [],
}

GoogleMaps.propTypes = {
  apiKey: PropTypes.string,
  userLocationPin: PropTypes.arrayOf(PropTypes.number),
  zoomOnMap: PropTypes.number,
  selectedPlaceID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelectItem: PropTypes.func,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      lat: PropTypes.number,
      lng: PropTypes.number,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      description: PropTypes.string,
      phoneNumber: PropTypes.string,
    })
  ),
}

export default GoogleMaps
