/** @jsx jsx */
import { jsx } from '@emotion/core'
import Text from '../Text'
import PropTypes from 'prop-types'
import InputSelect from '../forms/InputSelect'
import InputAddress from '../forms/InputAddress'

const MapFilters = ({
  apiKey,
  addressValue,
  selectedOption,
  wording,
  selectOptions,
  onLocationChange,
  onSelectChange,
  doNotLoadGoogleMapsApi,
}) => {
  const styles = {
    wrapper: {
      width: '100%',
      height: '100%',
    },
    selectWrapper: {
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputWrapper: {
      display: 'flex',
      flex: 1,
      marginLeft: '15px',
    },
  }

  return (
    <div css={styles.wrapper}>
      <Text tag="h2" mb={15}>
        {wording.filter_title}
      </Text>
      <InputAddress
        autocompleteAPIKey={apiKey}
        label={wording.address_label}
        value={addressValue}
        onChangeLocation={onLocationChange}
        doNotLoadGoogleMapsApi={doNotLoadGoogleMapsApi}
      />
      <div css={styles.selectWrapper}>
        <Text tag="p">{wording.select_label}</Text>
        <div css={styles.inputWrapper}>
          <InputSelect
            value={selectedOption}
            placeholder={wording.select_placeholder}
            options={selectOptions}
            onChange={onSelectChange}
          />
        </div>
      </div>
    </div>
  )
}

MapFilters.defaultProps = {
  addressValue: '',
  selectOptions: [],
  selectedOption: null,
  onLocationChange: () => {},
  onSelectChange: () => {},
  wording: {
    filter_title: 'filter_title',
    address_label: 'address_label',
    select_label: 'select_label',
    select_placeholder: 'select_placeholder',
  },
}

MapFilters.propTypes = {
  apiKey: PropTypes.string.isRequired,
  // Input state
  addressValue: PropTypes.string,
  selectedOption: PropTypes.shape({}),
  // Data
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  wording: PropTypes.shape({}),
  // Methods
  onLocationChange: PropTypes.func,
  onSelectChange: PropTypes.func,
}

export default MapFilters
