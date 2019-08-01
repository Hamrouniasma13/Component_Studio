/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Checkboxes from '../components/forms/Checkboxes'
import Radios from '../components/forms/Radios'

function FilterGroup({ all, multiple = true, name, label, options, onFilter }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    label: {
      margin: '0 10px 15px 0',
      display: 'block',
      [theme.media.tablet]: {
        display: 'inline'
      }
    }
  }

  // Catch 'all' value, when the user want to remove his filters.
  function onChange({ value }) {
    const toPass = value === 'all' ? '' : { value }
    onFilter(toPass)
  }

  // Add 'all' filter, adding a possibility to reset all the filters
  const resetOption = { value: '', label: 'Tous' }
  const _options = all ? [resetOption, ...options] : options

  return (
    <nav css={{ marginBottom: 10 }}>
      <span css={styles.label} data-cy="typeContract">
        {label}
      </span>
      <span>
        {multiple ? (
          <Checkboxes name={name} onChange={onChange} options={_options} />
        ) : (
          <Radios name={name} onChange={onChange} options={_options} />
        )}
      </span>
    </nav>
  )
}

export default function SimpleFilters({ all, filters, onFilter }) {
  if (!filters || filters.length < 1) return null

  return (
    <div css={{ margin: '30px 0 10px' }}>
      {filters.map((item, i) => (
        <FilterGroup
          all={all}
          key={i + item.id}
          multiple={item.multiple}
          name={item.id}
          label={item.label}
          options={item.filters}
          onFilter={onFilter}
        />
      ))}
    </div>
  )
}

SimpleFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string
    })
  ),
  onFilter: PropTypes.func
}

SimpleFilters.defaultProps = {
  filters: [],
  onFilter: () => {}
}
