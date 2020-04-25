import React from 'react';
import './styles/input.scss';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: (event: any) => void;
}

const Input = ({label, ...rest }: InputProps) => {
  return (
    <div>
      <label className='label'>{label}</label>
      <input type='text' className='input' {...rest} />
    </div>
  );
};

export default Input;
