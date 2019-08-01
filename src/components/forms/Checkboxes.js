import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compact } from 'lodash';
import Checkbox from './Checkbox';

const Checkboxes = ({ color, name, big, options, onChange }) => {
  if (!options || options.length < 1) return null;

  const defaultState = new Set(
    compact(options.map(o => (o.checked === true ? o.value : null)))
  );

  const [values, setValues] = useState(defaultState);

  function onValueChange(value) {
    const newSet = new Set(values);

    if (value.checked && !newSet.has(value.name)) newSet.add(value.name);
    else newSet.delete(value.name);

    setValues(newSet);
    onChange({ name, value: [...newSet] });
  }

  return options.map(({ value, label }, i) => (
    <Checkbox
      color={color}
      id={name}
      big={big}
      key={i + value}
      name={value}
      checked={values.has(value)}
      label={label}
      onChange={onValueChange}
    />
  ));
};

Checkboxes.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string,

  /**
   * checkbox size
   */
  big: PropTypes.bool,

  /**
   * Array of value for each input
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      checked: PropTypes.bool
    })
  ),

  /**
   * Function called each time the value change
   */
  onChange: PropTypes.func
};

Checkboxes.defaultProps = {
  options: [],
  big: false,
  onChange: () => {}
};

export default Checkboxes;
