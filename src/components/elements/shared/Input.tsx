import React from 'react';
import './styles/input.scss';

const Input = ({ ...rest }) => {
  return <input type='text' className='input' {...rest} />;
};

export default Input;
