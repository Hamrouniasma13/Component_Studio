import React from 'react';

import Radios from '../../components/forms/Radios';

import InfoTips from './InfoTips';
import QuestionHeading from './QuestionHeading';

const QuestionRadio = ({
  label,
  color,
  name,
  options,
  info,
  onChange,
  value
}) => (
  <>
    <QuestionHeading label={label} />
    <Radios
      big
      color={color}
      name={name}
      value={value}
      options={options}
      onChange={onChange}
    />
    {info ? <InfoTips label={info.label} link={info.link} /> : null}
  </>
);

export default QuestionRadio;
