import React from 'react';
import Label from './Label';
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
      <Label>{label}</Label>
      <input type='text' className='input' {...rest} />
    </div>
  );
};

export default Input;
