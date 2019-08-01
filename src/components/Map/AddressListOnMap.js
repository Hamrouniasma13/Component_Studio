/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import { useMedia } from 'react-use'
import MapFilters from './MapFilters'
import GoogleMaps from './GoogleMaps'
import MapCard from './MapCard'
import Text from '../Text'
import Icon from '../Icon'
import { breakpoints } from '../../theme/media'

const AddressListOnMap = ({
  publicApiKey,
  positionOnMap,
  zoomOnMap,
  userLocationPin,
  userAddress,
  selectedOption,
  selectOptionsList,
  onMapBoundsChange,
  onLocationChange,
  onSelectOptionChange,
  wording,
  places,
  wrapperCss,
}) => {
  const theme = useContext(ThemeContext)
  const [selectedPlaceID, setSelectedPlaceID] = useState(null)
  const isMobile = useMedia(`(max-width: ${breakpoints.mobile}px)`)

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      [theme.media.mobile]: {
        height: '700px',
      },
    },
    sideListWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '15px',
      [theme.media.mobile]: {
        width: '40%',
        maxWidth: '600px',
      },
    },
    filtersWrapper: {
      width: '100%',
      marginBottom: '20px',
    },
    mapCardsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      overflowY: 'hidden',
      [theme.media.mobile]: {
        overflowY: 'scroll',
      },
    },
    noResultIconWrapper: {
      width: '100%',
      margin: '15px 0 15px 0',
    },
    googleMapWrapper: {
      display: 'none',
      [theme.media.mobile]: {
        display: 'flex',
        flex: '1',
        height: '100%',
      },
    },
  }

  return (
    <div css={merge(styles.wrapper, wrapperCss)}>
      <div css={styles.sideListWrapper}>
        <div css={styles.filtersWrapper}>
          <MapFilters
            apiKey={publicApiKey}
            wording={wording}
            addressValue={userAddress}
            selectedOption={selectedOption}
            selectOptions={selectOptionsList}
            onLocationChange={onLocationChange}
            onSelectChange={onSelectOptionChange}
            doNotLoadGoogleMapsApi
          />
        </div>
        <div css={styles.mapCardsWrapper}>
          {places.length === 0 ||
          (isMobile && (!userLocationPin || !selectedOption)) ? (
            <Fragment>
              <div css={styles.noResultIconWrapper}>
                <Icon name="doctors" size="90%" />
              </div>
              <Text
                tag="h3"
                css={{ color: theme.colors.darkGrey, textAlign: 'center' }}
              >
                {wording.no_result_msg}
              </Text>
            </Fragment>
          ) : null}
          {places.map(item => (
            <MapCard
              key={`${item.title}${item.id}`}
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              phoneNumber={item.phoneNumber}
              isSelected={item.id === selectedPlaceID}
              onClick={setSelectedPlaceID}
            />
          ))}
        </div>
      </div>
      <div css={styles.googleMapWrapper}>
        <GoogleMaps
          apiKey={publicApiKey}
          zoomOnMap={zoomOnMap}
          positionOnMap={positionOnMap}
          userLocationPin={userLocationPin}
          onBoundsChange={onMapBoundsChange}
          onSelectItem={setSelectedPlaceID}
          selectedPlaceID={selectedPlaceID}
          places={places}
        />
      </div>
    </div>
  )
}

AddressListOnMap.defaultProps = {
  publicApiKey: '',
  userLocationPin: null,
  onMapBoundsChange: () => {},
  onLocationChange: () => {},
  places: [],
  wrapperCss: {},
}

AddressListOnMap.propTypes = {
  publicApiKey: PropTypes.string,
  positionOnMap: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoomOnMap: PropTypes.number.isRequired,
  userLocationPin: PropTypes.arrayOf(PropTypes.number),
  onMapBoundsChange: PropTypes.func,
  onLocationChange: PropTypes.func,
  selectOptionsList: PropTypes.arrayOf(PropTypes.shape({})),
  wrapperCss: PropTypes.shape({}),
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

export default AddressListOnMap
