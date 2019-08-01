/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import $script from 'scriptjs'

import InputText from './InputText'

const GOOGLE_MAPS_API_URL =
  'https://maps.googleapis.com/maps/api/js?libraries=places&key='
const MIN_STR_LENGTH_TO_AUTOCOMPLETE = 2
const ENTER_KEY = 13
const DOWN_KEY = 40
const UP_KEY = 38

const loadGoogleMapsApi = API_KEY =>
  new Promise((res, rej) => {
    if (typeof window.google === 'undefined') {
      const url = `${GOOGLE_MAPS_API_URL}${API_KEY}`
      return $script(url, () => {
        if (typeof window.google === 'undefined') {
          return rej('Failed loading google maps api')
        } else {
          return res({
            autoComplete: new window.google.maps.places.AutocompleteService(),
            geocoder: new window.google.maps.Geocoder(),
          })
        }
      })
    } else {
      return res({
        autoComplete: new window.google.maps.places.AutocompleteService(),
        geocoder: new window.google.maps.Geocoder(),
      })
    }
  })

const InputAddress = ({
  autocompleteAPIKey,
  label,
  placeholder,
  value,
  onChangeLocation,
  doNotLoadGoogleMapsApi,
}) => {
  const [inputValue, setValue] = React.useState(value)
  const [showOptions, setShowOptions] = React.useState(false)
  const [options, setOptions] = React.useState([])
  const [place_id, setPlaceID] = React.useState(null)
  const [cursorIndexOnAutocompleteList, setCursorIndex] = React.useState(-1)
  const [googleMapsApi, setGoogleMapsApi] = React.useState({})
  const { colors } = useContext(ThemeContext)

  const styles = {
    wrapper: {
      position: 'relative',
      width: '100%',
    },
    optionsWrapper: {
      position: 'absolute',
      width: '100%',
      minWidth: '240px',
      border: `1px solid ${colors.lightGray}`,
      borderRadius: '3px',
      backgroundColor: colors.white,
      marginTop: '5px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      zIndex: 1,
    },
    option: {
      width: '100%',
      height: '45px',
      padding: '2px 15px',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.lightGray,
      },
    },
    selectedOption: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    cursorHoverOption: {
      backgroundColor: colors.lightGray,
    },
  }

  useEffect(() => {
    // To prevent loading the googleMaps twice api on render
    // useful when GoogleMapReact is next to this component
    if (!doNotLoadGoogleMapsApi) {
      loadGoogleMapsApi(autocompleteAPIKey)
        .then(googleApi => setGoogleMapsApi(googleApi))
        .catch(console.log)
    }
  }, [autocompleteAPIKey, doNotLoadGoogleMapsApi])

  useEffect(() => {
    setValue(value)
  }, [value])

  const getAutocompleteSuggestions = input =>
    new Promise(res => {
      if (googleMapsApi.autoComplete) {
        return googleMapsApi.autoComplete.getPlacePredictions(
          { input },
          suggestions => res(suggestions)
        )
      }
      return res(null)
    })

  const getPlaceDetailsFromAutocompleteResult = placeId =>
    new Promise(res =>
      googleMapsApi.geocoder.geocode({ placeId }, placeDetails =>
        res(placeDetails[0])
      )
    )

  const handleChange = ({ value }) => {
    setCursorIndex(-1)
    setValue(value)
    setPlaceID(null)
    if (value.length >= MIN_STR_LENGTH_TO_AUTOCOMPLETE) {
      getAutocompleteSuggestions(value).then(suggestions =>
        setOptions(suggestions)
      )
    }
  }

  const onSelectAddress = id => () => {
    setPlaceID(id)
    getPlaceDetailsFromAutocompleteResult(id).then(result => {
      setValue(result.formatted_address)
      onChangeLocation({
        location: {
          lat: result.geometry.location.lat(),
          lng: result.geometry.location.lng(),
        },
        address: result.formatted_address,
      })
    })
  }

  const handleBlur = () =>
    setTimeout(() => {
      setShowOptions(false)
    }, 300)

  const handleKeyPress = event => {
    if (options && options.length > 0) {
      if (event.keyCode === ENTER_KEY && cursorIndexOnAutocompleteList !== -1) {
        const selectedOption = options[cursorIndexOnAutocompleteList]
        onSelectAddress(selectedOption.place_id)()
      } else if (
        event.keyCode === DOWN_KEY &&
        cursorIndexOnAutocompleteList !== options.length - 1
      ) {
        event.preventDefault()
        setCursorIndex(cursorIndexOnAutocompleteList + 1)
      } else if (
        event.keyCode === UP_KEY &&
        cursorIndexOnAutocompleteList > -1
      ) {
        event.preventDefault()
        setCursorIndex(cursorIndexOnAutocompleteList - 1)
      }
    }
  }

  const handleFocus = () => {
    // We load the GoogleMapsApi here because if we
    // load it right after render, it can load
    // the googleMapsApi twice (conflict with GoogleMapsReact)
    if (!googleMapsApi.autoComplete || !googleMapsApi.geocoder) {
      loadGoogleMapsApi(autocompleteAPIKey)
        .then(googleApi => setGoogleMapsApi(googleApi))
        .catch(console.log)
    }
    setShowOptions(true)
  }

  return (
    <div css={styles.wrapper}>
      <InputText
        label={label}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyPress}
        iconName="position"
        iconPosition="left"
        css={{ maxWidth: 'none' }}
      />
      {options &&
        options.length > 0 &&
        !place_id &&
        inputValue.length >= MIN_STR_LENGTH_TO_AUTOCOMPLETE &&
        showOptions && (
          <div css={styles.optionsWrapper}>
            {options.map((item, index) => (
              <div
                key={item.place_id}
                css={{
                  ...styles.option,
                  ...(place_id === item.place_id && styles.selectedOption),
                  ...(cursorIndexOnAutocompleteList === index &&
                    styles.cursorHoverOption),
                }}
                onClick={onSelectAddress(item.place_id)}
              >
                <span alt={item.description}>{item.description}</span>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

InputAddress.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  doNotLoadGoogleMapsApi: false,
}

InputAddress.propTypes = {
  autocompleteAPIKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  doNotLoadGoogleMapsApi: PropTypes.bool,
}

export default InputAddress
